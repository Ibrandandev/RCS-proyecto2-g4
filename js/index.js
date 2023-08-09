const contenedorJuegos = document.querySelector("#contenedor-juegos");
const contenedorDestacado = document.querySelector("#contenedor-destacado");

const listarDestacado = () => {
  const destacado = juegos.find((juego) => juego.destacado);
  if (destacado) {
    const div = document.createElement("div");
    div.classList =
      "row bg-dark mt-5 py-5 justify-content-center align-items-center";
    const data = `
      <div class="col-12 col-lg-8 col-xl-8">
          <iframe src="https://www.youtube.com/embed/${
            destacado.video.split("&")[0].split("v=")[1]
          }" class="w-100 h-100 video-destacado" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
      </div>
      <div class="col-12 col-lg-4 col-xl-2 d-flex flex-column align-items-center gap-2 mt-3 mt-lg-0">
          <h3>${destacado.nombre}</h2>
          <img src="${
            destacado.imagen
          }" class="img-fluid d-none d-lg-flex" alt="" />
          <p>¡Juego destacado!</p>
          <p>${destacado.categoria}</p>
          <a class="btn btn-dark btn-destacado">Comprar</a>
      </div>
    `;
    div.innerHTML = data;
    contenedorDestacado.append(div);
  }
};

const listarJuegos = () => {
  if (juegos.length > 0) {
    categorias.forEach((categoria) => {
      const juegosPorCategoria = juegos.filter(
        (juego) => juego.categoria === categoria
      );
      if (juegosPorCategoria.length > 0) {
        let publicarCat = false;
        const article = document.createElement("article");
        article.classList = "row my-5 gap-4 gap-sm-0";
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
        if (publicarCat) contenedorJuegos.append(article);
      }
    });
  } else {
    contenedorJuegos.innerHTML = `<p class="text-center">No hay juegos cargados</p>`;
  }
};

listarDestacado();
listarJuegos();
