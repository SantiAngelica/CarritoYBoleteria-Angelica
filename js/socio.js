const nombre = document.getElementById("inputNombre")
const apellido = document.getElementById("inputApellido")
const dni = document.getElementById("inputDNI")
const correo = document.getElementById("inputEmail")

const form = document.getElementById("form")

const advertenciaNombre = document.getElementById("NombreHelp")
const advertenciaApellido = document.getElementById("ApellidoHelp")
const advertenciaDNI = document.getElementById("DNIHelp")
const advertenciaCorreo = document.getElementById("emailHelp")


//obtener digitos del dni
function UltimosTresDigitos(numero) {
    return numero % 1000
}




//INGRESAR SOCIO
function IngresarSocio(socio) {
    const arr = JSON.parse(localStorage.getItem("socios"))
    if (!arr) {
        socio.id = `${UltimosTresDigitos(socio.dni)}-01`
        const NuevoSocio = socio
        localStorage.setItem("socios", JSON.stringify([NuevoSocio]))
    }
    else {
        const NuevoArr = arr
        socio.id = `${UltimosTresDigitos(socio.dni)}-0${NuevoArr.length + 1}`
        NuevoArr.push(socio)
        localStorage.setItem("socios", JSON.stringify(NuevoArr))
    }
    Swal.fire({
        title: "!Ya eres socio/a oficial!",
        text: `Tu numero de socio es: ${socio.id}`,
        icon: "success"
    });
}



//chequear datos
function ValidarDatos(socio) {
    const arr = JSON.parse(localStorage.getItem("socios"))
    if (!arr) {
        IngresarSocio(socio)
    }
    else {
        const validDni = arr.some(x => x.dni === socio.dni);
        const validCorreo = arr.some(x => x.correo === socio.correo);

        advertenciaDNI.innerText = validDni ? "¡Error! Ya hay un socio registrado con este DNI" : "";
        advertenciaCorreo.innerText = validCorreo ? "¡Error! Ya hay un socio registrado con este correo" : "";

        !validCorreo && !validDni && IngresarSocio(socio);
    }
}




//chequeo socio
function ValidarSocio(socio) {
    advertenciaNombre.innerText = +socio.nombre ? '¡Error! El nombre no es válido' : '';
    advertenciaApellido.innerText = +socio.apellido ? '¡Erro! El apellido no es válido' : '';
    !+socio.nombre && !+socio.apellido && ValidarDatos(socio);
}




//chequeo casillas
function ValidarCasillas(socio) {
    advertenciaNombre.innerText = !socio.nombre ? "Llenar casilla" : "";
    advertenciaApellido.innerText = !socio.apellido ? "Llenar casilla" : "";
    advertenciaDNI.innerText = !socio.dni ? "Llenar casilla" : "";
    advertenciaCorreo.innerText = !socio.correo ? "Llenar casilla" : "";

    socio.nombre && socio.apellido && socio.dni && socio.correo && ValidarSocio(socio);

}




form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    ValidarCasillas(
        {
            nombre: nombre.value,
            apellido: apellido.value,
            dni: Number(dni.value),
            correo: correo.value
        }
    )
})




form.addEventListener('reset', () => {
    advertenciaNombre.innerText = "";
    advertenciaApellido.innerText = "";
    advertenciaDNI.innerText = "";
    advertenciaCorreo.innerText = "";
})