import React from "react";
export const fetchMovies = async (movieId?: number) => {
  let url:string = "";

  if (movieId === undefined) {
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  } else {
    url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  }

  const options = {
    
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
  };
  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error(`Http error: ${response.status}`)
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log("Error:", error);
  }
}