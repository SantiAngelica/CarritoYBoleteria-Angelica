const contador = document.querySelectorAll(".contadorCarrito")
let variable = 0



const intervalo = setInterval(ActualizarContador, 2)


function ActualizarContador() {
    const arr = JSON.parse(localStorage.getItem("carrito"))
    if (arr) {
        variable = arr.reduce((acc, producto) => acc + producto.cantidad, 0)
        contador.forEach((x) => {
            x.innerHTML = variable
        })
    }
    else{
        contador.forEach((x) => {
            x.innerHTML = variable
        })
    }

}
