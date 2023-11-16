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



CrearEntrada(ArrEntradas)




//CHEQUEAR SOCIO, CANTIDAD Y MOSTRAR
formModal.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let objActual = ArrEntradas.find(x => x.id === id)
    alerta.classList.add("azul")
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
    console.log( modalNombre.innerText +  modalPrecio.innerText +  modalCant.innerText)
    AgregarAlCarrito(
        {
            nombre: modalNombre.innerText,
            precio: modalPrecio.innerText,
            cantidad: modalCant.innerText,
            src: "../media/ticket.jpg"
        }
    )
    sumador = 1
        num.innerText = `0${sumador}`
        modalCant.innerText = ""
        modalNombre.innerText = ""
        modalPrecio.innerText = ""
})
