import "./App.css";
import { Header } from "./components/Header";
import data from "./data.json";
import { Book } from "./components/Book";


function App() {
  const { books } = data;
  console.log(books);
  const bookLibrary = books.map((book) => {
   return  (
    <Book key={book.title} 
          title= {book.title} 
          author={book.author}
          year= {book.year}
          genre= {book.genre}
          rating= {book.rating}
          description= {book.description}
          image= {book.image}/>
          );
  });

  return (
    <>
      <Header />
      {bookLibrary}
    </>
  );
}

export default App;
