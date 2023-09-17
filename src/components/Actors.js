import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    {actors.map((actor)=>(
      <div>
        <h1>Actor: {actor.name}</h1>
        <ul>
          Movies: 
          {actor.movies.map((movie)=>(
            <li>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default Actors;
