const container = document.getElementById("boxprod")
const precio = document.getElementById("staticBackdropLabel")


function CrearCard(productos) {
    productos.forEach(producto => {
        const nuevoProd = document.createElement("div");
        nuevoProd.classList = "card";
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
        let boton = document.querySelector(".btn")
        boton.addEventListener('click', ()=>{
            precio.innerHTML = `$${producto.precio}`
        })

    });
}

CrearCard(ArrProductos)
