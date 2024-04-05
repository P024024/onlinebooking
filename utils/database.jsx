import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected){
        console.log("mongo is connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "moviebooking",
            useNeWUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error){
        console.log(error);
    }
}