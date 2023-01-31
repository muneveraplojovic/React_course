import React, { useEffect, useState } from "react";
import "./MovieApp.css";
import MovieCard from "./MovieCard";
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

    //useState hook
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  //fetch
  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  //useEffect hook
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  //rendering
  return (
    <div className="app">
      <h1>Turkiflex</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default MovieApp;
