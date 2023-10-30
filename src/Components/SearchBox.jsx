import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [data] = useFetch("/search/movie", { query: query });

  return (
    <div className="searchBox">
      <input
        className="searchField"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="resultBox">
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
