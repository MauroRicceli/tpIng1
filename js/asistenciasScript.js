let estadoItemStandby = false;

var mapCentros = L.map('mapCentros').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapCentros);


var mapMoviles = L.map('mapMoviles').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapMoviles);


let asistencias = [
    {
        "tipo" : "centro",
        "nombre" : "Centro de Asistencia Puerto Madero",
        "latitud" : -34.60842133073247,
        "longitud": -58.372163249138126,
        "direccion": "Av. Hipólito Yrigoyen 300-240, C1086AAB CABA",
        "datosContactoTel": "Telefono: +54 2233-1122",
        "datosContactoEmail":"Email: asistenciacabapm@gmail.com",
        "horarioAtencionDiaSemana": "Lunes a Viernes: 08:00 hasta 17:00",
        "horarioAtencionFinesSemana": "Fines de Semana: 12:00 hasta 19:00",
    },
    {
        "tipo" : "centro",
        "nombre" : "Centro de Asistencia Recoleta",
        "latitud" : -34.58651300047584,
        "longitud": -58.39168561225459,
        "direccion": "Junín 1898, C1113 CABA",
        "datosContactoTel": "Telefono: +54 2213-5521",
        "datosContactoEmail":"Email: asistenciacabarec@gmail.com",
        "horarioAtencionDiaSemana": "Lunes a Viernes: 08:00 hasta 17:00",
        "horarioAtencionFinesSemana": " Fines de Semana: 12:00 hasta 20:00",
    },
    {
        "tipo" : "centro",
        "nombre" : "Centro de Asistencia Palermo",
        "latitud" : -34.5831329,
        "longitud": -58.3948858,
        "direccion": "Direccion : Av. Pres. Figueroa Alcorta 2302, C1428 CABA",
        "datosContactoTel": "Telefono: +54 2235-6661",
        "datosContactoEmail":"Email: asistenciacabapal@gmail.com",
        "horarioAtencionDiaSemana": "Lunes a Viernes: 08:00 hasta 18:00",
        "horarioAtencionFinesSemana": "Fines de Semana: 10:00 hasta 16:00",
    },
    {
        "tipo" : "movil",
        "nombre" : "Movil de Asistencia Palermo Av.Libertador",
        "latitud" : -34.58156058325466,
        "longitud": -58.40375314179162,
        "atencionDia":"Dia: 14/11/23",
        "atencionHorario":"Horario: 12:00 hasta 17:00",
    },
    {
        "tipo" : "movil",
        "nombre" : "Movil de Asistencia Palermo Pqe. Las Heras",
        "latitud" : -34.5840559404257,
        "longitud": -58.408983449407366,
        "atencionDia":"Dia: 22/10/23",
        "atencionHorario":"Horario: 11:00 hasta 15:00",
    },
    {
        "tipo" : "movil",
        "nombre" : "Movil de Asistencia Recoleta Pqe. Vicente López y Planes",
        "latitud" : -34.593755522568614,
        "longitud": -58.3892930819994,
        "atencionDia":"Dia: 11/12/23",
        "atencionHorario":"Horario: 14:00 hasta 20:00",
    },
    {
        "tipo" : "movil",
        "nombre" : "Movil de Asistencia Recoleta Facultad de Ingenieria",
        "latitud" : -34.58842689908133,
        "longitud": -58.39631385956286,
        "atencionDia":"Dia: 5/9/23",
        "atencionHorario":" Horario: 9:00 hasta 17:00",
    },
    {
        "tipo" : "movil",
        "nombre" : "Movil de Asistencia Puerto Madero Museo de la Cárcova",
        "latitud" : -34.61811654316773,
        "longitud": -58.35583396118546,
        "atencionDia":"Dia: 10/11/23",
        "atencionHorario":" Horario: 14:00 hasta 22:00",
    },
    {
        "tipo" : "movil",
        "nombre" : "Movil de Asistencia Puerto Madero Plaza Reina de Holanda",
        "latitud" : -34.60760892988348,
        "longitud": -58.36376257072448,
        "atencionDia":"Dia: 25/12/23",
        "atencionHorario":"Horario: 05:00 hasta 21:00",
    },
    
    
]


function crearMarkerMovil(longitud,latitud,titulo,nombre, atencionDia, atencionHorario) {
    L.marker([latitud,longitud],
        { 
        title: titulo,
        }).addTo(mapMoviles).bindPopup('<h1>'+nombre+'</h1> <br> <h4>'+atencionDia+'</h4> <h4>'+atencionHorario+'</h4>');
        mapMoviles.setView([latitud,longitud]);
}

function añadirMoviles() {
    for (let item of asistencias) {
        if (item.tipo.match("movil")){
            crearMarkerMovil(item.longitud,item.latitud,item.tipo,item.nombre,item.atencionDia, item.atencionHorario);
        }
    }
}


function crearMarkerCentro(longitud,latitud,titulo,nombre,direccion, datosContactoTel, datosContactoEmail, horarioAtencionDiaSemana, horarioAtencionFinesSemana) {
    L.marker([latitud,longitud],
        { 
        title: titulo,
        }).addTo(mapCentros).bindPopup('<h1>'+nombre+'</h1> <h4>'+direccion+'</h4> <h4>'+datosContactoTel+'</h4> <h4>'+datosContactoEmail+'</h4> <h4>'+horarioAtencionDiaSemana+'</h4> <h4>'+horarioAtencionFinesSemana+'</h4>');
        mapCentros.setView([latitud,longitud]);
}

function añadirCentros() {
    for (let item of asistencias) {
        if (item.tipo.match("centro")){
            crearMarkerCentro(item.longitud,item.latitud,item.tipo,item.nombre,item.direccion, item.datosContactoTel, item.datosContactoEmail, item.horarioAtencionDiaSemana, item.horarioAtencionFinesSemana);
        }
    }
}

añadirMoviles();
añadirCentros();

function mostrarMapaCentros(){
    const a = document.querySelectorAll("#mapCentros");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll("#mapMoviles");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    const c = document.querySelectorAll(".menuCentro");
    for(let i = 0; i < c.length; i++){
        c[i].style.backgroundColor="#a19bf9";
    }

    const d = document.querySelectorAll(".menuMovil");
    for(let i = 0; i < d.length; i++){
        d[i].style.backgroundColor="#5b5dad";
    }

    mapCentros.invalidateSize();

    if(estadoItemStandby == false){
        taparStandby();
    }

}

function mostrarMapaMoviles(){
    const a = document.querySelectorAll("#mapMoviles");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.querySelectorAll("#mapCentros");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="none";
    }

    const c = document.querySelectorAll(".menuCentro");
    for(let i = 0; i < c.length; i++){
        c[i].style.backgroundColor="#5b5dad";
    }

    const d = document.querySelectorAll(".menuMovil");
    for(let i = 0; i < d.length; i++){
        d[i].style.backgroundColor="#a19bf9";
    }

    mapMoviles.invalidateSize();

    if(estadoItemStandby == false){
        taparStandby();
    }

}

function taparStandby(){
    const a = document.querySelectorAll(".standByAsistencia");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }
}