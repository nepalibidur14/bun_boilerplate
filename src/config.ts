import dotenv from "dotenv";

dotenv.config(); // Load .env file

export const config = {
    PORT: process.env.PORT || 3000,
};
