import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.route("/").get(getAllPosts);
router.route("/").post(createPost);
router.route("/:id").get(getSinglePost);

export default router;
