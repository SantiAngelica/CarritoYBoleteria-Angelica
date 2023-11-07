
let precioNoSocio;
let dato;
let totalPagar;
let cantidad;
let entrada;
let inicio;
let carritoTotal = 0;

const ArrCarrito = [

]


const ArrProductos = [
    {
        id: 2001,
        nombre: "Camiseta titular",
        precio: 20000,
        tipo: "remera",
    },
    {
        id: 2002,
        nombre: "Camiseta alternativa",
        precio: 20000,
        tipo: "remera",
    },
    {
        id: 2003,
        nombre: "Short Azul",
        precio: 10000,
        tipo: "pantalon",
    },
    {
        id: 2004,
        nombre: "Buzo entrenamiento",
        precio: 22000,
        tipo: "buzo",
    },
    {
        id: 2005,
        nombre: "Camperon Azul",
        precio: 50000,
        tipo: "buzo",
    },
    {
        id: 2006,
        nombre: "Visera 89",
        precio: 5000,
        tipo: "accesorios",
    },
    {
        id: 2007,
        nombre: "Yerbera y azucarera",
        precio: 4700,
        tipo: "otro",
    },
    {
        id: 2008,
        nombre: "Pantalon azul",
        precio: 15000,
        tipo: "pantalon",
    },
    {
        id: 2009,
        nombre: "Pantalon celeste",
        precio: 15000,
        tipo: "pantalon",
    },
    {
        id: 2010,
        nombre: "Remera entrenamiento",
        precio: 18000,
        tipo: "remera",
    },
    {
        id: 2011,
        nombre: "Remera arquero rosa",
        precio: 20000,
        tipo: "remera",
    },
    {
        id: 2012,
        nombre: "Short titular",
        precio: 12000,
        tipo: "pantalon",
    },
    {
        id: 2013,
        nombre: "Short suplente",
        precio: 12000,
        tipo: "pantalon",
    }, {
        id: 2014,
        nombre: "Visera blanca",
        precio: 5000,
        tipo: "accesorios",
    },
    {
        id: 2015,
        nombre: "Piluso amarillo",
        precio: 3000,
        tipo: "accesorios",
    },
]


//array de las entradas
const ArrEntradas = [
    {
        id: 3001,
        nombre: "Platea Cordiviola",
        precio: 6600,
        soloSocios: false,
    },
    {
        id: 3002,
        nombre: "Platea Regatas",
        precio: 5900,
        soloSocios: false,
    },
    {
        id: 3003,
        nombre: "Popular Genova",
        precio: 1000,
        soloSocios: true,
    },
    {
        id: 3004,
        nombre: "Popular Regatas",
        precio: 1000,
        soloSocios: true,
    }
]


