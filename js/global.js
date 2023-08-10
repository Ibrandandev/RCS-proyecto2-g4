class Juego {
  constructor(id, nombre, categoria, descripcion, precio, imagen, video) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    this.video = video;
    this.publicado = true;
    this.destacado = false;
  }
}

class Usuario {
  constructor(id, nombre, apellido, email, password) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.aprobado = false;
    this.admin = false;
  }
}

const categorias = [
  "Accion",
  "Aventura",
  "Arcade",
  "Deportes",
  "Estrategia",
  "Simulacion",
];

const juegos = JSON.parse(localStorage.getItem("juegos")) || [];

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const ulCategorias = document.querySelector("#ul-categorias");

const footerCategorias = document.querySelector("#footer-categorias");

const usuario = localStorage.getItem("usuario") || null;

const navbarUl = document.querySelector("#navbar-ul");

const botonesSesion = document.querySelector("#botones-sesion");

const cerrarSesion = () => {
  if (usuario) {
    localStorage.removeItem("usuario");
    location.replace("/");
  }
};

if (usuario) {
  const contenido = `
  <div class="w-100 d-flex flex-column gap-3 flex-lg-row align-items-lg-center">
    <p class="m-0 text-nowrap">${usuario.nombre} ${usuario.apellido}</p>
    <button class="btn btn-danger btn-sesion" onclick="cerrarSesion()">Cerrar Sesión</button>
  </div>`;

  botonesSesion.innerHTML = contenido;
} else {
  const contenido = `      
  <div class="w-100 d-flex flex-column gap-3 flex-lg-row">     
    <a href="/pages/login.html" class="btn btn-outline-light btn-sesion text-nowrap" >
      Iniciar Sesion
    </a>
    <a href="/pages/registro.html" class="btn btn-light btn-sesion" >
      Registrarse
    </a>
  </div>`;
  botonesSesion.innerHTML = contenido;
}

if (usuario) {
  const li = document.createElement("li");
  li.classList = "nav-item";
  const liContenido = `
  <a class="nav-link text-body" href="/pages/admin.html">
    Administracion
  </a>
  `;
  li.innerHTML = liContenido;
  navbarUl.append(li);
}

const inicializacionJuegos = () => {
  const data = [
    {
      id: 2,
      nombre: "Red Dead Redemption 2",
      descripcion: "Descripcion Breve",
      categoria: "Accion",
      precio: 500,
      imagen:
        "https://a.thumbs.redditmedia.com/9nnZ7AEPqE1a5V88wh_9nCZc2dpqD9FQhKiyquheVE0.png",
      video:
        "https://www.youtube.com/watch?v=MyaYlbizpvs&ab_channel=RockstarGamesEspa%C3%B1a",
      favorito: false,
    },
    {
      id: 3,
      nombre: "FIFA 23",
      descripcion: "Descripcion Breve",
      categoria: "Deportes",
      precio: 750,
      imagen:
        "https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/game_avatars/gQ/gQ0jjSJxZygXlL1r.jpeg",
      video:
        "https://www.youtube.com/watch?v=zMyeAFzCTM0&ab_channel=PlayStationLatinoam%C3%A9rica",
      favorito: false,
    },
    {
      id: 4,
      nombre: "Grand Theft Auto V",
      descripcion: "Descripcion Breve",
      categoria: "Simulacion",
      precio: 250,
      imagen:
        "https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/game_avatars/cF/cF6dNaqZkGSyVSoE.png",
      video:
        "https://www.youtube.com/watch?v=QkkoHAzjnUs&ab_channel=RockstarGames",
      favorito: false,
    },
    {
      id: 5,
      nombre: "Need for Speed: Underground 2",
      descripcion: "Descripcion Breve",
      categoria: "Simulacion",
      precio: 999,
      imagen:
        "https://www.regfiles.net/media/registry/registry/need-for-speed-underground-2-icon.jpg",
      video:
        "https://www.youtube.com/watch?v=M4hwG0NujpI&ab_channel=ElectronicArtsLatam",
    },
    {
      id: 6,
      nombre: "Battlefield V",
      descripcion: "Descripcion Breve",
      categoria: "Accion",
      precio: 740,
      imagen:
        "https://www.techpowerup.com/review/battlefield-v-benchmark-performance-test/images/small.png",
      video:
        "https://www.youtube.com/watch?v=fb1MR85XFOc&ab_channel=Battlefield",
    },
  ];

  data.forEach((juego) => {
    juegos.push(
      new Juego(
        juego.id,
        juego.nombre,
        juego.categoria,
        juego.descripcion,
        juego.precio,
        juego.imagen,
        juego.video
      )
    );
    localStorage.setItem("juegos", JSON.stringify(juegos));
    location.reload();
  });
};

const inicializacionUsuarios = () => {
  const data = [
    {
      id: 1,
      nombre: "Ignacio",
      apellido: "Brandan",
      email: "ignacio@rolling.com",
      password: "12345678",
      aprobado: true,
      admin: true,
    },
    {
      id: 2,
      nombre: "Abel",
      apellido: "Lobo",
      email: "abel@rolling.com",
      password: "12345678",
      aprobado: true,
      admin: true,
    },
    {
      id: 3,
      nombre: "Gonzalo",
      apellido: "garcia",
      email: "gonzalo@rolling.com",
      password: "12345678",
      aprobado: true,
      admin: true,
    },
    {
      id: 4,
      nombre: "Flor",
      apellido: "Zelarayan",
      email: "flor@rolling.com",
      password: "12345678",
      aprobado: true,
      admin: true,
    },
  ];

  data.forEach((usuario) => {
    usuarios.push(
      new Usuario(
        usuario.id,
        usuario.nombre,
        usuario.apellido,
        usuario.email,
        usuario.password
      )
    );
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    location.reload();
  });
};

const listarCategoriasEnMenu = () => {
  categorias.forEach((categoria) => {
    const li = document.createElement("li");
    const ulContenido = `
      <a class="dropdown-item text-body link-categoria" href="/index.html?categoria=${categoria}">
        ${categoria}
      </a>
    `;
    li.innerHTML = ulContenido;
    ulCategorias.append(li);
  });
};

const listarCategoriasEnFooter = () => {
  if (footerCategorias) {
    categorias.forEach((categoria) => {
      const a = document.createElement("a");
      a.href = `/index.html?categoria=${categoria}`;
      a.classList = "text-body";
      a.innerText = categoria;
      footerCategorias.append(a);
    });
  }
};

listarCategoriasEnMenu();
listarCategoriasEnFooter();
