let contenedorDetalleJuego = document.querySelector("#detalle-juego");

const datos = new URLSearchParams(location.search);
const idJuego = datos.get("id");

const datosJuegos = () => {
  const juego = juegos.find((juego) => juego.id == idJuego);

  if (juego) {
    let section = document.createElement("section");
    section.innerHTML += `<h1 class="text-center fs-2 mb-3">${juego.nombre}</h1>`;
    let sectionBody = `
      <div class="row">
        <div class="col-lg-8">
          <iframe 
            src="https://www.youtube.com/embed/${
              juego.video.split("&")[0].split("v=")[1]
            }" 
            class="w-100 h-100 video-destacado" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay;        
            clipboard-write; 
            encrypted-media; 
            gyroscope; picture-in-picture; 
            web-share" allowfullscreen>
          </iframe>
        </div>      
        <div class="col-lg-4 text-center">
          <img src="${
            juego.imagen
          }" class="img-fluid rounded d-none d-lg-flex mx-auto w-75" alt="${
      juego.nombre
    }">
          <p class="mt-3 w-75 mx-auto">${juego.descripcion}</p>
          <p class="mt-3 fw-bold">Categoria: ${juego.categoria}</p>
          <div class="d-flex justify-content-center align-items-center gap-3">
            <p class="mt-3 bg-light rounded-circle px-2 py-3 text-black fw-bold">$${
              juego.precio
            }</p>
            <a class="btn btn-secondary" href="/pages/error404.html">Comprar</a>
          </div>
        </div>
      </div>
    `;
    section.innerHTML += sectionBody;
    contenedorDetalleJuego.append(section);
  } else {
    contenedorDetalleJuego.innerHTML = `<p class="text-danger">No se encuentro detalles del juego Seleccionado</p>`;
    setTimeout(() => location.replace("/"), 2000);
  }
};

if (idJuego) {
  datosJuegos();
} else {
  location.replace("/");
}
