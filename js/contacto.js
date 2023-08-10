const formContacto = document.querySelector("#form-contacto");

const enviarEmail = (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;
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
        display: grid;s
        place-items: center;
      "
    >
      <div style="color: #32fbe2; font-size: 1.4rem;">
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
  }).then((mensaje) =>
    alert(
      mensaje === "OK"
        ? "Mensaje Enviado"
        : "Error al enviar Mensaje, Intente de nuevo"
    )
  );
};

formContacto.addEventListener("submit", enviarEmail);
