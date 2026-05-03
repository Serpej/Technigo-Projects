import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

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
  message: {
    type: String,
    required: true,
    minLength: [5, "Too few characters"],
    maxLength: [200, "Too many characters"],
  },
  hearts: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

if (process.env.RESET_DATABASE) {
  console.log("Database Reseeded");
  const seedDataBase = async () => {
    await Thought.deleteMany();

    await new Thought({
      message: "New Test Task",
      hearts: 0,
    }).save();
  }
  seedDataBase();
};

app.get("/", async (req, res) => {
  try {
    if(Thought) {
      const happyThoughts = await Thought.find().exec();
      const limitedHappyThoughts = happyThoughts.slice(0, 5).sort((a, b) => a - b);
      res.json(limitedHappyThoughts);
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

app.post("/", async (req, res) => {
  try {
    const { message } = req.body; 
    const thought = new Thought({ message });
    const savedThought = await thought.save();
    res.status(201).json(savedThought)
  } catch (error) {
    res.status(400).json({
    message: "Bad Request",
    image: "https://http.dog/400.jpg",
    })
  }
});

app.post("/:thoughtId/like", async (req, res) => {
try {
  const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, 
    { $inc: {hearts: 1} },
    { returnDocument: "after" }
  )
  res.status(200).json(updatedThought);
} catch (error) {
  res.status(400).json({
    message: `Bad Request, couldn't update hearts: ${error.message}`,
    image: "https://http.dog/400.jpg",
  });
}
});

//Skapa en delete endpoint och en delete knapp!
app.delete("/:thoughtId/delete", async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
  } catch (error) {
    res.status(400).json({
    message: `Bad Request, couldn't delete thought: ${error.message}`,
    image: "https://http.dog/400.jpg",
  });
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});