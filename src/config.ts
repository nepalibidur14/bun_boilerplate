import dotenv from "dotenv";

dotenv.config(); // Load .env file

export const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/bunapp",
};
