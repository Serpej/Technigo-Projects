import { BookInfo } from "./bookComponents/BookInfo";

export const Book = ({title, author, year, genre, rating, description, image}) => {
  return (
  <div className="bookElement">
    <BookInfo key={title} 
              title= {title} 
              author={author}
              year= {year}
              genre= {genre}
              rating= {rating}
              description= {description}
              image= {image}/>
  </div>
  );
}