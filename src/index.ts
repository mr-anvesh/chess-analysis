import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import apiRouter from "./api";

const app = express();

app.use(express.json());

app.use("/static",
    express.static(path.resolve(process.cwd(), "dist/public")),
    express.static(path.resolve(process.cwd(), "src/public"))
);

app.use("/api", apiRouter);

app.get("/", async (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "src/public/pages/report/index.html"));
});

app.get("/privacy", async (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "src/public/pages/privacy/index.html"));
});

const port = process.env.PORT || "3000";

if (!process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });
}

export default app;