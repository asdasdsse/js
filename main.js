const tiendaOnline = () => {
    let producto = " ";
    let precio = 0;
    let cantidad =  0;
    let cuotas = 0;
    const iva = x => x * 0.21;
    let seguirComprando = false;
    let precioTotal = 0;
    // stock
    usuario = prompt("Bienvenido, cual es tu nombre?");
    do {
        producto = prompt("Hola, que producto de nuestra listado desea comprar? Agua, Aquarius, Coca-cola, Fanta, Sprite, ").toLowerCase;
    switch (producto) {
        case "agua":
            cantidad= prompt("El precio de la botella de agua de 500ml es de $100. Cuantas deseas comprar?");
            precio = 100;
            break;
        case "coca-cola":
            cantidad= prompt("El precio de la lata de coca-cola 354ml es de $320. Cuantas deseas comprar?");
            precio = 320;
            break;
        case "aquarius":
            cantidad= prompt("El precio de la botella de agua saborizada de 500ml es de $120. Cuantas deseas comprar?");
            precio = 120;
            break;
         case "fanta":
            cantidad= prompt("El precio de la lata de fanta 354ml es de $315. Cuantas deseas comprar?");
            precio = 315;
    
            break;
        case "sprite":
            cantidad= prompt("El precio de la lata de sprite 354ml es de $335. Cuantas deseas comprar?");
            precio = 335;
            break;
        default:
            alert("Alguno de los datos ingresados fue incorrecto")
            precio = 0;
            cantidad = 0;
    }
    precioTotal += precio * validarCantidad;
    seguirComprando = confirm("Quieres seguir comprando?");

    } while (seguirComprando);

    const totalConDescuento = aplicarDescuento(precioTotal);
    return precioTotal;
}

const validarCantidad = (cantidad) => {
    while (Numbrer.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert("Ingresa un numero valido");
        } else {
            alert ("Ingresa un numero distinto de cero.");
        }
        cantidad = parseInt(prompt ("Cuantos quieres comprar?"));
    }
}
const aplicarDescuento  confirm("Tenes algun codigo de descuento?") {

}
tiendaOnline()



