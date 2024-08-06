import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import MovieHeadFn from "./MOVIE_BOOKING/Pages/MovieHeader";
import MovieFooterFun from "./MOVIE_BOOKING/Pages/MovieFooter";
import MovieListFn from "./MOVIE_BOOKING/Pages/MovieList";
import MovieDetailsFn from "./MOVIE_BOOKING/Pages/MovieDetails";
import BookingFormFn from "./MOVIE_BOOKING/Pages/MovieBooking";
import BookingConfirmation from "./MOVIE_BOOKING/Pages/MovieConfirmation";
const MovieMainFun = () => {
  return (
    <>
      <div className="mainpage">
        <BrowserRouter>
          <MovieHeadFn />

          <Routes>
            <Route path="/" element={<MovieListFn/>} />
            <Route path="/movie/:id" element={<MovieDetailsFn/>} />
            <Route path="/book/:id" element ={<BookingFormFn/>}/>
            <Route path="/confirmation" element={<BookingConfirmation/>}/>
          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
};

export default MovieMainFun;
