import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import PostRoutes from "./routes/postRoute.js";
import aiRoutes from "./routes/aiRoute.js";

//Configure environment
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/crul", aiRoutes);

app.get('/',(req, res)=>{
  res.send('Welcome to CRUL API, Visit /api/v1/crul for better use');
})

// Start server
const startServer = async () => {
  try {
    connectDB();
    app.listen(4090, () =>
      console.log("Server has started on https://crul.onrender.com")
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
