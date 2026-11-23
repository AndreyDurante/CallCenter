import mongoose from "mongoose";

export default async function ConectaDatabase () {
    const url = process.env.DB_MONGO_URL;

    if (!url) {
        throw new Error("A variável DB_MONGO_URL não foi definida.");
    }

    await mongoose.connect(url, { serverSelectionTimeoutMS: 5000 });
    return mongoose.connection;
}
