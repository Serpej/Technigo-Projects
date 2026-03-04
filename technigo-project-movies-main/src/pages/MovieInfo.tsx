import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/api";
import { Movie } from "../types/types";
import starIcon from  "../assets/star.svg";
import { Error404 } from "./Error404";


export const MovieInfo= () => {
  const [movie, setMovie] = useState<Movie>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
 
  useEffect(() => {
    setLoading(true);
    const getMovies = async () => {
      const data  = await fetchMovies(Number(id));
      if (!data) {
        setLoading(false);
        setError(true);
      } else {
        setLoading(false);
        setMovie(data);
      } 
    }
    getMovies();
  }, [id]);

  if (error) {
    return <Error404 />
  }
  const roundToOneDecimal = (n:number):number => {
    return Math.round(n * 10) / 10
  }

  const chosenMovie = movie;
  const posterPath = `https://image.tmdb.org/t/p/w342${chosenMovie?.poster_path}`;
  const backgroundImagePath = `url(https://image.tmdb.org/t/p/w1280${chosenMovie?.backdrop_path})`;

  return  (
    <div 
      className={`flex flex-col ${loading ? "justify-center" : "justify-end"} min-h-screen bg-cover bg-center relative`}
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), ${backgroundImagePath}`}}
    >
      <Link 
        className=" flex items-center absolute top-[10px] left-[50px]" 
        to="/"
        >
        <svg 
          className="w-8 mr-[2px] drop-shadow-[2px_3px_4px_rgb(0_0_0_/_.5)]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 30 30"
          >
          <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd">
          </path>
        </svg>
        <p className="text-white font-semibold text-xl drop-shadow-[2px_3px_4px_rgb(0_0_0_/_.5)]">
          Movies
        </p>
      </Link>
      <div className={`flex items-center justify-center ${loading ? "visible" : "invisible"}`}>
        <h1
          className={`text-3xl text-white font-bold`}>...Loading In Progress
        </h1>
      </div>
      <div className={`flex flex-col p-[50px] md:flex-row ${loading ? "invisible" : "visible"}`}>
        <img 
          src={posterPath} 
          alt="image of the chosen movie" 
          className={`flex-[1_1_185px] min-w-[185px] md:flex-[0-0-342px] md:min-w-[342px] max-w-[342px] mb-[20px] border-[5px] border-white`}/>
        <div className="flex flex-col ml-5 justify-end">
          <h1 className=" flex flex-wrap gap-[20px] text-3xl text-white font-bold">
            {chosenMovie?.title} 
            <div className=" flex bg-white text-black px-1">
              <img className="w-5 mx-1" src={starIcon} alt="star rating" />
              {roundToOneDecimal(chosenMovie?.vote_average ?? 0)}
            </div>
          </h1>
          <p className="text-white my-[16px] max-w-[400px] leading-0">{chosenMovie?.overview}</p>
        </div>        
      </div>
    </div>
  )
}