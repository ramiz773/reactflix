import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
function Slider() {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: {
          api_key: "f7083149ad71aa68e3e270bdfcaad937",
        },
      });
      setLatestMovies(data.results);
    };
    fetchData();
  }, []);

  let splideOptions = {
    heightRatio: 0.5,
    pagination: false,
    speed: 500,
    cover: true,
    padding: "15vw",
    breakpoints: {
      640: {
        heightRatio: 0.54,
        arrows: false,
        pagination: true,
        padding: "0",
      },
    },
  };

  return (
    <div className="movieSlider">
      <Splide options={splideOptions}>
        {latestMovies?.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                alt={item.title}
              />
              <div className="slideCaption">
                <h1>{item.title}</h1>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Slider;
