import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const MongoUrl = process.env.MONGO_URL || "mongodb://localhost/post-codealong";
mongoose.connect(MongoUrl);
mongoose.Promise;

const Task = mongoose.model("Task", {
  text: {
    type: String,
    required: true,
    minlength: 5
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find().sort({createdAt: 'desc'}).limit(20).exec();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  //retrieve information set by the client to our API endpoint.
  const { text, complete } = req.body;

  //Use our mongoose model to reace the database entry
  const task = new Task({ text, complete });

  try {
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({message: "Could not save task to database", error: error.errors});
  }
});

app.get("/tasks/complete", async (req, res) => {
  const completeTasks =  await Task.find({complete: true});
  res.json(completeTasks);
});

app.delete("/tasks", async (req, res) => {
  const {_id } = req.body;
  
  try {
    const deleteTask = await Task.deleteOne({_id: _id});
    res.status(200).json({message:`Deleted task with id: ${_id}`})
  } catch (error) {
    res.status(400).json({message:"Could not delete task", error: error.errors})
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
