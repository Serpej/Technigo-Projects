import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoutes";
import { cardRouter } from "./routes/cardRoutes";
import { binderRouter } from "./routes/binderRoutes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/cards", cardRouter);
app.use("/binders", binderRouter);

app.get("/", (req, res) => {
  res.status(200).json({"message": "Root Path"});
});


