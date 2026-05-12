import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "./models/User";


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const mongo_url = process.env.MONGO_URL as string || "mongodb://localhost/magic-binder";

mongoose
  .connect(mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(`MongoDB connection error`, error));

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const user = new User({name, email, password: await bcrypt.hash(password, salt)});
    await user.save();
    res.status(201).json({
      success: true,
      message: "User created",
      id: user._id,
      accessToken: user.accessToken,
    });
  } catch (error) {
      res.status(400).json({
      success: false,
      message: "Could not create user",
      errors: error
    });
  };
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})