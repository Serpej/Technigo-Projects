import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app";

const PORT = process.env.PORT || 8080;

const mongoUrl = process.env.MONGO_URL as string || "mongodb://localhost/magic-binder";

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error", error));

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})