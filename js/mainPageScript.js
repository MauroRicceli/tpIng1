let indexImagen = 0;

function avanzarImagen(n){
    indexImagen = indexImagen+n;
    cantidadImagenes = cantImagenes();
    if(indexImagen < 0){
        indexImagen = cantidadImagenes;
    } else{
        if(indexImagen > cantidadImagenes){
            indexImagen = 0;
        }
    }

    const img = document.getElementsByClassName("imagenesLugaresMainPage");
    for(let i=0; i<=img.length-1; i++){
        if(indexImagen == i){
            img[i].style.display="block";
        } else {
            img[i].style.display="none";
        }
    }

}

function cantImagenes(){
    let aux = document.getElementsByClassName("imagenesLugaresMainPage");
    return aux.length-1;
}

function mostrarNeon(){
    const a = document.getElementsByClassName("headerDemo");
    for(let i = 0; i <= a.length-1; i++){
        a[i].style.display="none";
    }

    const b = document.getElementsByClassName("headerDemoNeon");
    for(let i = 0; i <= b.length-1; i++){
        b[i].style.display="block";
    }

}

function ocultarNeon(){
    const a = document.getElementsByClassName("headerDemo");
    for(let i = 0; i <= a.length-1; i++){
        a[i].style.display="block";
    }

    const b = document.getElementsByClassName("headerDemoNeon");
    for(let i = 0; i <= b.length-1; i++){
        b[i].style.display="none";
    }
}

function mostrarExtensionContacto(){
    const a = document.getElementsByClassName("logoMail");
    for(let i = 0; i <= a.length-1; i++){
        a[i].style.display="none";
    }

    const b = document.getElementsByClassName("contactUs");
    for(let i = 0; i <= b.length-1; i++){
        b[i].style.display="block";
    }

    const c = document.getElementsByClassName("separadorContactUs");
    if(window.innerWidth < 950){
        c[0].style.display="none";
    }
}

function mostrarLogoMail(){
    const a = document.getElementsByClassName("logoMail");
    for(let i = 0; i <= a.length-1; i++){
        a[i].style.display="block";
    }

    const b = document.getElementsByClassName("contactUs");
    for(let i = 0; i <= b.length-1; i++){
        b[i].style.display="none";
    }
}



function mostrarExtensionLugares(){
    const a = document.getElementsByClassName("items");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }

    const b = document.getElementsByClassName("dropdownLugaresExt");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="block";
    }
}

function mostrarExtensionMiembros(){
    const a = document.getElementsByClassName("items");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="none";
    }

    const b = document.getElementsByClassName("dropdownMiembrosExt");
    for(let i = 0; i < b.length; i++){
        b[i].style.display="block";
     }
    
}

function mostrarItems(){
    const a = document.getElementsByClassName("items");
    for(let i = 0; i < a.length; i++){
        a[i].style.display="block";
    }

    const b = document.getElementsByClassName("dropdownItem");
    for(let i=0; i < b.length; i++){
        b[i].style.display="none";
    }
}