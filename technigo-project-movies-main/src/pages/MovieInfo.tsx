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
  const posterPath = `https://image.tmdb.org/t/p/w342${chosenMovie?.poster_path}`;
  const backgroundImagePath = `url(https://image.tmdb.org/t/p/w1280${chosenMovie?.backdrop_path})`;

  return  (
    <div 
      className="flex flex-col justify-between min-h-screen bg-cover"
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), ${backgroundImagePath}`}}
    >
      <Link to="/"><button type="button">Back</button></Link>
      <div className="flex p-[50px]">
        <img 
          src={posterPath} 
          alt="image of the chosen movie" 
          className="border-[5px] border-white"/>
        <div className="flex flex-col ml-5 justify-end">
          <h1 className="text-3xl text-white font-bold">{chosenMovie?.title}</h1>
          <p className="text-white my-[16px] max-w-[400px] leading-0">{chosenMovie?.overview}</p>
        </div>        
      </div>
    </div>
  )
}