import express from "express";
import { WebSocketServer } from "ws";
import { config } from "./config";
import { connectDB } from "./db";
import routes from "./routes";

const app = express();
app.use(express.json());

// Load Routes
app.use("/", routes);

// Connect to MongoDB
connectDB();

// Start HTTP server
const server = app.listen(config.PORT, () => {
    console.log(`🚀 Server running at http://localhost:${config.PORT}`);
});

// WebSocket Setup
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    console.log("🟢 New WebSocket connection");

    ws.on("message", (message) => {
        console.log(`📩 Received: ${message}`);
        ws.send(`📢 Server received: ${message}`);
    });

    ws.on("close", () => {
        console.log("🔴 WebSocket disconnected");
    });
});
