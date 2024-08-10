const botonMenu = document.querySelector("[data-botonMenu]");
const menu = document.querySelector(".menu");
const nav = document.querySelector("#navegacion");
const links = menu.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => ocultarMenu());
});

function ocultarMenu(hidden) {
  if (hidden) return (menu.style.display = "");
  menu.style.display === ""
    ? (menu.style.display = "flex")
    : (menu.style.display = "");
}

botonMenu.addEventListener("click", () => {
  ocultarMenu();
});

nav.addEventListener("mouseleave", () => {
  ocultarMenu(true);
});
