import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({ 
    path: "./.env" 
});

connectDB()


/*
This is another way to connect to MongoDB using Mongoose and Express.js

--here we directly import the express module and create an app instance in index.js file only.

-- Our entire database connection logic is wrapped in an async IIFE (Immediately Invoked Function Expression) to handle asynchronous operations.
   or we can use async function and call it in the end of the file.

import mongoose from "mongoose";  
import { DB_NAME } from "./contants";
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.error("Server error:", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();

*/