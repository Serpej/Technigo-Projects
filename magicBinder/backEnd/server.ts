import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoutes";
import { cardRouter } from "./routes/cardRoutes";
import { binderRouter } from "./routes/binderRoutes";


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/cards", cardRouter);
app.use("/binders", binderRouter)

const mongo_url = process.env.MONGO_URL as string || "mongodb://localhost/magic-binder";

mongoose
  .connect(mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(`MongoDB connection error`, error));

app.get("/", (req, res) => {
  console.log("Hello Terminal")
  res.status(200).json({"message": "Root Path"});
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost/${PORT}`)
})