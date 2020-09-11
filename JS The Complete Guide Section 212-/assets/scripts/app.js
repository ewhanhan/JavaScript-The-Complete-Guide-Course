"use-strict";
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const moviesArr = [];

//Add movies to the DOM after clicking 'add movie'
const renderMovies = (filter = "") => {
  const movieListElement = document.getElementById("movie-list");

  if (moviesArr.length === 0) {
    movieListElement.classList.remove("visible");
  } else {
    movieListElement.classList.add("visible");
  }
  movieListElement.innerHTML = "";

  //If there is no search term, use all-movies; else, find the specific movie
  const filteredMovies = !filter
    ? moviesArr
    : moviesArr.filter((movie) => {
        return movie.info.title.includes(filter);
      });

  filteredMovies.forEach((movie) => {
    const newMovieElement = document.createElement("li");
    const { info } = movie; //use obj destructuring to get movie-info object inside of the movie object
    // const { title: movieTitle } = info; //extract title property from info object and pass to a variable named movieTitle
    let movieText = movie.formatTitle() + "-";
    for (const key in info) {
      if (key !== "title") {
        movieText += `${key}: ${info[key]}`;
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
    formatTitle: function () {
      return this.info.title.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
  };

  moviesArr.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const searchTermVal = document.getElementById("filter-title").value;
  renderMovies(searchTermVal);
};
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
