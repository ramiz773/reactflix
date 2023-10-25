import React from "react";
import { useParams } from "react-router-dom";

function MovieInfo() {
  let { id } = useParams();
  console.log("id    " + id);

  return <div>MovieInfo</div>;
}

export default MovieInfo;
