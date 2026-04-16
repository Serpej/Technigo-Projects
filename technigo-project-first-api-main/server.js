import cors from "cors"
import express, { urlencoded } from "express"
import mongoose from "mongoose"
import expressListEndpoints from "express-list-endpoints"
import booksData from "./data/books.json" with { type: "json" }


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-first-api";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

const Book = mongoose.model("Book", {
    bookID: String,
    title: String,
    authors: String,
    average_rating: Number,
    isbn: Number,
    isbn13: Number,
    language_code: String,
    num_pages: Number,
    ratings_count: Number,
    text_reviews_count: Number
});

if (process.env.RESET_DATABASE) {
  console.log("Database reset");
  const seedDataBase = async () => {
    await Book.deleteMany();

    booksData.forEach((bookData) => {
      new Book(bookData).save();
    });
  };
  seedDataBase();
};

const error404message = (response, query) => {
  return response.status(404).json({
      error: `${query} not found`,
      image: "https://http.dog/404.jpg"
    });
};

const error400message = (response, query) => {
  return response.status(400).json({
      error: `Invalid ${query}`,
      image: "https://http.dog/400.jpg"
    });
};

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({
      error: "Service Unavailable",
      image: "https://http.dog/503.jpg"
    });
  }
});

// Start defining your routes here
app.get("/", (req, res) => {
  res.send(expressListEndpoints(app));
});

app.get("/books/:id", async (req, res) => {
  try {
    const bookById = await Book.findById( req.params.id );
    if (bookById) {
      res.json(bookById);
    } else {
        res.status(404).json({
          error: "Book not found",
          image: "https://http.dog/404.jpg"
        });
    };
  } catch (error) {
    error400message(res, "BookId");
  };
});

app.get("/books/:averageRating", async (req, res) => {
  try {
    const booksByRating = await Book.find({average_rating: Number(req.query.averageRating)});
    if (booksByRating) {

      res.json(booksByRating);
    } else {
      error404message(res, "Books");
    }
  } catch (error) {
    error400message(res, "Book Rating");
  };
});

app.get("/books", async (req, res) => {
  try {
    const filter = {};
    if (req.query.averageRating) {
      filter.average_rating = Number(req.query.averageRating);
    }
    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    res.status(404).json({
      error: "Books not found",
      image: "https://http.dog/404.jpg"
    });
  };
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});
