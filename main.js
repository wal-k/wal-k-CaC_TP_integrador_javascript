import { calcular_descuentos } from "./modules/funciones.js";
import { validarDatos } from "./modules/funciones.js";
import { agregarResultado } from "./modules/funciones.js";




function enviar(){

    let nombre = document.getElementById('campo_nombre').value;
    let apellido = document.getElementById('campo_apellido').value;
    alert("Tu mensaje ha sido enviado " + nombre + " " + apellido + "!");

}


//Linkeo el botón que voy a usar

const button = document.getElementById('resumen1');

//Traigo los datos desde el formulario de la web

const precio = 200;


//Creo la función que une la otra función para calcular monto y mostrar en pantalla de la web

function resumen() {

    const cantidad = document.getElementById('cant_input').value;

    const categoria = document.getElementById('categoria_input').value;


    if(validarDatos(cantidad, categoria)){
      

        let resultado = calcular_descuentos(cantidad, precio, categoria);


        agregarResultado(resultado);

} else {
    alert("Verifique los datos ingresados");
}
}



//Funciones Backend
const eliminarOrador = (id) => {
    if(!confirm('Esta seguro de eliminar el registro?')){
        return;
    }
    const respuesta = fetch(`http://localhost:8080/web-app/api/orador?id=${id}`,{
        method: 'DELETE',
    });

    //2 intento reosolver la promesa
    respuesta
        .then(response => response)
        .then(respuesta => {
            //actualizar el div del html con la informacion
            alert(`Se ha eliminado el orador id: ${id}`);
            listarOradores();
        })
        .catch(error => console.log(error))     
}

const nuevoOrador =  () => {
    //debugger;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const mail = document.getElementById('mail').value;
    const tema = document.getElementById('tema').value;

    const orador = {
        nombre,
        apellido,
        mail,
        tema
    };

    //post al servidor
    //1 preparo la peticion
    const respuesta = fetch(`http://localhost:8080/web-app/api/orador`,{
        method: 'POST',
        body: JSON.stringify(orador),
    });

    //2 intento reosolver la promesa
    respuesta
        .then(response => response.json())
        .then(respuesta => {
            //actualizar el div del html con la informacion
            alert(`Se ha dado de alta el orador id: ${respuesta.id}`);
        })
        .catch(error => console.log(error))        
        
}
document.getElementById('btnGrabar').addEventListener('click',nuevoOrador);



function listarOradores () {

    //1 preparo la peticion
    const respuesta = fetch('http://localhost:8080/web-app/api/orador');

    //2 intento reosolver la promesa
    respuesta
        .then(response => response.json())
        .then(users => {
            //actualizar el div del html con la informacion
            dibujarTabla(users)
        })
        .catch(error => console.log(error))
}

function dibujarTabla(data) {
    const rows = dibujarFilas(data);    
    document.getElementById('usersRows').innerHTML = rows;
}    

function dibujarFilas(oradores) {
    let rows = ``;
    for(let orador of oradores) {//ctrl+d ctr+f2
        //console.log(user)
        rows += `
        <tr>
            <th scope="row">${orador.id}</th>
            <td>${orador.nombre}</td>
            <td>${orador.apellido}</td>
            <td>${orador.tema}</td>
            <td>
                <button onClick="eliminarOrador(${orador.id})">Eliminar</button>
            </td>
        </tr>
        `
    }
    return rows;
}
document.getElementById('btnListado').addEventListener('click',listarOradores);






window.enviar = enviar;
window.resumen = resumen;

//Funciones Backend
window.eliminarOrador = eliminarOrador;
window.nuevoOrador = nuevoOrador;
window.dibujarTabla = dibujarTabla;
window.listarOradores = listarOradores;
window.dibujarFilas = dibujarFilas;