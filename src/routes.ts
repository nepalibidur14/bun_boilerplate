import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to Bun.js Boilerplate!" });
});

export default router;
