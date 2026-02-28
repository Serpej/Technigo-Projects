import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/api";
import { Movie} from "../types/types";


export const MovieInfo= () => {
  const [movie, setMovie] = useState<Movie>();
  const { id } = useParams();
 
  useEffect(() => {
    const getMovies = async () => {
      const data  = await fetchMovies(Number(id));
      setMovie(data);
    }
    getMovies();
  }, [id]);

  const chosenMovie = movie;
  const posterPath = `https://image.tmdb.org/t/p/w300${chosenMovie?.poster_path}`;
  const backgroundImagePath = `url(https://image.tmdb.org/t/p/w1280${chosenMovie?.backdrop_path})`;

  return  (
    <div 
      className="min-h-screen bg-cover"
      style={{backgroundImage: `${backgroundImagePath}`}}
    >
      <Link to="/"><button type="button">Back</button></Link>
      <div >
        <img src={posterPath} alt="image of the chosen movie" />
        <h1 className="text-3xl text-white font-bold">{chosenMovie?.title}</h1>
        <p className="text-white">{chosenMovie?.overview}</p>          
      </div>
    </div>
  )
}