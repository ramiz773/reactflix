import React from "react";
import Slider from "../Components/Slider";
import Wrapper from "../Components/Wrapper";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import { useFetch } from "../Hooks/useFetch";
import MovieCard from "../Components/MovieCard";
import Pegination from "../Components/Pegination";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
const Home = () => {
   const {
      state: { page },
   } = useContext(AppContext);
   const [data, loading, error] = useFetch("movie/popular", { page });
   const { results, total_pages } = data;
   return (
      <>
         <Slider />
         <Wrapper>
            {loading && <Loader />}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {!error && !loading && (
               <>
                  <h2 className='sectionTitle'>Popular Movies</h2>
                  <div className='gallery'>
                     {results?.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} />;
                     })}
                  </div>
                  <Pegination page={page} totalPages={total_pages} />
               </>
            )}
         </Wrapper>
      </>
   );
};

export default Home;
