/**
 * @function: Calcula diferencia de años entre fecha actual y fecha de nacimiento
 *
 * @param {string} dateOfBirth - (YYYY/MM/DD) fecha de nacimiento
 * @returns {int} - diferencia de años entre las 2 fechas
 */
function getEdad(dateOfBirth) {
  // Obtenemos un substring de solo el mes y el dia de nacimiento
  const monthAndDay = dateOfBirth.substring(4);

  // Evaluamos si los (meses y dias) del año es mayor a los (meses y dias) de la fecha de nacimiento
  const yearCompleted =
    new Date() > new Date(`${new Date().getFullYear() + monthAndDay}`);

  // Obtenemos la diferencia en años de la fecha actual y la fecha de nacimiento
  const differenceInYears =
    new Date().getFullYear() - new Date(dateOfBirth).getFullYear();

  //  Si en el año actual aun no cumplio años se resta 1 en differenceYears
  if (!yearCompleted) return differenceInYears - 1;
  else return differenceInYears;
}

/*  */
/* Bloque de ejecución del script */
/*  */
// Capturamos el elemento .presentacion__edad del html
const presentacion__edad = document.querySelector(".presentacion__edad");
presentacion__edad.textContent = getEdad("1995/05/06");
