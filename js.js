//FUNCIONES

function precio_final (mes,dias,porcentaje){
    if (mes == "enero"){
        precio = 25000
    } else if (mes == ("febrero" || "diciembre")){
        precio = 20000
    } else {
        precio = 15000 
    }
    let precio_total = (precio*dias);
    let descuento = ((1-(porcentaje/100))*precio_total); 
    return ("El precio final de su estadia es $"+ descuento);

}




//DATOS Y BUCLE 
let reserva = "";

while(reserva != "si") {

    reserva = prompt("¿Posee usted una reserva");
    if(reserva != "si"){

        nombre = prompt("Indique su nombre");
        console.log("Bienvenido/a ", nombre);

        let mes_reserva = prompt("¿En que mes desea hacer la reserva?");
        let cantidad_de_dias = prompt("¿Cuantos días desea alquilar?");

        let cantidad_pasajeros = prompt("Cuantas personas se desean alojar?");
            if (cantidad_pasajeros>=10){
            console.log("Ha excedido la capacidad de la propiedad.");
            break
            } else {
                console.log("¡La capacidad es la permitida!");
            }

        let codigo_descuento = prompt("¿Posee código de descuento?");
            if (codigo_descuento == "si"){
                pido_descuento = prompt("¿que porcentaje de descuento posee?");
            } else{
                pido_descuento = 0;
            }

        console.log(precio_final(mes_reserva,cantidad_de_dias,pido_descuento));
    }
    else {
        console.log ("¡Lo esperamos pronto!")
    }
}


