import mongoose from 'mongoose';
mongoose.set("strictQuery",true);
export async function connectToMongoDb(url) {
    return mongoose.connect(url);
}
