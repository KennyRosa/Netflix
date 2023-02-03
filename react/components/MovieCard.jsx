import React from "react";
import "./netflix.css";

function MovieCard({ data }) {
  console.log(data, "data from mapped component");

  return (
    <div class="container movie-wrap">
      <div className="card">
        <img
          className="card-img-top"
          style={{ width: "10em" }}
          src={data.image}
          alt="movie"
        />
      </div>
    </div>
  );
}

export default MovieCard;
