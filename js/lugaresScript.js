let estadoItemStandby = false;

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let lugares = [
    {
        "tipo" : "atractivo",
        "nombre" : "Puente de la Mujer",
        "latitud" : -34.615689,
        "longitud": -58.435104,
    },
    {
        "tipo" : "atractivo",
        "nombre" : "Fragata A.R.A Sarmiento",
        "latitud" : -34.60884631837207,
        "longitud": -58.366100811557104,
    },
    {
        "tipo" : "atractivo",
        "nombre" : "Cementerio de la Recoleta",
        "latitud" : -34.587363872847405,
        "longitud": -58.39296623179771,
    },
    {
        "tipo" : "atractivo",
        "nombre" : "Floralis Genérica",
        "latitud" : -34.58168329778127,
        "longitud": -58.39397782075343,
    },
    {
        "tipo" : "atractivo",
        "nombre" : "Ateneo Grand Splendid",
        "latitud" : -34.595986584737915,
        "longitud": -58.394229844065286,   
    }
]


function crearMarker(longitud,latitud,titulo,nombre) {
    L.marker([latitud,longitud],
        { 
        title: titulo,
        }).addTo(map).bindPopup('<h1>'+nombre+'</h1>');
        map.setView([latitud,longitud]);
}

function añadirLugares() {
    for (let item of lugares) {
        if (item.tipo.match("atractivo")){
            crearMarker(item.longitud,item.latitud,item.tipo,item.nombre);
        }
    }
}

añadirLugares();

function mostrarPuertoMadero(){
    const a = document.getElementsByClassName("itemPuertoMadero");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll(".itemPuertoMadero1, .itemPuertoMadero2, .itemRecoleta, .itemRecoleta1, .itemRecoleta2, .itemRecoleta3");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    if(estadoItemStandby == false){
        taparStandby();
    }
}

function mostrarAtractivoPuertoMadero1(){
    const a = document.getElementsByClassName("itemPuertoMadero1");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll(".itemPuertoMadero, .itemPuertoMadero2, .itemRecoleta, .itemRecoleta1, .itemRecoleta2, .itemRecoleta3");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    if(estadoItemStandby == false){
        taparStandby();
    }

}

function mostrarAtractivoPuertoMadero2(){
    const a = document.getElementsByClassName("itemPuertoMadero2");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll(".itemPuertoMadero, .itemPuertoMadero1, .itemRecoleta, .itemRecoleta1, .itemRecoleta2, .itemRecoleta3");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    if(estadoItemStandby == false){
        taparStandby();
    }

}

function mostrarRecoleta(){
    const a = document.getElementsByClassName("itemRecoleta");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll(".itemPuertoMadero, .itemPuertoMadero1, .itemPuertoMadero2, .itemRecoleta1, .itemRecoleta2, .itemRecoleta3");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    if(estadoItemStandby == false){
        taparStandby();
    }
}

function mostrarAtractivoRecoleta1(){
    const a = document.getElementsByClassName("itemRecoleta1");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll(".itemPuertoMadero, .itemPuertoMadero1, .itemPuertoMadero2, .itemRecoleta, .itemRecoleta2, .itemRecoleta3");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    if(estadoItemStandby == false){
        taparStandby();
    }
}

function mostrarAtractivoRecoleta2(){
    const a = document.getElementsByClassName("itemRecoleta2");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll(".itemPuertoMadero, .itemPuertoMadero1, .itemPuertoMadero2, .itemRecoleta, .itemRecoleta1, .itemRecoleta3");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    if(estadoItemStandby == false){
        taparStandby();
    }
}

function mostrarAtractivoRecoleta3(){
    const a = document.getElementsByClassName("itemRecoleta3");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll(".itemPuertoMadero, .itemPuertoMadero1, .itemPuertoMadero2, .itemRecoleta, .itemRecoleta1, .itemRecoleta2");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    if(estadoItemStandby == false){
        taparStandby();
    }
}

function taparStandby(){
    const b = document.getElementsByClassName("lugarItemSeccionStandby");
    b[0].style.display="none";
    estadoItemStandby = true;
}

//PUENTE DE LA MUJER

function mostrarDescripcionPuertoMadero1(){
    const a = document.querySelectorAll(".descripcionCompletaPuertoMadero1");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }
    setTimeout(function(){map.invalidateSize();},1000)
}

function cerrarDescripcionPuertoMadero1(){
    const a = document.querySelectorAll(".descripcionCompletaPuertoMadero1");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }
}

function mirarAtractivoPuertoMadero1(){
    mirarAtractivo("Puente de la Mujer");
}

//FRAGATA

function mostrarDescripcionPuertoMadero2(){
    const a = document.querySelectorAll(".descripcionCompletaPuertoMadero2");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }
}

function cerrarDescripcionPuertoMadero2(){
    const a = document.querySelectorAll(".descripcionCompletaPuertoMadero2");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }
}

function mirarAtractivoPuertoMadero2(){
    mirarAtractivo("Fragata A.R.A Sarmiento");
}

//CEMENTERIO DE RECOLETA

function mostrarDescripcionRecoleta1(){
    const a = document.querySelectorAll(".descripcionCompletaRecoleta1");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }
}

function cerrarDescripcionRecoleta1(){
    const a = document.querySelectorAll(".descripcionCompletaRecoleta1");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }
}

function mirarAtractivoRecoleta1(){
    mirarAtractivo("Cementerio de la Recoleta");
}

//FLORALIS GENERICA

function mostrarDescripcionRecoleta2(){
    const a = document.querySelectorAll(".descripcionCompletaRecoleta2");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }
}

function cerrarDescripcionRecoleta2(){
    const a = document.querySelectorAll(".descripcionCompletaRecoleta2");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }
}

function mirarAtractivoRecoleta2(){
    mirarAtractivo("Floralis Genérica");
}

//ATENEO GRAND SPLENDID

function mostrarDescripcionRecoleta3(){
    const a = document.querySelectorAll(".descripcionCompletaRecoleta3");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }
}

function cerrarDescripcionRecoleta3(){
    const a = document.querySelectorAll(".descripcionCompletaRecoleta3");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }
}

function mirarAtractivoRecoleta3(){
    mirarAtractivo("Ateneo Grand Splendid");
}

//MAPA
function abrirMapa(){
    const a = document.querySelectorAll(".mapaLugares");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
        a[i].style.top="18%";
    }
    map.invalidateSize();
}

function cerrarMapa(){
    const a = document.querySelectorAll(".mapaLugares");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }
}

function mirarAtractivo(nombreLugar){
    for (let item of lugares) {
        if (item.nombre.match(nombreLugar)){
            map.setView([item.latitud,item.longitud],25);
        }
    }
}