import express, { Router } from "express";
import mongoose from "mongoose";
import serverless from "serverless-http";
import User from "../../models/user";

const api = express();

const router = Router();
router.get("/hello", async (req, res) => {
  const response = await User.find();
  res.status(200).send(response);
});

api.use("/api/", router);

mongoose.connect(
  "mongodb+srv://dave626429:mHNeDA8toxYIGWm7@cluster0.yd4po25.mongodb.net/tweeter_clone?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;

db.on("connected", () => console.log("DB connected"));

export const handler = serverless(api);
