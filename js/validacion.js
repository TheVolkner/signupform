window.onload = iniciar;

//LE COLOCAMOS EL LISTENER AL BOTON PARA VALIDAR LOS CAMPOS.
function iniciar() {
  let btn = document.getElementById("btnEnviar");

  btn.addEventListener("click", validaCampos, false);
}

//VALIDACION DE CAMPOS
function validaCampos() {

    let alerta = document.getElementById("alertaCarta");

    let nombre = document.getElementById("campoNombre").value;
    
    let apellido = document.getElementById("campoApellido").value;
    
    let email = document.getElementById("campoEmail").value;
    
    let password = document.getElementById("campoPassword").value;
    
    let banderaVacio = false;
    
   console.log("contraseña tamaño: " + password.length)

    if(password.length >= 8 && password.length <= 16){

        alert('Sign up successful!')
        alerta.style.display = "none";

    } else {

        alerta.innerHTML = 'Remember that your password should have just 8 to 16 alphanumeric characters.';
        alerta.style.display = "block";
    }

}



