const boxcarrito = document.getElementById("containerCarrito")
const tituloCarrito = document.getElementById("titulocarrito")
const totalCarrito = document.getElementById("totalcarrito")
let precioFinal = 0
const borrarCarrito = document.getElementById("botonBorrarCarrito")
const pagar = document.getElementById("pagar")

//CALCULAR Y ACTUALIZAR PRECIO FINAL DEL CARRITO
function PrecioCarrito() {
    const arr = JSON.parse(localStorage.getItem("carrito"))
    precioFinal = arr.reduce((acc, el) => acc + el.precio, 0)
    if (precioFinal == 0) {
        tituloCarrito.innerText = "Carrito vacio"
        totalCarrito.innerText = `$${precioFinal}`
        pagar.className = "rojo"
    }
    else {
        tituloCarrito.innerText = "Carrito"
        totalCarrito.innerText = `$${precioFinal}`
        pagar.className = "verde"
    }
}




//BORRAR ELEMENTO DEL CARRITO
function EliminarDelCarrito(elemento) {
    boxcarrito.removeChild(elemento.parentNode)
    const arr = JSON.parse(localStorage.getItem("carrito"))
    const nuevoArray = arr.filter(producto => producto.id != elemento.id)
    localStorage.setItem("carrito", JSON.stringify(nuevoArray))
    PrecioCarrito()
}




//Mostrar carrito
function MostrarCarrito(productos) {
    productos.forEach(objeto => {
        let NuevaCard = document.createElement("div")
        NuevaCard.classList.add("container")
        NuevaCard.classList.add("cardCarrito")
        NuevaCard.setAttribute("id", objeto.id)
        NuevaCard.classList.add("mb-5")
        NuevaCard.innerHTML = `
                 <figure class="figure-card-carrito">
                     <img src="${objeto.src}" class="img-card-carrito" alt="">
                 </figure>
                 <div class="contenido-card-carrito">
                     <h5 class="title-card-carrito">${objeto.nombre}</h5>
                     <h4 class="cantidad-card-carrito">x${objeto.cantidad}<h4>
                     <p class="text-card-carrito">$${objeto.precio}</p>      
                 </div>
                 <button class="botonBorrar" id="${objeto.id}">&#10060</button>
                    `
        boxcarrito.append(NuevaCard)
        const borrar = NuevaCard.querySelector(".botonBorrar")
        borrar.addEventListener('click', () => {
            EliminarDelCarrito(borrar)
            NuevaCard.classList.add("cardCarrito")
        });
    })
}

const ArrCarrito = JSON.parse(localStorage.getItem("carrito"))
MostrarCarrito(ArrCarrito)
PrecioCarrito()






//Borrar carrito
borrarCarrito.addEventListener('click', () => {
    if (precioFinal > 0) {
        Swal.fire({
            title: "ESPERA!",
            text: "¿Desea borrar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Borralo!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Hecho!",
                    text: "Su carrito a sido borrado.",
                    icon: "success"
                });
                boxcarrito.innerHTML = ""
                const nuevoArray = []
                localStorage.setItem("carrito", JSON.stringify(nuevoArray))
                PrecioCarrito()
            }
        });
    }
})




//Pagar
pagar.addEventListener('click', () => {
    if (precioFinal > 0) {
        Swal.fire({
            title: `$${precioFinal}`,
            text: "¿Finalizar compra?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Finalizar!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Hecho!",
                    text: "Pago efectuado",
                    icon: "success"
                });
                boxcarrito.innerHTML = ""
                const nuevoArray = []
                localStorage.setItem("carrito", JSON.stringify(nuevoArray))
                PrecioCarrito()
            }
        })
    }
})
