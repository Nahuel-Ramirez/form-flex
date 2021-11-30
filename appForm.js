const form = document.querySelector(".form");
form.addEventListener("submit", envio);

async function envio(evento) {
  evento.preventDefault();
  const form1 = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form1,
    headers: {
      Accept: "apllication/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("¡Gracias por tu mensaje! Te respondere a la brevedad.");
  }
}
