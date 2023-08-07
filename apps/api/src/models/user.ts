import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username:String,
    email:String,
    password:String,
    purchasedProducts: [{type: Schema.Types.ObjectId, ref:'product'}]
})

export default model('User', UserSchema)