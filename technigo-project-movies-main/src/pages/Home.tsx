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
      <li className="flex" key={movie.title}>
        <Link className="flex" to={`/movies/${movie.id}`}>
          <img className="flex-initial" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="image of the chosen movie" />
        </Link>
      </li>
    )
  });

  return(
    <>
      <div className="min-h-screen ">
        <ul className="flex list-none container mx-auto flex-row flex-wrap justify-center gap-5 my-10">{listOfMovies}</ul>
      </div>
    </>
  )
}