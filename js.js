const toggleMenu = document.querySelector("#toggleMenu");
const menu = document.querySelector("#menu");
const overlay = document.querySelector(".Overlay");

const showMenu = () => {
  menu.classList.toggle("show");
  toggleMenu.classList.toggle("rotate");
  overlay.classList.toggle("overlay");
};

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    menu.classList.remove("show");
    toggleMenu.classList.remove("rotate");
    overlay.classList.remove("overlay");
  }
});
