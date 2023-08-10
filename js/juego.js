const datos = new URLSearchParams(location.search);
const idJuego = datos.get("id");

let contenedor = document.querySelector("#contenido");
const juegos = JSON.parse(localStorage.getItem("juegos")) || [];

const datosJuegos =()=>{
    let detalle = juegos.find((juego)=>juego.id == idJuego);

    if(detalle) {
        let col =document.createElement("div");
        col.classList="col";

        let tarjeta = `
        <div class="card mb-3">
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${juego.image}" class="img-fluid rounded-start p-3" alt="${juego.title}">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${juego.title}</h5>
        <p class="card-text">${juego.description}</p>
        <p class="card-text"><small class="text-muted">Precio: $${juego.price}</small></p>
        </div>
        </div>
        </div>
        </div> 
        `;
        col.innerHTML= tarjeta;
        contenedor.append(col);
    } else {
        contenedor.innerHTML= "No se encuentro detalles del juego Seleccionado"
    }

};
datosJuegos();