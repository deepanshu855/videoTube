const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// import routes
const healthcheckRouter = require("./routes/healthcheck.routes.js");

// CORS middleware;
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Common middlewares;
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// use routes

app.use("/api/v1/healthcheck", healthcheckRouter);
// Once we reach this route the healthcheckRouter will do rest of the work.

module.exports = app;
