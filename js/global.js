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
    this.nombre=nombre;
    this.apellido=apellido;
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
  <p class="m-0">${usuario.email}</p>
  <button class="btn btn-danger" onclick="cerrarSesion()">Cerrar Sesión</button>`;
  botonesSesion.innerHTML = contenido;
} else {
  const contenido = `           
  <a href="/pages/login.html" class="btn btn-outline-light" >
    Iniciar Sesion
  </a>
  <a href="/pages/registro.html" class="btn btn-light" >
    Registrarse
  </a>`;
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
        "https://i.3djuegos.com/juegos/13424/red_dead_3__nombre_temporal_/fotos/ficha/red_dead_3__nombre_temporal_-5009894.webp",
      video:
        "https://www.youtube.com/watch?v=Y-x0efG1seA&ab_channel=SuperAffiliateMillionaireTV",
      favorito: false,
    },
    {
      id: 3,
      nombre: "FIFA 23",
      descripcion: "Descripcion Breve",
      categoria: "Deportes",
      precio: 750,
      imagen:
        "https://i.3djuegos.com/juegos/18521/fifa_23/fotos/ficha/fifa_23-5756987.webp",
      video:
        "https://www.youtube.com/watch?v=Y-x0efG1seA&ab_channel=SuperAffiliateMillionaireTV",
      favorito: false,
    },
    {
      id: 4,
      nombre: "Grand Theft Auto V",
      descripcion: "Descripcion Breve",
      categoria: "Simulacion",
      precio: 250,
      imagen:
        "https://media.vandal.net/t200/15192/grand-theft-auto-v-2015413122229_1.jpg",
      video:
        "https://www.youtube.com/watch?v=Y-x0efG1seA&ab_channel=SuperAffiliateMillionaireTV",

      favorito: false,
    },
    {
      id: 5,
      nombre: "Need for Speed: Underground 2",
      descripcion: "Descripcion Breve",
      categoria: "Simulacion",
      precio: 999,
      imagen:
        "https://i.3djuegos.com/juegos/900/need_for_speed_underground_2/fotos/ficha/need_for_speed_underground_2-1679146.webp",
      video:
        "https://www.youtube.com/watch?v=Y-x0efG1seA&ab_channel=SuperAffiliateMillionaireTV",
    },
    {
      id: 6,
      nombre: "Battlefield V",
      descripcion: "Descripcion Breve",
      categoria: "Accion",
      precio: 740,
      imagen:
        "https://i.3djuegos.com/juegos/15622/battlefield__2018_/fotos/ficha/battlefield__2018_-4555852.webp",
      video:
        "https://www.youtube.com/watch?v=Y-x0efG1seA&ab_channel=SuperAffiliateMillionaireTV",
    },
    {
      id: 7,
      nombre: "Los Sims 3",
      descripcion: "Descripcion Breve",
      categoria: "Estrategia",
      precio: 600,
      imagen:
        "https://i.3djuegos.com/juegos/2805/los_sims_3/fotos/ficha/los_sims_3-1691353.webp",
      video:
        "https://www.youtube.com/watch?v=Y-x0efG1seA&ab_channel=SuperAffiliateMillionaireTV",
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
      nombre:"Ignacio",
      apellido:"Brandan",
      email: "ignacio@rolling.com",
      password: "12345678",
      aprobado: true,
      admin: true,
    },
    {
      id: 2,
      nombre:"Abel",
      apellido:"Lobo",
      email: "abel@rolling.com",
      password: "12345678",
      aprobado: true,
      admin: true,
    },
    {
      id: 3,
      nombre:"Gonzalo",
      apellido:"garcia",
      email: "gonzalo@rolling.com",
      password: "12345678",
      aprobado: true,
      admin: true,
    },
    {
      id: 4,
      nombre:"Flor",
      apellido:"Zelarayan",
      email: "flor@rolling.com",
      password: "12345678",
      aprobado: true,
      admin: true,
    },
  ];

  data.forEach((usuario) => {
    usuarios.push(new Usuario(usuario.id, usuario.nombre, usuario.apellido, usuario.email, usuario.password));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    location.reload();
  });
};

const listarCategoriasEnMenu = () => {
  categorias.forEach((categoria) => {
    const li = document.createElement("li");
    const ulContenido = `
      <a class="dropdown-item text-body" href="#">
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
      a.href = "#";
      a.classList = "text-body";
      a.innerText = categoria;
      footerCategorias.append(a);
    });
  }
};

listarCategoriasEnMenu();
listarCategoriasEnFooter();
