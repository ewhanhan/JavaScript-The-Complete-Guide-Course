// "use strict";

const addMovieModal = document.getElementById("add-modal"); //tends to have better performance if getting by ID over querySelector
const startMovieModal = document.querySelector("header button"); // const startMovieModal = document.querySelector("header").lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = document.getElementsByClassName(
  "btn btn--passive"
)[0];
const addMovieButton = document.getElementsByClassName("btn btn--success")[0];
const userInputs = addMovieModal.getElementsByTagName("input");
const MoviesArray = [];

const entryTextSection = document.getElementById("entry-text");

const updateUI = () => {
  if (MoviesArray === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderMovies = (title, imageURL, rating) => {
  const newMovieElem = document.createElement("li");
  newMovieElem.className = "movie-element";
  newMovieElem.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageURL}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5</p>
  </div> 
  `;
  const listRoot = document.getElementById("movie-list");
  listRoot.appendChild(newMovieElem);
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible"); //if visible class is there, remove it. If it's not there add it
  toggleBackdrop();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const backdropClickHandler = () => {
  toggleBackdrop();
};

sanitizer = (params) => {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  return params.replace(reg, (match) => map[match]);
};

const addMovieHander = () => {
  const MOVIE_TITLE = sanitizer(userInputs[0].value.trim());
  const MOVIE_IMAGE = userInputs[1].value.trim();
  const MOVIE_RATING = sanitizer(userInputs[2].value.trim());
  const MOVIE = {
    TITLE: MOVIE_TITLE,
    IMAGE_URL: MOVIE_IMAGE,
    RATING: MOVIE_RATING,
  };
  if (
    MOVIE_TITLE === "" ||
    MOVIE_IMAGE === "" ||
    MOVIE_RATING < 1 ||
    MOVIE_RATING > 5
  ) {
    alert(`Please fill out the movie rating properly`);
    return;
  }
  MoviesArray.push(MOVIE);
  clearInputs();
  renderMovies(MOVIE.TITLE, MOVIE.IMAGE_URL, MOVIE.RATING);
  updateUI();
};

const clearInputs = () => {
  for (const inputField of userInputs) {
    inputField.value = "";
  }
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

startMovieModal.addEventListener("click", toggleMovieModal);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
addMovieButton.addEventListener("click", addMovieHander);
