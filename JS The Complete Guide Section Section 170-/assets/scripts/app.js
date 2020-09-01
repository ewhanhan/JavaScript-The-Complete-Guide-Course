// "use strict";

const addMovieModal = document.getElementById("add-modal"); //tends to have better performance if getting by ID over querySelector
const startMovieModal = document.querySelector("header button"); // const startMovieModal = document.querySelector("header").lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = document.getElementsByClassName("btn btn--passive")[0];


const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible"); //if visible class is there, remove it. If it's not there add it
  toggleBackdrop();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const cancelAddMovie = (params) => {
    toggleMovieModal();
}

startMovieModal.addEventListener("click", toggleMovieModal);
cancelAddMovieButton.addEventListener("click", cancelAddMovie)
