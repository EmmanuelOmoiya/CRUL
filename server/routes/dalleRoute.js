import express from "express";
const router = express.Router();
import { generateImage, testRoute, generateJokes } from "../controllers/dalle.controller.js";

router.route("/").get(testRoute);
router.route("/").post(generateImage);
router.route("/jokes").post(generateJokes);

export default router;
