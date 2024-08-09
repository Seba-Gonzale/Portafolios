// Obtención de los elementos html necesarios
const contacto__formulario = document.querySelector(
  "[data-contacto__formulario]"
);
const inputsFormulario = [...contacto__formulario.querySelectorAll("input")];
const textAreaHtml = contacto__formulario.querySelector(
  ".contacto__textarea-mensaje"
);
const contacto__boton = contacto__formulario.querySelector(
  ".contacto__boton--enviar"
);
const contadorTextarea = contacto__formulario.querySelector(
  ".contacto__contador"
);

contacto__formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputsFormulario.push(textAreaHtml);

//  inserción de eventos en los elementos html
inputsFormulario.forEach((input) => {
  input.addEventListener("blur", (event) => validacion(event.target));
});

contacto__boton.addEventListener("click", (e) => {
  inputsFormulario.forEach((input) => validacion(input));
});

// procedimientos de validacion
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
  } else {
    // si el input es valido se oculta el msj de error
    elementError.style.display = "none";
  }
}

// Objeto con mensajes personalizados segun el error obtenido
const messageType = {
  valueMissing: {
    nombre: "El campo no puede estar vacío!",
    email: "El campo no puede estar vacío!",
    asunto: "El campo no puede estar vacío!",
    mensaje: "El mensaje no puede estar vacío!",
  },
  typeMismatch: {
    email: "El dato ingresado no es un correo electrónico (ej: text@text.com)",
  },
  patternMismatch: {
    email: "El correo electrónico no es válido (ej: text@text.com)",
  },
  tooLong: {
    nombre: "El texto supera la longitud permitida (50 caracteres)",
    asunto: "El texto supera la longitud permitida (50 caracteres)",
  },
};

// Corrobora cual fue el error y quien lo tuvo, y pide el mensaje correspondiente para el usuario
function inputErrorMessage(input) {
  for (errorName in input.validity) {
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
