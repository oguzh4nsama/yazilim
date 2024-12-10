const button = document.getElementById("toggleButton");
const div = document.querySelector(".heeee");

button.addEventListener("click", () => {
  div.classList.toggle("active"); // active class'ını ekler/kaldırır
});