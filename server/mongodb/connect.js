// import mongoose from "mongoose";

// const connectDB = (url) => {
//   mongoose.set("strictQuery", true);
//   mongoose
//     .connect(url)
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.log(err));
// };

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected...');
  } catch (error) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;