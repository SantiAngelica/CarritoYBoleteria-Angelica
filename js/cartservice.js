const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const num = document.querySelector(".num")
let sumador = 1;
const ArrCarrito = []


//Agregar producto o entrada al carrito
function AgregarAlCarrito(producto){


    const arr = JSON.parse(localStorage.getItem("carrito"))

    
    if(!arr){
        const nuevoProducto = producto;
        nuevoProducto.id = 1
        localStorage.setItem("carrito", JSON.stringify([nuevoProducto]))
    }
    else{
        const NuevoArr = arr
        producto.id = NuevoArr.length + 1
        NuevoArr.push(producto)
        localStorage.setItem("carrito", JSON.stringify(NuevoArr))
    }
}



//SELECTOR DE CANTIDAD
plus.addEventListener('click', () => {
    sumador < 3 && (sumador+=1)
    num.innerText = `0${sumador}`
})
minus.addEventListener('click', () => {
    sumador > 1 && (sumador-=1)
    num.innerText = `0${sumador}`
})




