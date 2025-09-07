let edad = 9;

if (edad > 17) {
    console.log("Eres mayor de Edad");
} else {
    console.log("Eres menor de Edad");
}

if (edad >= 18) {
    console.log("Eres mayor de Edad");
} else {
    console.log("Eres menor de Edad");
}

if (edad < 18) {
    console.log("Eres menor de Edad");
} else {
    console.log("Eres mayor de Edad");
}

if (edad <= 17) {
    console.log("Eres menor de Edad");
} else {
    console.log("Eres mayor de Edad");
}

/* Operador Ternario (condición) ? verdadero : falsa */
 console.log("Operador Ternario");
 let eresMayor = (edad >= 18)
   ? "Eres mayor de Edad"
   : "Eres menor de Edad";
 console.log(eresMayor); 