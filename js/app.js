const container = document.getElementById("boxprod")
const precio = document.getElementById("staticBackdropLabel")
const img = document.getElementById("modal-img")
const nombre = document.getElementById("modal-product")
const añadir = document.getElementById("btn-añadir")
const cerrar = document.querySelectorAll(".cerrar-modal")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const num = document.querySelector(".num")
let sumador = 1;










//MOSTRAR CARRITO
// function MostrarCarrito(objeto, dato) {
//     if (!dato) {
//         objeto.forEach(objeto => {
//             let NuevaCard = document.createElement("div")
//             NuevaCard.classList.add("cardCarrito")
//             NuevaCard.classList.add("container")
//             NuevaCard.setAttribute("id", objeto.id)
//             NuevaCard.classList.add("mb-5")
//             NuevaCard.innerHTML = `
//             <figure class="figure-card-carrito">
//                 <img src="${objeto.src}" class="img-card-carrito" alt="">
//             </figure>
//             <div class="contenido-card-carrito">
//                 <h5 class="title-card-carrito">${objeto.nombre}</h5>
//                 <h4 class="cantidad-card-carrito">x${objeto.cantidad}<h4>
//                 <p class="text-card-carrito">$${objeto.precio}</p>      
//             </div>
//             <button class="botonBorrar" id="${objeto.id}">&#10060</button>
//             `
//             boxcarrito.appendChild(NuevaCard)
//             const borrar = NuevaCard.querySelector(".botonBorrar")
//             borrar.addEventListener('click', () => {
//                 EliminarDelCarrito(borrar)
//             })
//         })
//     }
//     else {
//         let NuevaCard = document.createElement("div")
//         NuevaCard.classList.add("cardCarrito")
//         NuevaCard.setAttribute("id", objeto.id)
//         NuevaCard.classList.add("container")
//         NuevaCard.classList.add("mb-5")
//         NuevaCard.innerHTML = `
//             <figure class="figure-card-carrito">
//                 <img src="${objeto.src}" class="img-card-carrito" alt="">
//             </figure>
//             <div class="contenido-card-carrito">
//                 <h5 class="title-card-carrito">${objeto.nombre}</h5>
//                 <h4 class="cantidad-card-carrito">x${objeto.cantidad}<h4>
//                 <p class="text-card-carrito">$${objeto.precio}</p>      
//             </div>
//             <button class="botonBorrar" id="${objeto.id}">&#10060</button>
//             `
//         boxcarrito.appendChild(NuevaCard)
//         const borrar = NuevaCard.querySelector(".botonBorrar")
//         borrar.addEventListener('click', () => {
//             EliminarDelCarrito(borrar)
//         })
//     }
// }








//Agregar producto o entrada al carrito
function AgregarAlCarrito(producto) {
    const arr = JSON.parse(localStorage.getItem("carrito"))
    if (!arr) {
        producto.id = 1
        const nuevoProducto = producto;
        localStorage.setItem("carrito", JSON.stringify([nuevoProducto]))
    }
    else {
        const NuevoArr = arr
        producto.id = NuevoArr.length + 1
        NuevoArr.push(producto)
        localStorage.setItem("carrito", JSON.stringify(NuevoArr))
    }
    Toastify({
        className: "alertaCarrito",
        text: `${producto.nombre} x${producto.cantidad} - $${producto.precio}`,
        destination: "carrito.html",
        close: true,
        avatar: `${producto.src}`,
        gravity: "bottom"
    }).showToast()
}




//Crear cards de productos
function CrearCard(productos) {
    productos.forEach(producto => {
        const nuevoProd = document.createElement("div");
        nuevoProd.classList.add("card")
        nuevoProd.innerHTML = `
         <figure>
             <img src="${producto.src}" class="card-img-top producto" alt="">
         </figure>
         <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text mb-1">$${producto.precio}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Comprar
            </button>       
        </div>
         `
        container.appendChild(nuevoProd); 
        const boxCarrito = document.getElementById("boxcarrito")
        //MOSTRAR MODAL
        const boton = nuevoProd.querySelector(".btn")
        boton.addEventListener('click', () => {
            precio.innerText = producto.precio
            img.setAttribute('src', producto.src)
            nombre.innerText = producto.nombre
        })
    });
}



//INICIALIZAR
CrearCard(ArrProductos)









//AÑADIR AL CARRITO
añadir.addEventListener('click', () => {
    AgregarAlCarrito(
        {
            nombre: nombre.innerText,
            precio: Number(precio.innerText) * sumador,
            cantidad: sumador,
            src: img.src
        }
    )
    ActualizarContador()
    sumador = 1
    num.innerText = `0${sumador}`
})




//CERRAR MODAL Y REINICIAR
cerrar.forEach(boton => boton.addEventListener('click', () => {
    sumador = 1
    num.innerText = `0${sumador}`

}))



//SELECTOR DE CANTIDAD
plus.addEventListener('click', () => {
    sumador < 3 && (sumador += 1)
    num.innerText = `0${sumador}`
})

minus.addEventListener('click', () => {
    sumador > 1 && (sumador -= 1)
    num.innerText = `0${sumador}`
})












