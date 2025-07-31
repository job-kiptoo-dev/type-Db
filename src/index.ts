console.log("Hello");
import express, { Express } from "express";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app: Express = express();

// Ensure PORT and DB_URI are set in environment variables
const PORT: string = process.env.PORT!;
const URI: string = process.env.DB_URI!;

// Check if PORT and URI are defined
if (!PORT || !URI) {
  console.error("Environment variables PORT and DB_URI must be set.");
  process.exit(1);
}

// Connect to MongoDB using Mongoose
mongoose.connect(URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware to parse JSON requests
app.use(cors())
//parse JSON requests
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})




