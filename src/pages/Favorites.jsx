import React from "react";
import Wrapper from "../Components/Wrapper";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import MovieCard from "../Components/MovieCard";

const Favorites = () => {
  const { state } = useContext(AppContext);
  console.log(state.favorites);
  return (
    <Wrapper>
      <div className="sectionTitle">Favorites Movies</div>
      <div className="gallery">
        {state?.favorites.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Favorites;
