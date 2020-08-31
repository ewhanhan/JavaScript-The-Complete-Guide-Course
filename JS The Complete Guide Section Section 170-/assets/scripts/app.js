const addMovieModal = document.getElementById("add-modal"); //tends to have better performance if getting by ID over querySelector
const startMovieModal = document.querySelector("header button"); // const startMovieModal = document.querySelector("header").lastElementChild;

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible"); //if visible class is there, remove it. If it's not there add it
};

startMovieModal.addEventListener("click", toggleMovieModal);