//validar que el usuario ingrese una de las opciones
let validarEntrada = function (ticket, dato) {
    if (dato == "SI") {
        while ((ticket != 1) && (ticket != 2) && (ticket != 3) && (ticket != 4) && (ticket != 5)) {
            ticket = Number(prompt("ERROR, ingresar una de las opciones:" +
                "\n1- " + ArrEntradas[0].nombre + " - $" + ArrEntradas[0].precio +
                "\n2- " + ArrEntradas[1].nombre + " - $" + ArrEntradas[1].precio +
                "\n3- " + ArrEntradas[2].nombre + " - $" + ArrEntradas[2].precio + " (Una por socio)" +
                "\n4- " + ArrEntradas[3].nombre + " - $" + ArrEntradas[3].precio + " (Una por socio)" +
                "\n5- Volver"));
        }
    }
    else {
        while ((ticket != 1) && (ticket != 2) && (ticket != 3)) {
            ticket = Number(prompt("ERROR, ingresar una de las opciones:" +
                "\n1- " + ArrEntradas[0].nombre + " - $" + ArrEntradas[0].precio +
                "\n2- " + ArrEntradas[1].nombre + " - $" + ArrEntradas[1].precio +
                "\n3- Volver"));
        }
    }
    return ticket;
}
let validarCantidad = function (cant) {
    while ((cant < 1) || (cant > 3)) {
        cant = Number(prompt("ERROR, maximo 3 entradas, minimo 1"));
    }
    return cant;
}
let validarSocio = function (dat) {
    while ((dat != "SI") && (dat != "NO")) {
        dat = prompt("ingrese Si o No");
        dat = dat.toUpperCase();
    }
    return dat;
}
let validarInicio = function (num) {
    while ((num != 1) && (num != 2) && (num != 3)) {
        num = Number(prompt("ERROR, ingrese una de las opciones\n¿A donde desea ir?\n1-Entradas\n2-Productos\n3-Carrito"));
    }
    return num
}
let validarProdcuto = function (producto) {
    while ((producto < 1) || (producto > 16 )) {

        producto = prompt("ERROR, ingrese una de las opciones\n1- " + ArrProductos[0].nombre + " - $" + ArrProductos[0].precio +
        "\n2- " + ArrProductos[1].nombre + " - $" + ArrProductos[1].precio +
        "\n3- " + ArrProductos[2].nombre + " - $" + ArrProductos[2].precio +
        "\n4- " + ArrProductos[3].nombre + " - $" + ArrProductos[3].precio +
        "\n5- " + ArrProductos[4].nombre + " - $" + ArrProductos[4].precio +
        "\n6- " + ArrProductos[5].nombre + " - $" + ArrProductos[5].precio +
        "\n7- " + ArrProductos[6].nombre + " - $" + ArrProductos[6].precio +
        "\n8- " + ArrProductos[7].nombre + " - $" + ArrProductos[7].precio +
        "\n9- " + ArrProductos[8].nombre + " - $" + ArrProductos[8].precio +
        "\n10- " + ArrProductos[9].nombre + " - $" + ArrProductos[9].precio +
        "\n11- " + ArrProductos[10].nombre + " - $" + ArrProductos[10].precio +
        "\n12- " + ArrProductos[11].nombre + " - $" + ArrProductos[11].precio +
        "\n13- " + ArrProductos[12].nombre + " - $" + ArrProductos[12].precio +
        "\n14- " + ArrProductos[13].nombre + " - $" + ArrProductos[13].precio +
        "\n15- " + ArrProductos[14].nombre + " - $" + ArrProductos[14].precio +
        "\n16- Volver");
    }
    return producto
}



//CARRITO
function ProcedureCarrito() {
    ArrCarrito.forEach(x =>{
        if(x.id > 3000)
        console.log( x.nombre + " x" + x.cantidad + "   $" + x.precio);
        else{
            console.log(x.nombre + "   $" + x.precio);
        }
        carritoTotal = carritoTotal + x.precio;
    })
    console.log("El total a pagar es  $" + carritoTotal);
}
//ENTRADAS
function ProcedureEntradas() {
    dato = prompt("¿Es socio del club? Si o No");
    dato = validarSocio(dato.toUpperCase());
    if (dato == "NO") {
        const filtro = ArrEntradas.filter(ticket => ticket.soloSocios === false)
        entrada = Number(prompt(
            "1- " + filtro[0].nombre + " - $" + filtro[0].precio +
            "\n2- " + filtro[1].nombre + " - $" + filtro[1].precio +
            "\n3- Volver"))
        entrada = validarEntrada(entrada, dato)
        if (entrada == 3) {
            ProcedureInicio();
        }
    }
    else {
        entrada = Number(prompt("Que entrada desea comprar:" +
            "\n1- " + ArrEntradas[0].nombre + " - $" + ArrEntradas[0].precio +
            "\n2- " + ArrEntradas[1].nombre + " - $" + ArrEntradas[1].precio +
            "\n3- " + ArrEntradas[2].nombre + " - $" + ArrEntradas[2].precio + " (Una por socio)" +
            "\n4- " + ArrEntradas[3].nombre + " - $" + ArrEntradas[3].precio + " (Una por socio)" +
            "\n5- Volver"));
        entrada = validarEntrada(entrada, dato)
        if (entrada == 5) {
            ProcedureInicio();
        }
    }
    AñadirEntradas(entrada);
}
//AÑADIR ENTRADAS
function AñadirEntradas(entrada) {
    if ((entrada == 1) || (entrada == 2)) {
        cantidad = Number(prompt("¿Cuantas entradas desea comprar? (MAX. 3)"));
        cantidad = validarCantidad(cantidad);
    }
    else {
        cantidad = 1;
    }
    let d = prompt("¿Añadir entrada?")
    d = validarSocio(d.toUpperCase());
    if (d == "SI") {
        switch (entrada) {
            case 1:
                precioNoSocio = cantidad * ArrEntradas[0].precio;
                break;
            case 2:
                precioNoSocio = cantidad * ArrEntradas[1].precio;
                break;
            case 3:
                precioNoSocio = cantidad * ArrEntradas[2].precio;
                break;
            case 4:
                precioNoSocio = cantidad * ArrEntradas[3].precio;
        }
        if (dato == "SI") {
            totalPagar = precioNoSocio - (1000 * cantidad);
        }
        else {
            totalPagar = precioNoSocio;
        }
        ArrCarrito.unshift({
            id: ArrEntradas[entrada - 1].id,
            nombre: ArrEntradas[entrada - 1].nombre,
            cantidad: cantidad,
            precio: totalPagar
        });
        alert("¡Añadido al carrito con exito!\n" + ArrEntradas[entrada - 1].nombre + " x" + cantidad + " - $" + totalPagar)
    }
    ProcedureInicio();
}

