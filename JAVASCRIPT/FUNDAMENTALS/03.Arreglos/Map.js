// El método map() en JavaScript es una herramienta poderosa para transformar arrays. Te permite crear un nuevo array aplicando una función a cada elemento del array original.


// El método map() itera sobre cada elemento de un array y ejecuta una función de callback que tú le proporcionas. Esta función de callback recibe el elemento actual como argumento, y lo que sea que retorne esa función se convertirá en el elemento correspondiente en el nuevo array.

const numeros = [1, 2, 3, 4, 5];

const numerosDuplicados = numeros.map((numero)=>{
    return numero * 2;
})

console.log(numerosDuplicados);


const dobleDelaSuma= numeros.map((numero)=>{
    return (numero+numero)*2;
})
console.log(dobleDelaSuma);