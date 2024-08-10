/*  */
/* Variables */

const boton_lightDark = document.querySelector(".boton--light-oscuro");
const body = document.querySelector("body");
const navegacion = document.querySelector("#navegacion");
const resizeObserver = new ResizeObserver(() => {
  updateButtonPosition();
});

/*  */
/* Funciones */

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
  }
  return false; // Si el navegador no soporta matchMedia, asumimos 'light' como valor por defecto
}

function updateButtonPosition() {
  const height = navegacion.offsetHeight;
  boton_lightDark.style.top = `${height + 10}px`;
}

/*  */
/* Ejecucion del codigo */

if (navegacion !== null) {
  updateButtonPosition();
  resizeObserver.observe(navegacion);
}

if (getPreferredColorScheme()) body.classList.toggle("dark-mode");

if (boton_lightDark !== null) {
  boton_lightDark.addEventListener("click", (e) => {
    body.classList.toggle("dark-mode");
  });
}
