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

app.get("/books/:object_id", async (req, res) => {
  try {
    const bookById = await Book.findById( req.params.object_id );
    if (bookById) {
      res.json(bookById);
    } else {
      error404message(res, "Book");
    };
  } catch (error) {
    error400message(res, "BookId");
  };
});

app.get("/authors", async (req, res) => {
  try {
    const filter = {}
    if (req.query.name) {
     const nameQuery = req.query.name.replace(/_/g, " ");
     filter.authors =  { $regex: nameQuery, $options: "i"};
    }
    const authors = await Book.distinct("authors", filter);
    res.json(authors);
  } catch (error) {
    error404message(res, "Authors");
  }
})

app.get("/books", async (req, res) => {
  try {
    const filter = {};
    if (req.query.title) {
      const titleQuery = req.query.title.replace(/_/g, " ");
      filter.title = { $regex: titleQuery, $options: "i"};
    }
    if(req.query.authors) {
      const authorsQuery = req.query.authors.replace(/_/g, " ");
      filter.authors = { $regex: authorsQuery, $options: "i" };
    }
    if (req.query.average_rating) {
      filter.average_rating = Number(req.query.average_rating);
    };
    if (req.query.lte_average_rating) {
      filter.average_rating = { ...filter.average_rating, $lte: Number(req.query.lte_average_rating) };
    };
    if (req.query.gte_average_rating) {
      filter.average_rating = { ...filter.average_rating, $gte: Number(req.query.gte_average_rating) };
    };
    if (req.query.ratings_count) {
      filter.ratings_count = Number(req.query.gte_ratings_count);
    };
        if (req.query.gte_ratings_count) {
      filter.ratings_count = {...filter.ratings_count, $gte: Number(req.query.gte_ratings_count) };
    };
        if (req.query.lte_ratings_count) {
      filter.ratings_count = {...filter.ratings_count, $lte: Number(req.query.lte_ratings_count) };
    };
    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    error404message(res, "Books");
  };
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});
