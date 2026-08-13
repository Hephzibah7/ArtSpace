import mongoose from "mongoose";


const mongoURI ="mongodb://hephzibahranjan_db_user:6SxWeo0K9UvsAshf@ac-lgvitaq-shard-00-00.rvrgdg2.mongodb.net:27017,ac-lgvitaq-shard-00-01.rvrgdg2.mongodb.net:27017,ac-lgvitaq-shard-00-02.rvrgdg2.mongodb.net:27017/?ssl=true&replicaSet=atlas-iay5m0-shard-0&authSource=admin&appName=Cluster0";
mongoose.set('debug', true);
// Function to connect to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            // modern mongoose usually doesn't need these but keep for clarity
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // fail faster if unreachable
        } as mongoose.ConnectOptions);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // stop the app if DB connection fails
    }
};





