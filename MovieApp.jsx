import React, { useEffect } from "react";
import "./MovieApp.css";
import SearchIcon from "./search.svg";

//7b2219a9
const api_url = "http://www.omdbapi.com/?apikey=7b2219a9";
const movie1 = {
  Title: "Spiderman and Grandma",
  Year: "2009",
  imdbID: "tt1433184",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg",
};
const MovieApp = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Turkiflex</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value="Supermen"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieApp;
