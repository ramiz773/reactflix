import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function MovieCard({ movie }) {
  const { poster_path, title, vote_average, id } = movie;
  return (
    <div className="movieCard">
      <Link to={`movie/${id}`}>
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        />
      </Link>
      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h4 className="movieCardTitle">{title}</h4>
          <p className="movieCardRating">{vote_average}</p>
        </div>
        <FavoriteButton movie={movie} />
      </div>
    </div>
  );
}

export default MovieCard;
