import { useParams, Link } from "react-router-dom"
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
  console.log(chosenMovie?.id);

  return  (
    <>
      <Link to="/"><button type="button">Back</button></Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${chosenMovie?.poster_path}`} alt="image of the chosen movie" />
        <h1 className="text-3xl font-bold underline">{chosenMovie?.title}</h1>
        <p>{chosenMovie?.overview}</p>          
      </div>
    </>
  )
}