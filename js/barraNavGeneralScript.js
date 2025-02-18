function cambiarBordeDropdown(){
    const a = document.getElementsByClassName("dropdownMiembros");
    a[0].style.borderBottomLeftRadius="0";
}

function reestablecerBordeDropdown(){
    const a = document.getElementsByClassName("dropdownMiembros");
    a[0].style.borderBottomLeftRadius="15px";
}

function sesionComercianteIniciada(){
    const a = document.getElementsByClassName("dropdownItemOculto");
    for(let i = 0; i <= a.length-1; i++){
        a[i].style.display="block";
    }

    const b = document.getElementsByClassName("dropdownItemNoOculto");
    for(let i = 0; i <= b.length-1; i++){
        b[i].style.display="none";
    }

    const c = document.getElementsByClassName("dropdownItemPersonal");
    for(let i = 0; i <= c.length-1; i++){
        c[i].style.display="none";
    }

    const e = document.getElementsByClassName("dropdownItemComercianteExt");
    for(let i = 0; i <= e.length-1; i++){
        e[i].style.display="block";
    }

    alert("Iniciaste sesión como comerciante")

}

function sesionComercianteCerrada(){
    const a = document.getElementsByClassName("dropdownItemOculto");
    for(let i = 0; i <= a.length-1; i++){
        a[i].style.display="none";
    }

    const b = document.getElementsByClassName("dropdownItemNoOculto");
    for(let i = 0; i <= b.length-1; i++){
        b[i].style.display="block";
    }

    const c = document.getElementsByClassName("dropdownItemPersonal");
    for(let i = 0; i <= c.length-1; i++){
        c[i].style.display="block";
    }

    const e = document.getElementsByClassName("dropdownItemComercianteExt");
    for(let i = 0; i <= e.length-1; i++){
        e[i].style.display="none";
    }

    alert("Cerraste sesión como comerciante")
}

function sesionPersonalIniciada(){
    const a = document.getElementsByClassName("dropdownItemOculto");
    for(let i = 0; i <= a.length-1; i++){
        a[i].style.display="block";
    }

    const b = document.getElementsByClassName("dropdownItemNoOculto");
    for(let i = 0; i <= b.length-1; i++){
        b[i].style.display="none";
    }

    const c = document.getElementsByClassName("dropdownComerciante");
    for(let i = 0; i <= c.length-1; i++){
        c[i].style.display="none";
    }

    const d = document.getElementsByClassName("dropdownPersonal");
    d[0].style.top="-33%";

    const e = document.getElementsByClassName("dropdownItemPersonalExt");
    for(let i = 0; i <= e.length-1; i++){
        e[i].style.display="block";
    }

    alert("Iniciaste sesión como personal")

}

function sesionPersonalCerrada(){
    const a = document.getElementsByClassName("dropdownItemOculto");
    for(let i = 0; i <= a.length-1; i++){
        a[i].style.display="none";
    }

    const b = document.getElementsByClassName("dropdownItemNoOculto");
    for(let i = 0; i <= b.length-1; i++){
        b[i].style.display="block";
    }

    const c = document.getElementsByClassName("dropdownComerciante");
    for(let i = 0; i <= c.length-1; i++){
        c[i].style.display="block";
    }

    const d = document.getElementsByClassName("dropdownPersonal");
    d[0].style.top="-135%";

    const e = document.getElementsByClassName("dropdownItemPersonalExt");
    for(let i = 0; i <= e.length-1; i++){
        e[i].style.display="none";
    }

    alert("Cerraste sesión como personal")
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