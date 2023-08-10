const formContacto = document.querySelector("#form-contacto");

const enviarEmail = (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;
  if (mensaje.length >= 10) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "rollinggames04@gmail.com",
      Password: "799E81F54F88561C3C1A52ACF304FC32746A",
      To: "rollinggames04@gmail.com",
      From: "rollinggames04@gmail.com",
      Subject: "Rolling Games",
      Body: `
    <div
      style="
        height: 700px;
        width: 100%;
        background-color: #1a0933;
        display: grid;
        place-items: center;
      "
    >
      <div style="color: #44d9e8; font-size: 1.4rem;">
        <img src="https://dev-rcs-proyecto2-g4.netlify.app/assets/images/logoEmail.png" alt="Logo del Sitio" style="width: 150px; height: 150px; margin: 0 auto; display: block"/>
        <h1
          style="text-align: center; font-family: 'Lobster', cursive"
        >
          Rolling Games
        </h1>
        <p
          style="margin: 1rem auto; font-family: 'Lobster', cursive; max-width: 50%; text-align:center;"
        >
          Correo Electronico: ${email}
        </p>
        <p
          style="margin: 1rem auto; font-family: 'Lobster', cursive; max-width: 50%; text-align:center;"
        >
          Mensaje: ${mensaje}
        </p>
      </div>
    </div>
    `,
    })
      .then((mensaje) =>
        alert(
          mensaje === "OK"
            ? "Mensaje Enviado"
            : "Error al enviar Mensaje, Intente de nuevo"
        )
      )
      .finally(() => formContacto.reset());
  }
};

formContacto.addEventListener("submit", enviarEmail);
