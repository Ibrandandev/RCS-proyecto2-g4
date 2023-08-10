const contenedorJuegos = document.querySelector("#contenedor-juegos");
const contenedorDestacado = document.querySelector("#contenedor-destacado");

const listarDestacado = () => {
  const destacado = juegos.find((juego) => juego.destacado);
  if (destacado) {
    const div = document.createElement("div");
    div.classList =
      "row bg-dark my-4 py-5 justify-content-center align-items-center gap-4";
    const data = `
      <div class="col-12 col-lg-8 col-xl-8">
          <iframe 
            src="https://www.youtube.com/embed/${
              destacado.video.split("&")[0].split("v=")[1]
            }" 
            class="w-100 h-100" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay;        
            clipboard-write; 
            encrypted-media; 
            gyroscope; picture-in-picture; 
            web-share" allowfullscreen>
          </iframe>
      </div>
      <div class="col-12 col-lg-4 col-xl-2 d-flex flex-column align-items-center gap-2 mt-3 mt-lg-0">
          <h3 class="text-center">${destacado.nombre}</h2>
          <img src="${
            destacado.imagen
          }" class="img-fluid rounded d-none d-lg-flex mb-3" alt="" />
          
          <p class="fw-bold">Categoria: ${destacado.categoria}</p>
          <p class="fs-4 text-secondary fw-bold text-nowrap">¡Juego destacado!</p>
          <a class="btn btn-dark btn-destacado" href="/pages/juego.html?id=${
            destacado.id
          }">Ver más</a>
      </div>
    `;
    div.innerHTML = data;
    contenedorDestacado.append(div);
  }
};

const listarJuegos = () => {
  if (juegos.length > 0) {
    contenedorJuegos.innerHTML = " ";
    categorias.forEach((categoria) => {
      const juegosPorCategoria = juegos.filter(
        (juego) => juego.categoria === categoria
      );
      if (juegosPorCategoria.length > 0) {
        let publicarCat = false;
        const article = document.createElement("article");
        article.classList = "row mt-4 mb-5 gap-4 gap-sm-0";
        article.innerHTML += `<h2 class="mb-3 ms-3">${categoria}</h2>`;
        juegosPorCategoria.forEach((juego) => {
          if (juego.publicado) {
            publicarCat = true;
            const div = document.createElement("div");
            div.classList = "col-12 col-md-6 col-lg-4";
            const card = `                
            <div class="card bg-dark pb-2">
              <img src="${juego.imagen}" class="img-fluid img-juego mb-3" alt="">
              <div class="card-body text-center">
                <h5 class="card-title text-nowrap text-body">${juego.nombre}</h5>
                <p class="fs-5 text-secondary opacity-75">Categoria: ${juego.categoria}</p>
                <a class="btn btn-dark text-white" href="/pages/juego.html?id=${juego.id}">Mas informacion</a>
              </div>
            </div>`;
            div.innerHTML = card;
            article.append(div);
          }
        });
        if (publicarCat) {
          contenedorJuegos.append(article);
        }
      }
    });
  } else {
    contenedorJuegos.innerHTML = `<p class="text-center mt-3">No hay juegos cargados</p>`;
  }
};

const buscarJuego = (e) => {
  e.preventDefault();
  const busqueda = document.querySelector("#buscador").value || null;
  if (busqueda) {
    const resultado = juegos.filter(
      (juego) =>
        juego.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
        juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    if (resultado.length > 0) {
      contenedorJuegos.innerHTML = "";
      const article = document.createElement("article");
      article.classList = "row mt-4 mb-5 gap-4 gap-sm-0";
      article.innerHTML += `<h2 class="mb-3 ms-3">Resultado</h2>`;
      resultado.forEach((juego) => {
        if (juego.publicado) {
          const div = document.createElement("div");
          div.classList = "col-12 col-md-6 col-lg-4";
          const card = `
            <div class="card bg-dark pb-2">
              <img src="${juego.imagen}" class="img-fluid img-juego mb-3" alt="">
              <div class="card-body text-center">
                <h5 class="card-title text-nowrap text-body">${juego.nombre}</h5>
                <p class="fs-5 text-secondary opacity-75">Categoria: ${juego.categoria}</p>
                <a class="btn btn-dark text-white" href="/pages/juego.html?id=${juego.id}">Mas informacion</a>
              </div>
            </div>`;
          div.innerHTML = card;
          article.append(div);
        }
      });
      contenedorJuegos.append(article);
    } else {
      contenedorJuegos.innerHTML = `<p class="my-5 text-danger text-center"> No se encontraron juegos asociados a: ${busqueda}</p>`;
      setTimeout(() => {
        listarJuegos();
      }, 3000);
    }
  } else {
    listarJuegos();
  }
};

const listarCategoria = () => {
  const resultado = juegos.filter(
    (juego) => juego.categoria === categoriaBusqueda
  );
  if (resultado.length > 0) {
    let publicarCat = false;
    const article = document.createElement("article");
    article.classList = "row mt-4 mb-5 gap-4 gap-sm-0";
    article.innerHTML += `<h2 class="mb-3 ms-3">${categoriaBusqueda}</h2>`;
    resultado.forEach((juego) => {
      if (juego.publicado) {
        publicarCat = true;
        const div = document.createElement("div");
        div.classList = "col-12 col-md-6 col-lg-4";
        const card = `                
            <div class="card bg-dark pb-2">
              <img src="${juego.imagen}" class="img-fluid img-juego mb-3" alt="">
              <div class="card-body text-center">
                <h5 class="card-title text-nowrap text-body">${juego.nombre}</h5>
                <p class="fs-5 text-secondary opacity-75">Categoria: ${juego.categoria}</p>
                <a class="btn btn-dark text-white" href="/pages/juego.html?id=${juego.id}">Mas informacion</a>
              </div>
            </div>`;
        div.innerHTML = card;
        article.append(div);
      }
    });
    if (publicarCat) {
      contenedorJuegos.innerHTML = "";
      contenedorJuegos.append(article);
    }
  } else {
    contenedorJuegos.innerHTML = `<p class="my-5 text-danger text-center"> No se encontraron juegos para la categoria: <span class="text-body">${categoriaBusqueda}<span></p>`;
    setTimeout(() => {
      location.replace("/");
    }, 3000);
  }
};

listarDestacado();

const urlParams = new URLSearchParams(location.search);

const categoriaBusqueda = urlParams.get("categoria");

if (categoriaBusqueda) {
  listarCategoria();
} else {
  listarJuegos();
}

document
  .querySelector("#form-busqueda")
  .addEventListener("submit", buscarJuego);
