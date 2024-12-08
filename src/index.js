import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(`Error connecting to MongoDB : ${e}`);
  });

/*import express from "express";

const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        app.on("error", (e) => {
            console.log("Error connecting to MongoDB", e);
            throw e;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(`MongoDB Error: ${error}`);
    }
}) ()*/
