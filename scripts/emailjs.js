import { clearForm } from "./validacion-formulario.js";

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "sfVINC4xtNRT5uWcv",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_t3jl3di", "contact_form", this).then(
        () => {
          console.log("SUCCESS!");
          clearForm();
          alert("MENSAJE ENVIADO CON ÉXITO!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("OH NO! OCURRIÓ UN ERROR.");
        }
      );
    });
};
