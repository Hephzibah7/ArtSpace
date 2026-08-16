// src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import userRoutes from "./src/routes/userRoutes.js"
import productRoutes from "./src/routes/productRoutes.js"
import "./src/cron/reservationCron.js"
import orderRoutes from "./src/routes/orderRoutes.js"
import artistRoutes from "./src/routes/artistRoutes.js"

dotenv.config();  

const app = express();
app.use(express.json());


const FRONTEND_URL = "http://localhost:3000";

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ✅ Connect to MongoDB

connectDB();

app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("api/artist", artistRoutes);


//errorHandler should be registered last
app.use(errorHandler);

// ✅ Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

