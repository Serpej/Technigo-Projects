import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/happyThoughts";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;


// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

//Middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next(); 
  } else {
    res.status(500).json({ error: "Server not available" });
  }
});

const Thought = mongoose.model("Thought",  {
  message: String,
  hearts: Number,
  createdAt: String,
});

if (process.env.RESET_DATABASE) {
  console.log("Database Reseeded");
  const seedDataBase = async () => {
    await Thought.deleteMany();

    await new Thought({
      message: "New Test Task",
      hearts: 0,
      createdAt: "this is a string",
    }).save();
  }
  seedDataBase();
};

app.get("/", (req, res) => {
  res.send("Welcome to HappyThoughtAPI");
});

app.get("/happyThoughts", async (req, res) => {
  try {
    if(Thought) {
      const happyThoughts = await Thought.find();
      res.json(happyThoughts);
    } else {
      res.status(404).json({
      error: `Empty thought list :(`,
      image: "https://http.dog/404.jpg"
    });
    }
  } catch (error) {
      res.status(404).json({
      error: "Couldn't find Thoughts :(",
      image: "https://http.dog/404.jpg"
    })
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});