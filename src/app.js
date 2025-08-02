import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import healthcheckRouter from "./routes/healthcheck.routes.js";

const app = express();

// CORS middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Common middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Use routes
app.use("/api/v1/healthcheck", healthcheckRouter);

export default app;
