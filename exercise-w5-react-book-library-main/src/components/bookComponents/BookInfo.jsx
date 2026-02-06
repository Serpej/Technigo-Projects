export const BookInfo = ({title, author, year, genre, rating, description, image}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
      <p>Description: {description}</p>
      <img className="bookCover" src={image} alt="Book Image" />
    </div>
  );
}