alert("Tienes 3 intentos para resolver el siguiente acertijo");

let acertijo = prompt("Las personas siempre duermen menos en un mes del año. ¿Cuál es este mes?");

let intentos = 1;

while(acertijo != "febrero"){
    alert("La respuesta es incorrecta");

    if(intentos === 3){
        break;
    }

    intentos ++;

    acertijo = prompt("Las personas siempre duermen menos en un mes del año. ¿Cuál es este mes?");
}

if (intentos === 3){
    alert("Número total de intentos alcanzados");
}else{
    alert("Acertaste ¡Felicidades!");
}