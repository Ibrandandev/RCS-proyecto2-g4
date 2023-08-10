const modalNuevoJuego = new bootstrap.Modal("#modal-nuevo-juego");

const modalModificarJuego = new bootstrap.Modal("#modal-modificar-juego");

const selectCategorias = document.querySelector("#categoria");

const selectModificarCategorias = document.querySelector(
  "#modificar-categoria"
);

const cuerpoTablaJuegos = document.querySelector("#cuerpo-tabla-juegos");

const formAgregarJuego = document.querySelector("#form-agregar-juego");

const formModificarJuego = document.querySelector("#form-modificar-juego");

const cuerpoTablaUsuarios = document.querySelector("#cuerpo-tabla-usuarios");

const main = document.querySelector("#main-admin");

const listarCategoriasEnSelect = (update = 0) => {
  selectCategorias.innerHTML = "";
  selectModificarCategorias.innerHTML = "";
  categorias.forEach((categoria) => {
    const option = document.createElement("option");
    option.innerText = categoria;
    option.value = categoria;
    if (update) {
      selectModificarCategorias.append(option);
    } else {
      selectCategorias.append(option);
    }
  });
};

const abrirModalNuevoJuego = () => {
  modalNuevoJuego.show();
  listarCategoriasEnSelect();
};

let indexModificar = null;

const abrirModalModificarJuego = (id) => {
  indexModificar = id;
  listarCategoriasEnSelect(1);
  const index = juegos.findIndex((juego) => juego.id === indexModificar);
  document.querySelector("#modificar-nombre").value = juegos[index].nombre;
  document.querySelector("#modificar-categoria").value =
    juegos[index].categoria;
  document.querySelector("#modificar-descripcion").value =
    juegos[index].descripcion;
  document.querySelector("#modificar-precio").value = juegos[index].precio;
  document.querySelector("#modificar-imagen").value = juegos[index].imagen;
  document.querySelector("#modificar-video").value = juegos[index].video;
  modalModificarJuego.show();
};

const agregarJuego = (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const categoria = document.querySelector("#categoria").value;
  const descripcion = document.querySelector("#descripcion").value;
  const precio = document.querySelector("#precio").value;
  const imagen = document.querySelector("#imagen").value;
  const video = document.querySelector("#video").value;
  const id = juegos.length > 0 ? juegos.at(-1).id + 1 : 1;
  juegos.push(
    new Juego(id, nombre, categoria, descripcion, precio, imagen, video)
  );
  localStorage.setItem("juegos", JSON.stringify(juegos));
  alert("Juego Agregado Exitosamente");
  formAgregarJuego.reset();
  modalNuevoJuego.hide();
  cargarTablaJuegos();
};

const establecerPublicado = (id) => {
  const index = juegos.findIndex((juego) => juego.id === id);
  if (index != -1) {
    juegos[index].publicado = !juegos[index].publicado;
    localStorage.setItem("juegos", JSON.stringify(juegos));
    cargarTablaJuegos();
  }
};

const modificarJuego = (e) => {
  e.preventDefault();
  const index = juegos.findIndex((juego) => juego.id === indexModificar);
  juegos[index].nombre = document.querySelector("#modificar-nombre").value;
  juegos[index].categoria = document.querySelector(
    "#modificar-categoria"
  ).value;
  juegos[index].descripcion = document.querySelector(
    "#modificar-descripcion"
  ).value;
  juegos[index].precio = document.querySelector("#modificar-precio").value;
  juegos[index].imagen = document.querySelector("#modificar-imagen").value;
  juegos[index].video = document.querySelector("#modificar-video").value;
  localStorage.setItem("juegos", JSON.stringify(juegos));
  alert("Juego Actualizado Exitosamente");
  modalModificarJuego.hide();
  cargarTablaJuegos();
};

const eliminarJuego = (id) => {
  const index = juegos.findIndex((juego) => juego.id === id);
  if (index != -1) {
    if (confirm(`Desea eliminar el juego ${juegos[index].nombre}`)) {
      juegos.splice(index, 1);
      localStorage.setItem("juegos", JSON.stringify(juegos));
      cargarTablaJuegos();
    }
  }
};

