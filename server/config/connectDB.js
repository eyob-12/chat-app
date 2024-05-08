
const mongoose = require("mongoose");
async function connectDb() {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log("DATABASE CONNECTED ....");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDb;