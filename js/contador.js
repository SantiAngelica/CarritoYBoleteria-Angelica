const contador = document.querySelectorAll(".contadorCarrito")
let variable = 0
const intervalo = setInterval(ActualizarContador,2)


function ActualizarContador() {
    const arr = JSON.parse(localStorage.getItem("carrito"))
    variable = arr.length
    contador.forEach((x) => {
        x.innerHTML = variable
    })
}