const establecerDestacado = (id) => {
  const index = juegos.findIndex((juego) => juego.id === id);
  if (index != -1) {
    juegos.forEach((juego) => {
      juego.destacado = false;
    });
    juegos[index].destacado = true;
    localStorage.setItem("juegos", JSON.stringify(juegos));
    cargarTablaJuegos();
  }
};

const cargarTablaJuegos = () => {
  cuerpoTablaJuegos.innerHTML = "";

  if (juegos.length > 0) {
    juegos.forEach((juego) => {
      const tr = document.createElement("tr");
      const data = `
      <td>${juego.id}</td>
      <td>${juego.nombre}</td>
      <td>${juego.categoria}</td>
      <td>${juego.descripcion}</td>
      <td>$${juego.precio}</td>
      <td>
        <button class="btn" onclick="establecerPublicado(${juego.id})">
          <i class="fa-solid ${
            juego.publicado ? "fa-check text-success" : "fa-x text-danger"
          }">
          </i>
        </button>
      </td>
      <td>
        <div class="d-flex">
          <button class="btn" onclick="abrirModalModificarJuego(${juego.id})">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn " onclick="eliminarJuego(${juego.id})">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="btn" onclick="establecerDestacado(${juego.id})">
            <i class="${juego.destacado ? "fa-solid" : "fa-regular"} fa-star">
            </i>
          </button>
        </div>
      </td>`;

      tr.innerHTML = data;
      cuerpoTablaJuegos.append(tr);
    });
  } else {
    const tr = document.createElement("tr");
    const data = `
      <td>No hay juegos cargados</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>`;

    tr.innerHTML = data;
    cuerpoTablaJuegos.append(tr);
  }
};

const establecerTipo = (id) => {
  const index = usuarios.findIndex((juego) => juego.id === id);
  if (index != -1) {
    usuarios[index].admin = !usuarios[index].admin;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    cargarTablaUsuarios();
  }
};

const establecerAprobado = (id) => {
  const index = usuarios.findIndex((juego) => juego.id === id);
  if (index != -1) {
    usuarios[index].aprobado = !usuarios[index].aprobado;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    cargarTablaUsuarios();
  }
};

const cargarTablaUsuarios = () => {
  cuerpoTablaUsuarios.innerHTML = "";

  if (usuarios.length > 0) {
    usuarios.forEach((usuario) => {
      const tr = document.createElement("tr");
      const data = `
      <td>${usuario.id}</td>
      <td>${usuario.email}</td>
      <td>
        <button class="btn btn-link" onclick="establecerTipo(${usuario.id})">
           ${usuario.admin ? "Administrador" : "Común"}
          </i>
        </button>
      </td>
      <td>
        <button class="btn" onclick="establecerAprobado(${usuario.id})">
          <i class="fa-solid ${
            usuario.aprobado
              ? "fa-check text-success"
              : "fa-circle-exclamation text-warning"
          }">
          </i>
        </button>
      </td>`;

      tr.innerHTML = data;
      cuerpoTablaUsuarios.append(tr);
    });
  } else {
    const tr = document.createElement("tr");
    const data = `
      <td>No hay usuarios registrados</td>
      <td></td>
      <td></td>
      <td></td>`;

    tr.innerHTML = data;
    cuerpoTablaUsuarios.append(tr);
  }
};

formAgregarJuego.addEventListener("submit", agregarJuego);
formModificarJuego.addEventListener("submit", modificarJuego);

if (usuario) {
  if (usuario.admin) {
    cargarTablaJuegos();
    cargarTablaUsuarios();
  }
} else {
  main.innerHTML = "";
  const div = document.createElement("div");
  const content = `<div class="col">
    <div class="alert alert-danger" role="alert">
    No tiene permisos para acceder a esta página!
    </div>  
    </div>    
    `;
  div.innerHTML = content;
  main.append(div);
  setTimeout(() => {
    location.replace("/");
  }, 1500);
}
