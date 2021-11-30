const form = document.querySelector(".form");
form.addEventListener("submit", envio);

const botonMailto = document.querySelector("#mailto");

function envio(evento) {
  evento.preventDefault();
  const form1 = new FormData(this);
  botonMailto.setAttribute(
    "href",
    `mailto:nahuel-ramirez@hotmail.com?subjectnombre ${form1.get(
      "nombre"
    )}correo ${form1.get("email")} =&body=${form1.get("comentarios")}`
  );
  botonMailto.click();
}
