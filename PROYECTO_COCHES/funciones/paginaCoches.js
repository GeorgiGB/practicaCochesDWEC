//import { forEach } from './arrayCoches.js';
//import msg from './globales.js';

//  Funcion super importate ant e cualquier js para iniciar los comandos
window.onload = ()=>{
    document.getElementById("fotoInicio").onclick = funPrincipal;
}

let _debug = true;

function msg(message){
    if(_debug){
        console.log(message)
    }
}

//  Funcion que borra toda la pagina principal
function eliminarPaginaInicio(){
    document.getElementById("fotoInicio").innerHTML = '';

}


//  Funcion que tiene que recorrer el array de los coches del archivo arrayCoches.js
//  para poder llamar al array de coches, en mi caso genero un nuevo js el cual genero el array
//  donde habre creado los coches y se le añade un export al array que queremos usar
function mostrarCoches(){
    document.getElementById("mostrarCoches").style.display = "grid";
    arrayCoches.forEach(element => {
        document.getElementById("mostrarCoches").innerHTML+="<div><img class='grid-item' src = '"+element.img[0]+"'><p>"+element.marca+"</p></div>";
        //Funcion que mostrara por terminal lo que tiene que enseñar
        msg("Funciona"+element);
    });
}

//  Funcion barra superior que permite navegar entre pantallas
function barraSuperior(){
    
}

//  Funcion que muestra toda la pantalla y donde se ejecturan las funciones
function funPrincipal(){
    eliminarPaginaInicio();
    barraSuperior();
    mostrarCoches();
}


//  Menu principal
/*function menu(){
    let dvv1 = document.getElementById("mostrarCoches");
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
}*/

const arrayCoches = [    
    {
    "marca":"Ford", 
    "modelo":"Focus",
    "color":"rojo",
    "año":2019,
    "kms":10230,
    "img":["./img/ford/fordFocusrojo1.jpg", "./img/fordFocusrojo2.jpg"],
    "precio":15000
},
{
    "marca":"Ford",
    "modelo":"Fiesta",
    "color":"verde",
    "año":2017,
    "kms":5000,
    "img":["./img/ford/fordFiestaverde1.jpg", "./img/fordFiestaverde2.jpg"],
    "precio":19000
},
{
    "marca":"Ford",
    "modelo":"Mondeo",
    "color":"verde",
    "año":2017,
    "kms":50000,
    "img":["./img/ford/fordMondeoverde1.jpg", "./img/fordMondeoverde2.jpg"],
    "precio":9000
},
{
    "marca":"Kia",
    "modelo":"Ceed",
    "color":"rojo",
    "año":2012,
    "kms":12311,
    "img":["./img/kia/kiaCeedrojo1.jpg", "./img/kiaCeedrojo2.jpg"],
    "precio":9000
},
{
    "marca":"Opel",
    "modelo":"Astra",
    "color":"amarillo",
    "año":2023,
    "kms":200,
    "img":["./img/opel/opelastraAmarillo1.jpg", "./img/opelastraAmarillo2.jpg"],
    "precio":23000
},
{
    "marca":"Citroen",
    "modelo":"C4",
    "color":"gris",
    "año":2020,
    "kms":2000,
    "img":["./img/citroen/citroengris1.jpg"],
    "precio":19000
}];