import mongoose from "mongoose";

//Function to connect to the mongodb
export const connectDB = async (res,req) => {
    try {

        mongoose.connection.on('connected', ()=> console.log('Database Connected'))
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
    } catch (error) {
        console.log(error);
    }
}