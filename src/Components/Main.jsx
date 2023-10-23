import React, { useState } from "react";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Pegination from "./Pegination";
import Slider from "./Slider";
import { useFetch } from "../Hooks/useFetch";

function Main() {
  const [page, setPage] = useState(1);

  const [data, loading, error] = useFetch("movie/popular", { page });
  const { results, total_pages } = data;
  console.log(data);

  // const [popMovies, setPopMovies] = useState([])
  // const [totalPages, setTotalPages] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         let { data } = await axios({
  //           method: "get",
  //           url: "https://api.themoviedb.org/3/movie/popular",
  //           params: {
  //             api_key: "f7083149ad71aa68e3e270bdfcaad937",
  //             page: page,
  //           },
  //         });

  //         setPopMovies(data.results);
  //         setTotalPages(data.total_pages);
  //         setTimeout(() => {
  //           setLoading(false);
  //         }, 3000);
  //       } catch (error) {
  //         console.log(error.message);
  //         setError(error.message);
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, [page]);

  return (
    <main>
      <Slider />
      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!error && !loading && (
          <>
            <h2 className="sectionTitle">Popular Movies</h2>
            <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pegination
              page={page}
              setPage={setPage}
              totalPages={total_pages}
            />
          </>
        )}
      </Wrapper>
    </main>
  );
}

export default Main;
