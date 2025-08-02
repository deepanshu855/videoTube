import express from "express";
import upload from "../middlewares/multer.middleware.js";
import registerUser from "../controllers/user.controller.js";

const router = express.Router();

router.route("/registor").post(registerUser);

export default router;
