import React from "react";

const SingleCard = ({ movie, handleWatchTime }) => {
  return (
    <div className="movie-card card">
      <div className="movie-poster ">
        {/* <img src={} className="card-img-top" alt="..."> */}
        <img className="img-fluid w-50 rounded" src={movie.poster} alt="" />
      </div>

      <h3 className="">{movie.movieName}</h3>
      <p>{movie.description}</p>
      <div className="d-flex justify-content-around">
        <p className="">Watch Time: {movie.watchTime}</p>
        <p className="">Ratings: {movie.imdbRating} </p>
      </div>
      <button
        onClick={() => handleWatchTime(movie.watchTime)}
        className="btn btn-info w-75 m-auto"
      >
        Book Now
      </button>
    </div>
  );
};

export default SingleCard;
