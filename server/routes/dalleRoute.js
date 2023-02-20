import express from "express";
const router = express.Router();
import { generateImage, testRoute } from "../controllers/dalle.controller.js";

router.route("/").get(testRoute);
router.route("/").post(generateImage);

export default router;
