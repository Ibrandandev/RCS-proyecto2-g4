const login =(event)=>{
    event.preventDefault();



    let correo=document.querySelector("#correo").value;
    let contraseña=document.querySelector("#contraseña").value;
    
    let validar = usuarios.filter(usuarios=> {return usuarios.email == correo && usuarios.password==contraseña});

    if (validar.length>0){
        location.replace ("/index.html");
    } else {
        alert("El correo o contraseña ingresado son incorrectos");
    }
    };
document.getElementById("formulario").addEventListener("submit", login);