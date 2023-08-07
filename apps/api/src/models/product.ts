import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name:String,
    category:String,
    description:String,
    imageLink:String,
    price: Number,
    isAvailable:Boolean,
    rating:Number
})

export default model('Product', ProductSchema)