//import { forEach } from './arrayCoches.js';
//import msg from './globales.js';

//  Funcion super importate ant e cualquier js para iniciar los comandos
window.onload = () => {
  document.getElementById("fotoInicio").onclick = funPrincipal;
};

let _debug = false;

function msg(message) {
  if (_debug) {
    console.log(message);
  }
}

//  Funcion que borra toda la pagina principal
function eliminarPaginaInicio() {
  document.getElementById("fotoInicio").innerHTML = "";
}

//  Funcion que tiene que recorrer el array de los coches del archivo arrayCoches.js
//  para poder llamar al array de coches, en mi caso genero un nuevo js el cual genero el array
//  donde habre creado los coches y se le añade un export al array que queremos usar
function mostrarCoches() {
  document.getElementById("mostrarCoches").style.display = "grid";
  arrayCoches.forEach((element) => {
    let listaCoches = (document.getElementById("mostrarCoches").innerHTML +=
      "<div class='cochesVenta'> <img class='grid-item' id='cochesVenta' src = " +
      element.img[0] +
      "><div><p>" +
      element.marca +
      "</p><p>" +
      element.modelo +
      "</p><p>" +
      element.kms +
      " Km" +
      "</p></div></div>");
      return listaCoches;
    //Funcion que mostrara por terminal lo que tiene que enseñar
    //msg("Funciona" + element);
  });

  
}

//  Funcion barra superior que permite navegar entre pantallas
function barraSuperior() {
  let barra = `
    <div id="barraArriba">
        <ul>
            <li><a href="/index.html">Inicio</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li style="float:right"><a class="active" href="#about">About</a></li>
        </ul>
    </div>
    `;

  return barra;
}

function crearElementos() {
  let body = `
    <div id="header"></div>
    <div id ="fotoInicio" class="inicio">
           <h1>Bienvenido</h1>
        <img src="img/citroen/citroengris1.jpg"></img>
    </div>

    <div id="mostrarCoches" class = "grid-container" style = "display: none;">
    </div>
    `;
  return body;
}

//  Funcion que muestra toda la pantalla y donde se ejecturan las funciones
function funPrincipal() {
  let body = document.getElementsByTagName("body")[0];
  let header = document.createElement("header");
  header.innerHTML = barraSuperior();
  body.appendChild(header);
  mostrarCoches();

}

const arrayCoches = [
  {
    marca: "Ford",
    modelo: "Focus",
    color: "rojo",
    año: 2019,
    kms: 10230,
    img: ["./img/ford/fordFocusrojo1.jpg", "./img/fordFocusrojo2.jpg"],
    precio: 15000,
  },
  {
    marca: "Ford",
    modelo: "Fiesta",
    color: "verde",
    año: 2017,
    kms: 5000,
    img: ["./img/ford/fordFiestaverde1.jpg", "./img/fordFiestaverde2.jpg"],
    precio: 19000,
  },
  {
    marca: "Ford",
    modelo: "Mondeo",
    color: "verde",
    año: 2017,
    kms: 50000,
    img: ["./img/ford/fordMondeoverde1.jpg", "./img/fordMondeoverde2.jpg"],
    precio: 9000,
  },
  {
    marca: "Kia",
    modelo: "Ceed",
    color: "rojo",
    año: 2012,
    kms: 12311,
    img: ["./img/kia/kiaCeedrojo1.jpg", "./img/kiaCeedrojo2.jpg"],
    precio: 9000,
  },
  {
    marca: "Opel",
    modelo: "Astra",
    color: "amarillo",
    año: 2023,
    kms: 200,
    img: ["./img/opel/opelastraAmarillo1.jpg", "./img/opelastraAmarillo2.jpg"],
    precio: 23000,
  },
  {
    marca: "Citroen",
    modelo: "C4",
    color: "gris",
    año: 2020,
    kms: 2000,
    img: ["./img/citroen/citroengris1.jpg"],
    precio: 19000,
  },
];
