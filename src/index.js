// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connetDB from "./db/index.js";
import "dotenv/config";
import { app } from "./app.js";
import dotenv from "dotenv";

// FIRST APPROACH
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on((err) => {
//       console.log("Error", err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listning on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })();

// SECOND APPROACH

dotenv.config({
  path: "./env",
});

connetDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`SERVER is runnig at port ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("MONGODB connetin failed !!!", err);
  });
