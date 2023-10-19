const VALOR_PLATEA_CORD = 6600;
const VALOR_PLATEA_REG = 5900;
const VALOR_POP_GEN = 1000;
const VALOR_POP_REG = 1000;
let precioNoSocio;
let dato;
let totalPagar;
let cantidad;
let entrada;

let validarEntrada = function (ticket, dato) {
    if(dato=="SI")
    {
        while ((ticket != 1) && (ticket != 2) && (ticket != 3) && (ticket != 4)) {
            ticket = Number(prompt("ERROR, ingresar una de las opciones: 1-Platea Cordiviola 2-Platea Regatas 3-Popular Genova 4-Popular Regatas"));
        }
    }
    else
    {
        while ((ticket != 1) && (ticket != 2)) {
            ticket = Number(prompt("ERROR, ingresar una de las opciones: 1-Platea Cordiviola 2-Platea Regatas"));
        }
    }
    return ticket;
}

let validarCantidad = function (cant) {
    while ((cant < 0) || (cant > 3)) {
        cant = Number(prompt("ERROR, maximo 3 entradas"));
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

dato = prompt("¿Es socio del club? Si o No");
dato = validarSocio(dato.toUpperCase());

if(dato=="NO")
{
    entrada = Number(prompt("Que entrada desea comprar: 1-Platea Cordiviola 2-Platea Regatas"));
    entrada = validarEntrada(entrada, dato);
}
else
{
    entrada = Number(prompt("Que entrada desea comprar: 1-Platea Cordiviola 2-Platea Regatas 3-Popular Genova 4-Popular Regatas"));
    entrada = validarEntrada(entrada, dato);
}
//si es popular, solo se puede sacar una entrada por socio
if ((entrada == 1) || (entrada == 2)) {
    cantidad = Number(prompt("¿Cuantas entradas desea comprar? (MAX. 3)"));
    cantidad = validarCantidad(cantidad);
}
else{
    cantidad=1;
}
switch (entrada) {
    case 1:
        precioNoSocio = cantidad * VALOR_PLATEA_CORD;
        break;
    case 2:
        precioNoSocio = cantidad * VALOR_PLATEA_REG;
        break;
    case 3:
        precioNoSocio = cantidad * VALOR_POP_GEN;
        break;
    case 4:
        precioNoSocio = cantidad * VALOR_POP_REG;
}
if(dato=="SI")
{
    totalPagar=precioNoSocio-(1000*cantidad);
}
else
{
    totalPagar=precioNoSocio
}
console.log("el total a pagar es $" + totalPagar);




