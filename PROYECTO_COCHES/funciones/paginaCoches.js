const arrayCoches = require('./arrayCoches.js');
const debug = require('./globales.js');

//  Funcion super importate ante cualquier js para iniciar los comandos
window.onload = ()=>{
    document.getElementById("fotoInicio").onclick = mostrarCoches;
}

//  Funcion que tiene que recorrer el array de los coches del archivo arrayCoches.js
//  para poder llamar al array de coches, en mi caso genero un nuevo js el cual genero el array
//  donde habre creado los coches y se le añade un export al array que queremos usar
function mostrarCoches(){
    arrayCoches.forEach(element => {
        debug.msg(element,true);
    });
}
