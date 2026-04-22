import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/books";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const Author = mongoose.model("Author", {
  name: String
});

const Book = mongoose.model("Book", {
  title: String,
  author: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "Author",
  }
})

//Seeding Data:putting data in the database when is starts.

// RESET_DATABASE=true npm run dev kommer resetta datan

if (process.env.RESET_DATABASE) {
console.log("Database Reseeded");
const seedDataBase = async () => {
  await Author.deleteMany();
  await Book.deleteMany();

  const tolkien = new Author({ name: "J.R.R Tolkien" });
  await tolkien.save();

  await new Book({ title: "Bilbo", author: tolkien}).save();
  await new Book({ title: "Lotr 1", author: tolkien}).save();
  await new Book({ title: "Lotr 2", author: tolkien}).save();
  await new Book({ title: "Lotr 3", author: tolkien}).save();

  const rowling = new Author({ name:"J.K Rowling" });
  await rowling.save();

  await new Book({ title: "Harry Potter 1", author: rowling}).save();
  await new Book({ title: "Harry Potter 2", author: rowling}).save();
  await new Book({ title: "Harry Potter 3", author: rowling}).save();
  await new Book({ title: "Harry Potter 4", author: rowling}).save();
}

  await seedDataBase();
}

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8081;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({ error: "Server not available" });
  }
})

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");

});

app.get("/authors", async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(404).json({error: "Something went wrong :("})
  }
});

app.get("/authors/:id", async (req, res) => {
  try {  
    const author = await Author.findById(req.params.id);
    if (author) {
      res.json(author);
    } else {
      res.status(404).json( {error: " Author not found. :("} );
    }
  } catch(error) {
    res.status(400).json({error: "Invalid User ID"});
  }

})

app.get("/authors/:id/books", async (req, res) => {
  const author = await Author.findById(req.params.id);
  const books = await Book.find({ author: new mongoose.Types.ObjectId(author.id) });
  res.json(books);
});

app.get("/books", async (req, res) => {
  const books = await Book.find().populate("author");
  res.json(books);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
