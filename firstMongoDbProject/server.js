import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose";

//sudo systemctl start mongod


// Defines the Port 
const port = process.env.Port || 8080;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/animals";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const Animal = mongoose.model("Animal", {
  name: String,
  age: Number,
  isFurry: Boolean,
});

Animal.deleteMany().then(() => {
  new Animal({name: "Bob", age: 5, isFurry: true}).save();
  new Animal({name: "Petra", age: 2, isFurry: true}).save();
  new Animal({name: "Meg the Magpie", age: 9, isFurry: false}).save();
})


// Defined routes
app.get("/", (req, res) => {
  Animal.find().then(animals => {
    res.json(animals);
  })
});

app.get("/:name", (req, res) => {
  Animal.findOne({name: req.params.name}).then( animal => {
    if (animal) {
      res.json(animal);
    } else {
      res.status(404).json({ error:"Not Found" });
    }
  })
})


// Start the Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})
