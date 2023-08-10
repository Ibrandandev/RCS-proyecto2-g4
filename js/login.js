const modalRecuperarContraseña = new bootstrap.Modal(
  document.querySelector("#modal-recuperar-contraseña")
);

if (usuario) {
  location.replace("/index.html");
}

const recuperarContraseña = (e) => {
  e.preventDefault();
  const correo = document.querySelector("#email-recuperar-contraseña").value;
  const encontrado = usuarios.find((usuarios) => {
    return usuarios.email === correo;
  });
  if (encontrado) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "rollinggames04@gmail.com",
      Password: "799E81F54F88561C3C1A52ACF304FC32746A",
      To: "rollinggames04@gmail.com",
      From: "rollinggames04@gmail.com",
      Subject: "Recuperar Contraseña",
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
                Correo Electronico: ${correo}
                </p>
            </div>
            </div>
        `,
    })
      .then((mensaje) =>
        alert(
          mensaje === "OK"
            ? "Se ha enviado un correo para recuperar su contraseña"
            : "Ha ocurrido un error, Intente de nuevo"
        )
      )
      .finally(() => {
        document.querySelector("#email-recuperar-contraseña").value = "";
        modalRecuperarContraseña.hide();
      });
  } else {
    alert("El correo no esta registrado");
  }
};

const login = (e) => {
  e.preventDefault();

  let correo = document.querySelector("#correo").value;
  let contraseña = document.querySelector("#contraseña").value;

  let validar = usuarios.filter((usuarios) => {
    return usuarios.email === correo && usuarios.password === contraseña;
  });

  if (validar.length > 0) {
    const { email, nombre, apellido, aprobado, admin } = validar[0];
    if (aprobado) {
      localStorage.setItem(
        "usuario",
        JSON.stringify({ email, nombre, apellido, aprobado, admin })
      );
      if (admin) {
        location.replace("/pages/admin.html");
      } else {
        location.replace("/index.html");
      }
    } else {
      alert("Necesita aprobación");
    }
  } else {
    alert("El correo o contraseña ingresado son incorrectos");
  }
  document.querySelector("#correo").value = "";
  document.querySelector("#contraseña").value = "";
};

document.getElementById("formulario").addEventListener("submit", login);
document
  .getElementById("form-recuperar-contraseña")
  .addEventListener("submit", recuperarContraseña);
