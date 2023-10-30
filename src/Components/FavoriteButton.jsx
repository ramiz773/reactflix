import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";

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
      #
    </div>
  );
};

export default FavoriteButton;
