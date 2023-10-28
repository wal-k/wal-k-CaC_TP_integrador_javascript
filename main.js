import { borrar } from "./modules/borrar.js";
import { calcular_descuentos } from "./modules/calcular_descuentos.js";

console.log("script loaded");
borrar();
calcular_descuentos();


function enviar(){

    let nombre = document.getElementById('campo_nombre').value;
    let apellido = document.getElementById('campo_apellido').value;
    alert("Tu mensaje ha sido enviado " + nombre + " " + apellido + "!");

}


function comprar(){

    confirm("Será redirigido al sitio ticketech.com");

}


