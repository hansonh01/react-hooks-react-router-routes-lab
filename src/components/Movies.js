import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    {movies.map((movie)=>(
      <div>
        <h1>Movie: {movie.title}</h1>
        <p>Time: {movie.time}</p>
        <ul>
          Genres: 
          {movie.genres.map((genre)=>(
            <li>{genre}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default Movies;
