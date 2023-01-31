import React, { useEffect } from "react";
import "./MovieApp.css";
import SearchIcon from "./search.svg";

//7b2219a9
const api_url = "http://www.omdbapi.com/?apikey=7b2219a9";

const MovieApp = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    //console.log(data.Search);
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
    </div>
  );
};

export default MovieApp;
