import { useState, useEffect } from "react";

import { fetchMovies } from "../api/api";
import { Link } from "react-router-dom";


type Movie = {
            adult: boolean,
            backdrop_path: string,
            genre_ids: number[],
            id: number,
            original_language: string,
            original_title: string,
            overview: string,
            popularity: number,
            poster_path: string,
            release_date: number,
            title: string,
            video: string,
            vote_average: number,
            vote_count: number
}

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
        <Link to={`/movies/${movie.title}`}>
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