import mongoose from "mongoose";

const connectDb = async () => {
    if (mongoose.connection.readyState >= 1) return;
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        return conn;
    } catch (error) {
        process.exit(1);
    }
}

export default connectDb;
