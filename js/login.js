const admin={
    correo:"admin@rolling.com",
    contraseña:"rolling12345",
};

let usuario = JSON.parse(localStorage.getItem("user")) || null;

const login =(event)=>{
    event.preventDefault();

    let correo=document.querySelector("#correo").value;
    let contraseña=document.querySelector("#contraseña").value;

    if(correo===admin.correo){
        if(contraseña===admin.contraseña){
            console.log("Mensaje de prueba");
            localStorage.setItem("user", JSON.stringify(correo));
            location.replace("../index.html");
        }
    } else {
        alert("El correo o la contraseña es incoreecta!");
      };
    };
document.getElementById("formulario").addEventListener("submit", login);