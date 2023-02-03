import React, { useEffect, useState } from "react";
import netflixService from "./services/netflixService";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movieList, setMovieList] = useState({
    arrayOfMovies: [],
    moviesComponents: [],
  });

  console.log(movieList.arrayOfMovies, "logging state movies");

  useEffect(() => {
    netflixService.getMovies().then(getMoviesSuccess).catch(getMoviesError);
  }, []);

  const getMoviesSuccess = (response) => {
    console.log(response, "Successful movies response");

    const data = response.data;

    setMovieList((prevState) => {
      const pageData = { ...prevState };
      pageData.arrayOfMovies = data;
      pageData.moviesComponents = data.map(mappingAMovie);

      return pageData;
    });
  };

  const getMoviesError = (error) => {
    console.log(error, "Error retrieving movies");
  };

  const mappingAMovie = (aMovie) => {
    return <MovieCard key={aMovie.id} data={aMovie} />;
  };

  return <div className="row">{movieList.moviesComponents}</div>;
}

export default MovieList;
