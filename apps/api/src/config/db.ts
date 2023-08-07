import mongoose from "mongoose"

const CONNECTION_URL = `mongodb+srv://daksh199922:daksh@cluster0.dh09xjz.mongodb.net/ecommerce?retryWrites=true&w=majority`

export default async() => {
    try {
        await mongoose.connect(CONNECTION_URL)
        console.log('Connected to mongodb');
        
    } catch (error) {
        console.log(error)
    }
}