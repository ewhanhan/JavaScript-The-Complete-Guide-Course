// "use strict";

const addMovieModal = document.getElementById("add-modal"); //tends to have better performance if getting by ID over querySelector
const startMovieModal = document.querySelector("header button"); // const startMovieModal = document.querySelector("header").lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = document.getElementsByClassName(
  "btn btn--passive"
)[0];
const addMovieButton = document.getElementsByClassName("btn btn--success")[0];
const userInputs = addMovieModal.getElementsByTagName("input");

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
  const MOVIE = {
    TITLE: sanitizer(userInputs[0].value.trim()),
    IMAGE_URL: sanitizer(userInputs[1].value.trim()),
    RATING: sanitizer(userInputs[2].value.trim()),
  };
  for (const prop in MOVIE) {
    if (MOVIE[prop] === "") {
      alert(`Please fill out ${prop} properly`);
    }
  }
  const MOVIERATING = MOVIE.RATING;
  if (MOVIERATING < 1 || MOVIERATING > 5) {
    alert(`Please fill out the movie rating properly`);
  }
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

startMovieModal.addEventListener("click", toggleMovieModal);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
addMovieButton.addEventListener("click", addMovieHander);
