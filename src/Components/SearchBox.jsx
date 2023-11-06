import React, { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
   const navigate = useNavigate();
   const [diffrerdQuery, setDeff] = useState("");
   const [query, setQuery] = useState("");
   const [data] = useFetch("/search/movie", { query: diffrerdQuery });

   useEffect(() => {
      console.log("useEffect");
      let timer = setTimeout(() => {
         setDeff(query);
      }, 1000);
      return () => {
         clearTimeout(timer);
         console.log("re-renderd");
      };
   }, [query]);

   return (
      <div className='searchBox'>
         {console.log("component")}
         <input
            className='searchField'
            type='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
         />
         <div className='resultBox'>
            <ul>
               {data.results?.map((movie) => {
                  return (
                     <li
                        key={movie.id}
                        onClick={() => {
                           navigate(`movie/${movie.id}`);
                        }}
                     >
                        {movie.title}
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default SearchBox;
