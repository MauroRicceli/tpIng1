var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markers=[]

var eventos = [{
        nombre: "Estadio José Amalfitani",
        Imagen: "https://lh5.googleusercontent.com/p/AF1QipPSQ3liDId1Ue6N-r22bwiyr1klYduMy6hZrwLF=w462-h240-k-no",
        Latitud:  -34.63518528443559, 
        Longitud:  -58.52070753353461
    },
    {
        nombre: "Movistar Arena Humboldt 450",
        Imagen: "https://lh5.googleusercontent.com/p/AF1QipMJQiMfPgg0mbT1p2ZkdeonpDww_sNTXyD5_5Zb=w408-h249-k-no",
        Latitud: -34.59403190264474, 
        Longitud: -58.448015575864325
    },
    {
        nombre: "Teatro Gran Rex",
        Imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Teatro_Gran_Rex_Avenida_Corrientes.jpg",
        Latitud: -34.60328130166922, 
        Longitud: -58.378823689355
    },
    {
        nombre: "Pasaje San Lorenzo 380 San Telmo",
        Imagen: "https://parquesalegres.org/wp-content/uploads/2019/08/Jardines-de-Versalles-1170x500.jpg",
        Latitud: -34.616675469887724, 
        Longitud: -58.371316467103384 
    },
    {
        nombre: "Teatro Colón",
        Imagen: "https://lh5.googleusercontent.com/p/AF1QipP75EKBqpTsDqqfQGokN0HEhWoHt0VsVqqFI0Cu=w408-h271-k-no",
        Latitud: -34.60018134327786,
        Longitud: -58.38345830017794
    },
    {
        nombre: "Ciudad Cultural Konex",
        Imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ciudad_Cultural_Konex.jpg/1200px-Ciudad_Cultural_Konex.jpg",
        Latitud: -34.60636636898799, 
        Longitud: -58.410566391208874
    }
]

var comercios = [{
        nombre: "Frávega",
        Descripcion: "Tienda Electrónica",
        Atencion: `Lun - Sab 8 a. m.–10 p. m.
                    Yatasto 198, B1846 Ingeniero Pablo Nogués, Provincia de Buenos Aires`,
        Imagen: "https://lh5.googleusercontent.com/p/AF1QipMm1WdP9CvuukxJTssAhTpyTL21jNzRbcsIWqfe=w426-h240-k-no",
        Latitud:  -34.447334797425185,
        Longitud:  -58.706002233898886
    },
    {
        nombre: "Garbarino",
        Descripcion: "Tienda Electrónica",
        Atencion: `Lun - Sab 8 a. m.–10 p. m
                   Av. Pres. Hipólito Yrigoyen 1826, B1666 José C. Paz, Provincia de Buenos Aires`,
        Imagen: "https://lh5.googleusercontent.com/p/AF1QipMQC4TnnQS10xCAEuxVQIl0KV6qwo9ngwQ4ruvm=w426-h240-k-no",
        Latitud: -34.45963578664469,
        Longitud: -58.74393948142297
    },
    {
        nombre: "Samsung",
        Descripcion: "Tienda Electrónica",
        Atencion: `Lun - Sab 8 a. m.–10 p. m
                    Av. de los Lagos 6660, B1670 Tigre, Provincia de Buenos Aires`,
        Imagen: "https://lh5.googleusercontent.com/p/AF1QipN1IDPemCJgAasSNm51M1Zv3Iq2d6R-_2VS2puF=w408-h255-k-no",
        
        Latitud: -34.39492992436393, 
        Longitud: -58.65546159130693
    },
    {
        nombre: "Sodimac",
        Descripcion: "Tienda de artículos para el hogar",
        Atencion: `Lun - Sab 8 a. m.–10 p. m
                    San Miguel, Provincia de Buenos Aires`,
        Imagen: "https://lh5.googleusercontent.com/p/AF1QipMzZ1E7CCwk9Am3Bux7reID2KBlNWf1h9DLbGHr=w426-h240-k-no",
       
        Latitud: -34.534928888307455, 
        Longitud: -58.70992672063031
    },
    {
        nombre: "Easy",
        Descripcion: "Tienda de artículos para el hogar",
        Atencion: `Lun - Sab 8 a. m.–10 p. m
                    Presidente, Av. Pres. Arturo Umberto Illia 7065, B1665 José C. Paz, Provincia de Buenos Aires`,
        Imagen: "https://lh5.googleusercontent.com/p/AF1QipNfIUv4JKmC7YZdoynzAqCcoG6K-vvEveac_9OY=w426-h240-k-no",
       
        Latitud: -34.49789177657545, 
        Longitud: -58.73160287184505
    } 
]

function crearMarker(item) {
    if (item.Descripcion == undefined){
        item.Descripcion = "";
    }
    
    if (item.Atencion == undefined){
        item.Atencion = "";
    }
    const marker = L.marker([item.Latitud,item.Longitud],
        { 
        title: item.Descripcion,
        }).addTo(map).bindPopup(`<h1>${item.nombre}</h1>
                                <p>${item.Descripcion}<br><br>
                                    ${item.Atencion}</p>
                                <img src="${item.Imagen}" style="width:100px; height:100px;">`);
        map.setView([item.Latitud,item.Longitud],10);

    markers.push(marker);
}

function consultarEventos(indice) {
    limpiarMapa();
    crearMarker(eventos[indice]);
}

function consultarComercios(indice){
    limpiarMapa();
    for (let item of comercios) {
        if ((indice == 0 || indice == 3) && item.Descripcion == "Tienda de artículos para el hogar"){
            crearMarker(item);
        } if ((indice == 1 || indice == 2) && item.Descripcion == "Tienda Electrónica"){
            crearMarker(item);
        }
    }
}

function limpiarMapa(){
    for (item of markers) {
        map.removeLayer(item);
    }
}
