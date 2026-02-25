import { useState, useEffect } from "react";
import { Movie } from "../types/types";
import { fetchMovies } from "../api/api";
import { Link } from "react-router-dom";

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const data  = await fetchMovies();
      setMovies(data.results);
    }
    getMovies();
  }, []);

  const listOfMovies = movies.map((movie) => {
    return (
      <li key={movie.title}>
        <Link to={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      </li>
    )
  });

  return(
    <>
      <div>
        <ul>{listOfMovies}</ul>
      </div>
    </>
  )
}