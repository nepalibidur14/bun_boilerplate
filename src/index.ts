import express from "express";
import { config } from "./config";
import routes from "./routes";

const app = express();
app.use(express.json()); // Middleware for JSON parsing

// Load Routes
app.use("/", routes);

app.listen(config.PORT, () => {
    console.log(`🚀 Server running at http://localhost:${config.PORT}`);
});
