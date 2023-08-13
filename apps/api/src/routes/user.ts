import {Router} from 'express'
import jwt  from 'jsonwebtoken'

import User from '../models/user'
import Product from '../models/product'
import { loginData, signupData } from '../middleware/typeCheck';
import { verifyToken } from '../middleware/auth';

const Secret = "adminSecret";

const userRouter = Router()

userRouter.post('/signup', async(req,res) => {
    try {
        const inputData = signupData.safeParse({...req.body})
        if(!inputData.success){
            return res.send(400).json({message:"Incorrect Data"})
        }
        const {username, email, password} = inputData.data
        const existingUser = await User.findOne({$or:[{username}, {email}]})
        if(existingUser){
            return res.status(403).json({message:"User already exists"})
        }else{
            const user = new User({username, email, password})
            await user.save()
            return res.status(200).json({message:"User created successfully"})
        }
    } catch (error) {
        return res.sendStatus(500)
    }
})

userRouter.post('/login', async(req,res) => {
    try {
        const {username, password} = req.headers
        const inputData = loginData.safeParse({username, password})
        if(!inputData.success){
            return res.status(400).json({message:"Invalid data"})
        }
        const user = await User.findOne({username})
        if(user && user.password === password){
            const token = jwt.sign({username}, Secret, {expiresIn:'1h'})
            return res.status(200).json({message:"Logged in successfully", token})
        }else{
            return res.status(404).json({message:"User not found"})
        }
    } catch (error) {
        return res.sendStatus(500)
    }
})

userRouter.get('/products', async(req,res) => {
    try {
        const products = await Product.find({isAvailable:true})
        if(products){
            return res.status(200).json({products})
        }else{
            return res.status(404).json({message:"No products found"})
        }
    } catch (error) {
        return res.sendStatus(500)
    }
})

userRouter.get('/product/:productId', async(req,res) => {
    try {
        const productId = req.params.productId
        const product = await Product.findById(productId)
        if(product){
            return res.status(200).json({product})
        }else{
            return res.status(404).json({message:"Status not found"})
        }
    } catch (error) {
        return res.sendStatus(500)
    }
})

userRouter.post('/product/:productId', verifyToken,async(req,res) => {
    try {
        const username = req.headers['username']
        const productId = req.params.productId
        const user = await User.findOne({username})
        const product = await Product.findById(productId)
        if(product && user){
            user.purchasedProducts.push(product._id)
            await user.save()
            return res.status(200).json({message:"Successfully purchased product"})
        }else{
            return res.status(404).json({message:"product not found"})
        }
    } catch (error) {
        return res.sendStatus(500)
    }
})

export default userRouter
