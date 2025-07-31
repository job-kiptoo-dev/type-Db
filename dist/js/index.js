"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
// Load environment variables from .env file
dotenv_1.default.config();
// Initialize Express application
const app = (0, express_1.default)();
// Ensure PORT and DB_URI are set in environment variables
const PORT = process.env.PORT;
const URI = process.env.DB_URI;
// Check if PORT and URI are defined
if (!PORT || !URI) {
    console.error("Environment variables PORT and DB_URI must be set.");
    process.exit(1);
}
// Connect to MongoDB using Mongoose
mongoose_1.default.connect(URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));
// Middleware to parse JSON requests
app.use((0, cors_1.default)());
//parse JSON requests
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
