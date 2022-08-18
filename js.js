
let precio = 20000;
let mes_reserva = prompt("¿En que mes desea hacer la reserva?");
let cantidad_de_dias = prompt("¿Cuantos días desea alquilar?");
let cantidad_pasajeros = prompt("Cuantas personas se desean alojar?");
if (cantidad_pasajeros>=10){
    console.log("Ha excedido la capacidad de la propiedad.");
} else {
    console.log("¡La capacidad es correcta!");
}

let codigo_descuento = prompt("¿Posee código de descuento?");
if (codigo_descuento == "si"){
    pido_descuento = prompt("¿que porcentaje de descuento posee?");
}

let precio_total = (precio * cantidad_de_dias);
let descuento_total = (precio_total * (pido_descuento/100))


console.log("Usted quiere reservar ",cantidad_de_dias," dias.");
console.log("El precio por día es de $",precio);
console.log("El monto total de su estadía es $",precio_total);
console.log("Ustede posee un descuento del",pido_descuento,"%");
console.log("¡Se ahorrará $",descuento_total,"!");
console.log("El importe final de su estadía es: $",precio_total-descuento_total);



