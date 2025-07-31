const express = require("express");
const router = express.Router();

const healthcheck = require("../controllers/health.controller.js");

router.route("/").get(healthcheck);

// This is not home(/) route it basically transfers the control to healthcheck when any route accessed in app.js.
// router.route("/").get(healthcheck); 
// router.route("/test").get(healthcheck); => router served will be /api/v1/healthcheck/test

module.exports = router;
