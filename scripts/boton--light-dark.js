/*  */
/* Variables */
/*  */

const boton_lightDark = document.querySelector(
  ".menu__item__boton--light-oscuro"
);
const body = document.querySelector("body");

/*  */
/* Funciones */
/*  */

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
  }
  return false; // Si el navegador no soporta matchMedia, asumimos 'light' como valor por defecto
}

boton_lightDark.addEventListener("click", (e) => {
  body.classList.toggle("dark-mode");
});

/*  */
/* Ejecucion del codigo */
/*  */

if (getPreferredColorScheme()) body.classList.toggle("dark-mode");
