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
  const MOVIE_IMAGE = sanitizer(userInputs[1].value.trim());
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
  }
  MoviesArray.push(MOVIE);
  clearInputs();
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
