/*Js que contiene el array de los vehiculos que saldran por pantalla*/
const array = [
    {
        marca:"Ford", 
        modelo:"Focus",
        color:"rojo",
        año:2019,
        kms:10230,
        img:['./img/ford/fordFocusrojo1.jpg', './img/fordFocusrojo2.jpg'],
        precio:15000
    },
    {
        marca:"Ford",
        modelo:"Fiesta",
        color:"verde",
        año:2017,
        kms:5000,
        img:['./img/ford/fordFiestaverde1.jpg', './img/fordFiestaverde2.jpg'],
        precio:19000
    },
    {
        marca:"Ford",
        modelo:"Mondeo",
        color:"verde",
        año:2017,
        kms:50000,
        img:['./img/ford/fordMondeoverde1.jpg', './img/fordMondeoverde2.jpg'],
        precio:9000
    },
    {
        marca:"Kia",
        modelo:"Ceed",
        color:"rojo",
        año:2012,
        kms:12311,
        img:['./img/kia/kiaCeedrojo1.jpg', './img/kiaCeedrojo2.jpg'],
        precio:9000
    },
    {
        marca:"Opel",
        modelo:"Astra",
        color:"amarillo",
        año:2023,
        kms:200,
        img:['./img/opel/opelastraAmarillo1.jpg', './img/opelastraAmarillo2.jpg'],
        precio:23000
    },
    {
        marca:"Citroen",
        modelo:"C4",
        color:"gris",
        año:2020,
        kms:2000,
        img:['./img/citroen/citroengris1.jpg'],
        precio:19000
    },
]

module.exports = {
    array:array
}