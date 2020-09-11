"use-strict";
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const moviesArr = [];

//Add movies to the DOM after clicking 'add movie'
const renderMovies = () => {
  const movieListElement = document.getElementById("movie-list");

  if (moviesArr.length === 0) {
    movieListElement.classList.remove("visible");
  } else {
    movieListElement.classList.add("visible");
  }
  movieListElement.innerHTML = "";

  moviesArr.forEach((movie) => {
    const newMovieElement = document.createElement("li");
    let movieText = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        movieText += `${key}: ${movie.info[key]}`;
      }
    }
    newMovieElement.textContent = movieText;
    movieListElement.append(newMovieElement);
  });
};

//Get movies from fields, create a movie object and add to array
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraName.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  moviesArr.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);
