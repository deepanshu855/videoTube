import express from "express";
import healthcheck from "../controllers/health.controller.js";

const router = express.Router();

router.route("/").get(healthcheck);

export default router;

// This is not home(/) route it basically transfers the control to healthcheck when any route accessed in app.js.
// router.route("/").get(healthcheck);
// router.route("/test").get(healthcheck); => router served will be /api/v1/healthcheck/test
