const arrayCoches = require ('./arrayCoches.js');
const msg = require ('./globales.js');

//  Funcion super importate ante cualquier js para iniciar los comandos
window.onload = ()=>{
    document.getElementById("fotoInicio").onclick = menu;
}

//  Funcion que tiene que recorrer el array de los coches del archivo arrayCoches.js
//  para poder llamar al array de coches, en mi caso genero un nuevo js el cual genero el array
//  donde habre creado los coches y se le añade un export al array que queremos usar
function mostrarCoches(){
    arrayCoches.forEach(element => {
        //Funcion que mostrara por terminal lo que tiene que enseñar
        msg("Funciona"+element);
    });
}


//  Menu principal
function menu(){
    let dvv1 = document.getElementById("menu");
    dvv1.parentNode.removeChild(dvv1);

    let elbody = document.getElementsByTagName("body")[0];
    
    let dv1 = document.createElement("div");
    dv1.id = "menu";
    elbody.appendChild(dv1);

    let ul1 = document.createElement("ul");
    dv1.appendChild(ul1);

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    ul1.appendChild(li1);
    ul1.appendChild(li2);
    ul1.appendChild(li3);

    let a1 = document.createElement("a");
    let a2 = document.createElement("a");
    let a3 = document.createElement("a");

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    a1.innerHTML="Inicio";
    a2.innerHTML="Coches";
    a3.innerHTML="Ayuda";
    a1.href="index.html";
}

module.exports = {
    menu:menu   
}