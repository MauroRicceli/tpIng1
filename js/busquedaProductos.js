var avisosPublicados = [{
    _nombre: "Motorola",
    _detalle: "Moto E13 64gb 2gb Ram Color Blanco",
    _precio: "61.599",
    _imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_953005-MLA54432455362_032023-F.webp",
    _categoria: "Tecnología"
}]


function agregarAviso() {
    try {
        const inputBusqueda = document.getElementById("inputBusqueda").value;
        const inputPrecio = document.getElementById("inputPrecio").value;
        const inputDetalle = document.getElementById("inputDetalle").value;
        const inputImagen = document.getElementById("inputImagen").value;
        const inputCategoria = document.getElementById("inputCategoria").value;
    } catch (error) {
        alert("Uno de los campos está incompleto")
    }
       
    const aviso = {
        _nombre:  inputBusqueda.value,
        _detalle: inputDetalle.value,
        _precio:  inputPrecio.value,
        _imagen: inputImagen.value,
        _categoria: inputCategoria.value,
    }

    if (aviso._nombre != "" && aviso._categoria != "selecciona" && aviso._detalle != "" && aviso._imagen != ""){
        avisosPublicados.push(aviso);
        console.log(avisosPublicados[1]);
        alert("aviso publicado");
    } else {
        alert("Uno de los campos está incompleto")
    }
}

function crearAviso(){
    avisosPublicados.forEach(function(aviso){
      
        const seccion = document.getElementById("seccion");
        const panelInformacion = document.createElement('div');
        panelInformacion.innerHTML =`        
            <div class="panel front">
                <img src="${aviso._imagen}" alt="Foro del producto">
                <h3>${aviso._nombre}</h3>
            </div>
            <div class="panel back">
                <h2>${aviso._nombre}</h2>
                <p>${aviso._detalle}</p>
                <br>                                  
                <div class="link">
                    <i class="fa-solid fa-location-dot fa-beat-fade" style="color: #ffffff;"></i>
                </div>
            </div>"`;
       seccion.appendChild(panelInformacion);
    });
}


function buscarProductos() {
    const input = document.getElementById("inputBusqueda").value;
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response => response.json())
        .then(data => mostrarProductos(data.results))
        .catch(error => console.error("Error al buscar productos:", error));
}

function mostrarProductos(productos) {
    const seccionBusqueda = document.getElementById("seccionBusqueda");
    seccionBusqueda.innerHTML = ""; 

    productos.forEach(producto => {

        const titulo = document.createElement("p");
        titulo.textContent = producto.title;
        titulo.id  = "titulo";
        seccionBusqueda.appendChild(titulo);

        const imagen = document.createElement("img");
        imagen.src = producto.thumbnail;
        imagen.id  = "imagen";
        seccionBusqueda.appendChild(imagen);

        const precio = document.createElement("p");
        precio.textContent = `Precio: $ ${producto.price}`;
        precio.id  = "precio";
        seccionBusqueda.appendChild(precio);
    });
}