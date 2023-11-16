const container = document.getElementById("boxprod")
const precio = document.getElementById("staticBackdropLabel")
const img = document.getElementById("modal-img")
const nombre = document.getElementById("modal-product")
const añadir = document.getElementById("btn-añadir")
const cerrar = document.querySelectorAll(".cerrar-modal")


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





        //MOSTRAR MODAL
        const boton = nuevoProd.querySelector(".btn")
        boton.addEventListener('click', () => {
            precio.innerText = producto.precio
            img.setAttribute('src', producto.src)
            nombre.innerText = producto.nombre
        })
    });
}



CrearCard(ArrProductos)



//AÑADIR AL CARRITO
añadir.addEventListener('click', () => {
    AgregarAlCarrito(
        {
            nombre: nombre.innerText,
            precio: Number(precio.innerText)* sumador,
            cantidad: sumador,
            src: img.src
        }
    )
    sumador = 1
    num.innerText = `0${sumador}`
})



//CERRAR MODAL Y REINICIAR
cerrar.forEach(boton => boton.addEventListener('click', () => {
    sumador = 1
    num.innerText = `0${sumador}`
}))