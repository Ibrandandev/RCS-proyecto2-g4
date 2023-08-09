const data = JSON.parse(localStorage.getItem("usuarios")) || [];

const registrarUsuario = (event)=>{
    event.preventDefault();
    

    let id = data.at(-1).id + 1;
    let name = document.querySelector("#nombre").value;
    let last_name = document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let usuario = new Usuario(id,name,last_name, email,password);

    data.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(data));

    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value="";


    location.replace("../pages/login.html");

};
document.getElementById("formulario").addEventListener("submit", registrarUsuario);