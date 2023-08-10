const registrarUsuario = (e) => {
  e.preventDefault();

  let id = usuarios.length > 0 ? usuarios.at(-1).id + 1 : 1;
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let correo = document.querySelector("#correo").value;
  let password = document.querySelector("#contraseña").value;

  let validar = usuarios.find((usuarios) => {
    return usuarios.email == correo;
  });

  if (!validar) {
    let usuario = new Usuario(id, nombre, apellido, correo, password);

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "rollinggames04@gmail.com",
      Password: "799E81F54F88561C3C1A52ACF304FC32746A",
      To: "rollinggames04@gmail.com",
      From: "rollinggames04@gmail.com",
      Subject: "Validacion Registro de Usuario",
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
      <div style="color: #44d9e8; font-size: 1.4rem">
        <img
          src="https://dev-rcs-proyecto2-g4.netlify.app/assets/images/logoEmail.png"
          alt="Logo del Sitio"
          style="width: 150px; height: 150px; margin: 0 auto; display: block"
        />
        <h1 style="text-align: center; font-family: 'Lobster', cursive">
          Rolling Games
        </h1>
        <p
          style="
            margin: 1rem auto;
            font-family: 'Lobster', cursive;
            max-width: 50%;
            text-align: center;
          "
        >
          Nombre Completo: ${nombre} ${apellido}
        </p>
        <p
          style="
            margin: 1rem auto;
            font-family: 'Lobster', cursive;
            max-width: 50%;
            text-align: center;
          "
        >
          Correo Electronico: ${correo}
        </p>
        <div style="text-align: center; margin-top: 3rem">
          <a
            href="https://dev-rcs-proyecto2-g4.netlify.app/pages/admin.html"
            style="
              color: #1a0933;
              background-color: #44d9e8;
              padding: 0.75rem 3rem;
              border-radius: 0.15rem;
              font-size: 1.3rem;
              text-decoration: none;
            "
            >Validar</a
          >
        </div>
      </div>
    </div>
        `,
    })
      .then((mensaje) =>
        alert(
          mensaje === "OK"
            ? "Usuario Cargado, debe esperar aprobación"
            : "Ha ocurrido un error, Intente de nuevo"
        )
      )
      .finally(() => formRegistro.reset());
  } else {
    alert("El correo ya se encuentra registrado");
  }
};

const formRegistro = document.getElementById("formulario");
formRegistro.addEventListener("submit", registrarUsuario);
