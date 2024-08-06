import React from "react";
import "./movielist.css";
import { Link } from "react-router-dom";

const movies = [
  { id: 1,title: "Kalki 2898 AD", imgSrc: require("../Images/kalki.avif") },
  { id: 2,title: "DeadPool & Wolverine", imgSrc: require("../Images/Deadpool.avif") },
  { id: 3, title:"They Call Him OG", imgSrc: require("../Images/og.avif") },
  { id: 4,title: "Devara", imgSrc: require("../Images/devara.avif") },
  {id: 5,title:"MR. Bachchan - The Only Hope",imgSrc: require("../Images/bachchan.avif")},
  { id: 6,title:"Raayan", imgSrc: require("../Images/Rayan.avif") },
  { id: 7,title:"Joker: Folie a Deux", imgSrc: require("../Images/joker.avif") },
  { id: 8,title:"The Greatest of All Time", imgSrc: require("../Images/goat.avif") },
];

const MovieListFn = () => {
  return (
    <div className="movielist">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-3" key={movie.id}>
            <div className="content-box">
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.imgSrc} alt={movie.name} />
              </Link>
              <h5 >{`${movie.title}`}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListFn;
