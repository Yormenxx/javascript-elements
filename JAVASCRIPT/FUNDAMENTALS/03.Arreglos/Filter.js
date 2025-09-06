// El método filter() es una función integrada en los arrays de JavaScript. Su propósito principal es crear un nuevo array que contenga solo los elementos de un array original que pasen una prueba específica. Piensa en ello como un colador ️: decides qué quieres que pase y qué no.


// filter() itera sobre cada elemento de un array y ejecuta una función de callback que tú le proporcionas. Esta función de callback debe devolver true o false para cada elemento.


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPar  = numeros.filter((numero)=>{
    return numero % 2 ===0;
})

console.log(numerosPar);










