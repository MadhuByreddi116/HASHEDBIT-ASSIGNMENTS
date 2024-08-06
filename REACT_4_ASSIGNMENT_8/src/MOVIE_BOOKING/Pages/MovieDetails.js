import React from "react";

import { useParams, Link } from "react-router-dom";
import './movielist.css';

const movies = [
  { id: 1, title: "Kalki 2898 AD", imgSrc: require("../Images/kalki.avif"),
    Description :` Rating : 8.6/10 (710.2K Votes) 
    Rate now 2D , 3D , IMAX 2D ,IMAX 3D Telugu , Kannada , Hindi , Malayalam ,
    Tamil 3h 1m •Action , Sci-Fi , Thriller • UA • 27 Jun, 2024`
    },
  {
    id: 2,
    title: "DeadPool & Wolverine",
    imgSrc: require("../Images/Deadpool.avif"),
    Description :` Rating : 8.6/10 (710.2K Votes) 
    Rate now 2D , 3D , IMAX 2D ,IMAX 3D Telugu , Kannada , Hindi , Malayalam ,
    Tamil 3h 1m •Action , Sci-Fi , Thriller • UA • 27 Jun, 2024`
},
  { id: 3, title: "They Call Him OG", imgSrc: require("../Images/og.avif"), 
     Description :` Rating : 8.6/10 (710.2K Votes) 
    Rate now 2D , 3D , IMAX 2D ,IMAX 3D Telugu , Kannada , Hindi , Malayalam ,
    Tamil 3h 1m •Action , Sci-Fi , Thriller • UA • 27 Jun, 2024`
},

  { id: 4, title: "Devara", imgSrc: require("../Images/devara.avif") ,
    Description :` Rating : 8.6/10 (710.2K Votes) 
    Rate now 2D , 3D , IMAX 2D ,IMAX 3D Telugu , Kannada , Hindi , Malayalam ,
    Tamil 3h 1m •Action , Sci-Fi , Thriller • UA • 27 Jun, 2024`
  },
  {
    id: 5,
    title: "MR. Bachchan - The Only Hope",
    imgSrc: require("../Images/bachchan.avif"),
    Description :` Rating : 8.6/10 (710.2K Votes) 
    Rate now 2D , 3D , IMAX 2D ,IMAX 3D Telugu , Kannada , Hindi , Malayalam ,
    Tamil 3h 1m •Action , Sci-Fi , Thriller • UA • 27 Jun, 2024`
  },


  { id: 6, title: "Raayan", imgSrc: require("../Images/Rayan.avif"),
    Description :` Rating : 8.6/10 (710.2K Votes) 
    Rate now 2D , 3D , IMAX 2D ,IMAX 3D Telugu , Kannada , Hindi , Malayalam ,
    Tamil 3h 1m •Action , Sci-Fi , Thriller • UA • 27 Jun, 2024`
},
  {
    id: 7,
    title: "Joker: Folie a Deux",
    imgSrc: require("../Images/joker.avif"),
    Description :` Rating : 8.6/10 (710.2K Votes) 
    Rate now 2D , 3D , IMAX 2D ,IMAX 3D Telugu , Kannada , Hindi , Malayalam ,
    Tamil 3h 1m •Action , Sci-Fi , Thriller • UA • 27 Jun, 2024`
  },
  {
    id: 8,
    title: "The Greatest of All Time",
    imgSrc: require("../Images/goat.avif"),
    Description :` Rating : 8.6/10 (710.2K Votes) 
    Rate now 2D , 3D , IMAX 2D ,IMAX 3D Telugu , Kannada , Hindi , Malayalam ,
    Tamil 3h 1m •Action , Sci-Fi , Thriller • UA • 27 Jun, 2024`
  },
];



const MovieDetailsFn = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
 const imgstyle ={
    height : '80vh'
 }


  return (
    <>
      <div>
        <div className="row">
          <div className="col-4">
            <img style={imgstyle} src={movie.imgSrc} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>

          <div className="col-8 ">
          <h1> {movie.title} </h1> <br></br> <br></br>
            
            
            <h4><p>
              {movie.Description}
            </p></h4>
            <Link to={`/book/${movie.id}`}>
            <br></br> <br></br>
            <br></br> <br></br>
              <button className="button">Book Tickets</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsFn;
