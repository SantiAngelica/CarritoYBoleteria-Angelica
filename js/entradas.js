const boxentradas = document.querySelector("#boxentradas")
const formModal = document.querySelector("#form-modal")
const cerrarModalEntradas = document.querySelectorAll(".cerrar-modal-entradas")
const añadirentrada = document.getElementById("btn-añadir-entrada")
const modalCant = document.getElementById("modal-cant")
const modalNombre = document.getElementById("modal-nombre")
const modalPrecio = document.getElementById("modal-precio")
const modalAprobed = document.getElementById("aprobed")
const alerta = document.querySelector(".alerta")
let id
let idBoton = 3000
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const num = document.querySelector(".num")
let sumador = 1;
const boxHistorial = document.getElementById("historialentradas")
const hora = new Date()

//CREAR CARD EN HISTORIAL DE ENTRADAS

function CardHistorial(entrada, dato) {

    if (!dato) {
        entrada.forEach(entrada => {
            for (let i = 1; i <= entrada.cantidad; i += 1) {
                const nuevaCard = document.createElement("div")
                nuevaCard.classList.add("cardHistorial")
                nuevaCard.classList.add("container")
                nuevaCard.classList.add("mb-5")
                nuevaCard.innerHTML = `
                <figure class="figure-card-historial">
                    <img src="media/ticket.png" class="img-ticket" alt="">
                </figure>
                <div class="contenido-card-historial">
                    <div class="box-contenido-historial mb-0">
                        <h5 class="title-card-historial mb-0">${entrada.nombre}</h5>
                        <p class="mb-0">${entrada.fecha}</p>
                    </div>
                    <p class="text-card-historial mb-0">$${entrada.precio}</p>      
                </div>
                `
                boxHistorial.appendChild(nuevaCard)
            }
        })
    }
    else {
        for (let i = 1; i <= entrada.cantidad; i += 1) {
            const nuevaCard = document.createElement("div")
            nuevaCard.classList.add("cardHistorial")
            nuevaCard.classList.add("container")
            nuevaCard.classList.add("mb-5")
            nuevaCard.innerHTML = `
        <figure class="figure-card-historial">
            <img src="../media/ticket.png" class="img-ticket" alt="">
        </figure>
        <div class="contenido-card-historial">
            <div class="box-contenido-historial mb-0">
                <h5 class="title-card-historial mb-0">${entrada.nombre}</h5>
                <p class="mb-0">${entrada.fecha}</p>
            </div>
            <p class="text-card-historial mb-0">$${entrada.precio}</p>      
        </div>
        `
            boxHistorial.appendChild(nuevaCard)
        }
    }
}




//Crear botones de entradas
function CrearEntrada(entradas) {
    entradas.forEach(entrada => {
        const nuevaEntrada = document.createElement("div");
        nuevaEntrada.classList.add("card")
        nuevaEntrada.classList.add("cardEntradas")
        let contenido
        idBoton += 1
        entrada.soloSocios ? contenido = "$0 Solo socios" : contenido = `$${entrada.precio}`

        nuevaEntrada.innerHTML = `
        <button id="${idBoton}" type="button" class="botonentradas" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                ${entrada.nombre} - ${contenido}
        </button>
        `
        boxentradas.appendChild(nuevaEntrada)



        //GUARDO LA ID DEL BOTON APRETADO
        const botones = nuevaEntrada.querySelector(".botonentradas")
        botones.addEventListener('click', () => {
            id = botones.id
            console.log(id)
        })

    })
}



function AñadirEntradaAlCarrito(entrada) {
    const arr = JSON.parse(localStorage.getItem("entradas"))
    entrada.fecha = 
        `${hora.getDate()}/${hora.getMonth() + 1}/${hora.getFullYear()} - ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()} `

    if (!arr) {
        entrada.id = 1;
        const nuevaEntrada = entrada
        localStorage.setItem("entradas", JSON.stringify([nuevaEntrada]))
    }
    else {
        const NuevoArr = arr
        entrada.id = NuevoArr.length + 1
        NuevoArr.push(entrada)
        localStorage.setItem("entradas", JSON.stringify(NuevoArr))
    }
    CardHistorial(entrada, true)
}


CrearEntrada(ArrEntradas)
const EntradasMostrar = JSON.parse(localStorage.getItem("entradas"))
if (EntradasMostrar) {
    CardHistorial(EntradasMostrar, false)
}



//CHEQUEAR SOCIO, CANTIDAD Y MOSTRAR
formModal.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let objActual = ArrEntradas.find(x => x.id === id)
    alerta.classList.add("azul")
    alerta.classList.add("alerta")
    modalAprobed.innerText = "APROBADO!"
    modalCant.innerText = `x${sumador}`
    modalNombre.innerText = objActual.nombre
    modalPrecio.innerText = `$${objActual.precio * sumador}`
})




//CERRAMOS MODAL Y REINICIAMOS
cerrarModalEntradas.forEach(x => {
    x.addEventListener('click', () => {
        sumador = 1
        alerta.classList.remove("azul")
        num.innerText = `0${sumador}`
        modalAprobed.innerText = ""
        modalCant.innerText = ""
        modalNombre.innerText = ""
        modalPrecio.innerText = ""
    })
})




//añadir entrada al carrito
añadirentrada.addEventListener('click', () => {
    const objCrear = ArrEntradas.find(x => x.nombre === modalNombre.innerText)
    AñadirEntradaAlCarrito(
        {
            nombre: objCrear.nombre,
            precio: objCrear.precio,
            cantidad: sumador
        }
    )

    sumador = 1
    alerta.removeAttribute("class", "azul")
    num.innerText = `0${sumador}`
    modalAprobed.innerText = ""
    modalCant.innerText = ""
    modalNombre.innerText = ""
    modalPrecio.innerText = ""
})




//SELECTOR DE CANTIDAD
plus.addEventListener('click', () => {
    sumador < 3 && (sumador += 1)
    num.innerText = `0${sumador}`
})
minus.addEventListener('click', () => {
    sumador > 1 && (sumador -= 1)
    num.innerText = `0${sumador}`
})
