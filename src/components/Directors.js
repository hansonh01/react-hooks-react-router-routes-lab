import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      {directors.map((director)=>(
        <div>
          <h1>{director.name}</h1>
          <ul>
            Movies: 
            {director.movies.map((movie)=>(
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Directors;
