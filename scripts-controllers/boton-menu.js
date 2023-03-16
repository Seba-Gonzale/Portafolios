const botonMenu = document.querySelector("[data-botonMenu]");
const menu = document.querySelector("[data-menu]");

function ocultarMenu() {
  menu.style.display === ""
    ? (menu.style.display = "flex")
    : (menu.style.display = "");
}

botonMenu.addEventListener("click", () => {
  ocultarMenu();
});

menu.addEventListener("mouseout", () => {
  ocultarMenu();
});
