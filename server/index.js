import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import PostRoutes from "./routes/postRoute.js";
import DalleRoutes from "./routes/dalleRoute.js";

//Configure environment
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/dalle", DalleRoutes);

// Start server
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(4090, () =>
      console.log("Server has started on http://localhost:4090")
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