//PRODUCTOS
function ProcedureProductos() {
    let producto = prompt("1- " + ArrProductos[0].nombre + " - $" + ArrProductos[0].precio +
        "\n2- " + ArrProductos[1].nombre + " - $" + ArrProductos[1].precio +
        "\n3- " + ArrProductos[2].nombre + " - $" + ArrProductos[2].precio +
        "\n4- " + ArrProductos[3].nombre + " - $" + ArrProductos[3].precio +
        "\n5- " + ArrProductos[4].nombre + " - $" + ArrProductos[4].precio +
        "\n6- " + ArrProductos[5].nombre + " - $" + ArrProductos[5].precio +
        "\n7- " + ArrProductos[6].nombre + " - $" + ArrProductos[6].precio +
        "\n8- " + ArrProductos[7].nombre + " - $" + ArrProductos[7].precio +
        "\n9- " + ArrProductos[8].nombre + " - $" + ArrProductos[8].precio +
        "\n10- " + ArrProductos[9].nombre + " - $" + ArrProductos[9].precio +
        "\n11- " + ArrProductos[10].nombre + " - $" + ArrProductos[10].precio +
        "\n12- " + ArrProductos[11].nombre + " - $" + ArrProductos[11].precio +
        "\n13- " + ArrProductos[12].nombre + " - $" + ArrProductos[12].precio +
        "\n14- " + ArrProductos[13].nombre + " - $" + ArrProductos[13].precio +
        "\n15- " + ArrProductos[14].nombre + " - $" + ArrProductos[14].precio +
        "\n16- Volver");
    producto = validarProdcuto(producto);
    if (producto == 16) {
        ProcedureInicio();
    }
    AñadirProducto(ArrProductos[producto - 1]);
}
//AÑADIR PRODUCTOS
function AñadirProducto(producto) {
    let añadir = prompt("Añadir al carrito:\n" + producto.nombre + " - $" + producto.precio);
    añadir = validarSocio(añadir.toUpperCase())
    if (añadir == "SI") {
        ArrCarrito.push(producto);
    }
    ProcedureProductos();
}
function ProcedureInicio() {
    inicio = Number(prompt("¿A donde desea ir?\n1-Entradas\n2-Productos\n3-Carrito"));
    inicio = validarInicio(inicio);
    if (inicio == 1) {
        ProcedureEntradas();
    }
    else if (inicio == 2) {
        ProcedureProductos();
    }
    else {
        ProcedureCarrito();
    }
}

ProcedureInicio();



