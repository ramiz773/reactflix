import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";
import HeartFill from "../assets/heart-filled.svg";
import HeartLine from "../assets/heart-lined.svg";
const FavoriteButton = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);
  let favorited = state.favorites.some((item) => item.id === movie.id);
  const handleFavorite = () => {
    favorited
      ? dispatch({ type: "REMOVE_FAVORITE", payload: movie.id })
      : dispatch({ type: "ADD_FAVORITE", payload: movie });
  };
  return (
    <div className="favButton" onClick={handleFavorite}>
      {favorited ? (
        <img src={HeartFill} width={24} />
      ) : (
        <img src={HeartLine} width={24} />
      )}
    </div>
  );
};

export default FavoriteButton;
