
const registrarUsuario = (event)=>{
    event.preventDefault();
    
    
    let id = usuarios.at(-1).id + 1;
    let name = document.querySelector("#nombre").value;
    let last_name = document.querySelector("#apellido").value;
    let email = document.querySelector("#correo").value;
    let password = document.querySelector("#contraseña").value;
    
    let validar = usuarios.find(usuarios=> {return usuarios.email == email});


    if (!validar){
        let usuario = new Usuario(id,name,last_name, email,password);
        console.log(usuario);

        usuarios.push(usuario);
        
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.querySelector("#nombre").value = "";
        document.querySelector("#apellido").value = "";
        document.querySelector("#correo").value = "";
        document.querySelector("#contraseña").value="";


        location.replace("../pages/login.html");
    } else {
        alert("El correo ya se encuentra registrado");
    }

    

};
document.getElementById("formulario").addEventListener("submit", registrarUsuario);