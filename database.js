import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "Voting-System",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Successfully connected to the Voting-System-Project Database");
    }).catch((err) => {
        console.log(`Connection failed:, ${err}`);
    });
};

export default conn;