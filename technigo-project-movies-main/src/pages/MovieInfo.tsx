import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/api";
import { MovieDetail} from "../types/types";


export const MovieInfo= () => {
  const [movie, setMovie] = useState<MovieDetail>();
  const { id } = useParams();
 
  useEffect(() => {
    const getMovies = async () => {
      const data  = await fetchMovies(Number(id));
      setMovie(data);
    }
    getMovies();
  }, [id]);

  const chosenMovie = movie;
  console.log(chosenMovie?.poster_path)

  return  (
    <>
    <div>
      <img src={chosenMovie?.poster_path} alt="image of the chosen movie" />
      <h1>{chosenMovie?.title}</h1>
      <p>{chosenMovie?.overview}</p>          
    </div>
    </>
  )
}