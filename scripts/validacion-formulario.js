// Obtención de los elementos html necesarios
const contacto__formulario = document.querySelector(
  "[data-contacto__formulario]"
);
const inputsFormulario = [
  ...contacto__formulario.querySelectorAll('input:not([type="hidden"])'),
];
const textAreaHtml = contacto__formulario.querySelector(
  ".contacto__textarea-mensaje"
);
const contacto__botonEnviar = contacto__formulario.querySelector(
  ".contacto__boton--enviar"
);
const contadorTextarea = contacto__formulario.querySelector(
  ".contacto__contador"
);
const contactSpinners = contacto__formulario.querySelectorAll(
  ".spinner-inline-block"
);

inputsFormulario.push(textAreaHtml);

//  limpieza de los campos al enviar el formulario
export function clearForm() {
  contactSpinners.forEach((spinner) =>
    spinner.classList.toggle("contacto__spinner")
  );
  inputsFormulario.forEach((element) => {
    element.value = "";
  });
}

//  inserción de eventos en los elementos html
inputsFormulario.forEach((input) => {
  input.addEventListener("blur", (event) => validacion(event.target));
});

contacto__botonEnviar.addEventListener("click", (e) => {
  contactSpinners.forEach((spinner) =>
    spinner.classList.add("contacto__spinner")
  );

  const passed = [...inputsFormulario].reduce((passed, input) => {
    if (!validacion(input)) passed = false;
  }, true);

  if (!passed)
    contactSpinners.forEach((spinner) =>
      spinner.classList.remove("contacto__spinner")
    );
});

/**
 * procedimientos de validacion
 * @return {boolean} - si el input pasa la validacion retorna 'true' sinó 'false'
 */
function validacion(input) {
  // liberamos el valor del input de espacios para que no pase la validación si solo hay espacios vacios
  input.value = input.value.trim();
  // A elementError se le asigna el elemnto <p> que muestra el error
  const elementError = contacto__formulario.querySelector(
    `.${input.classList[0] + "-error"}`
  );

  // si no es valido el input, se muestra el msj de error
  if (!input.checkValidity()) {
    elementError.textContent = inputErrorMessage(input);
    elementError.style.display = "block";
    return false;
  } else {
    // si el input es valido se oculta el msj de error
    elementError.style.display = "none";
    return true;
  }
}

// Objeto con mensajes personalizados segun el error obtenido
const messageType = {
  valueMissing: {
    user_name: "El campo no puede estar vacío!",
    user_email: "El campo no puede estar vacío!",
    user_subject: "El campo no puede estar vacío!",
    message: "El mensaje no puede estar vacío!",
  },
  typeMismatch: {
    user_email:
      "El dato ingresado no es un correo electrónico (ej: text@text.com)",
  },
  patternMismatch: {
    user_email: "El correo electrónico no es válido (ej: text@text.com)",
  },
  tooLong: {
    user_name: "El texto supera la longitud permitida (50 caracteres)",
    user_subject: "El texto supera la longitud permitida (50 caracteres)",
  },
};

// Corrobora cual fue el error y quien lo tuvo, y pide el mensaje correspondiente para el usuario
function inputErrorMessage(input) {
  for (let errorName in input.validity) {
    if (input.validity[errorName]) {
      return messageType[errorName][input.name];
    }
  }
}

/* contador de caracteres para textarea */
textAreaHtml.addEventListener("keyup", (event) => {
  contadorTextarea.textContent = 300 - textAreaHtml.value.length;
  if (textAreaHtml.value.length < 300) {
    contadorTextarea.style.color = "blue";
  } else {
    contadorTextarea.style.color = "red";
  }
});
