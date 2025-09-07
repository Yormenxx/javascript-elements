// El spread operator (...) es un operador de JavaScript que te permite expandir o desempaquetar los elementos de un iterable, como un arreglo o una cadena, en un contexto donde se esperan argumentos o elementos individuales. Su función principal es crear copias, combinar colecciones y pasar argumentos de manera más sencilla y legible.

const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const todosLosNumeros = [...numerosPares, ...numerosImpares];

console.log(todosLosNumeros)

const frutas = ['manzana', 'banana'];
const copiaDeFrutas = [...frutas];

console.log(copiaDeFrutas);


const persona = { nombre: 'María', edad: 28 };
const profesion = { trabajo: 'diseñadora', ciudad: 'Madrid' };

const infoCompleta = { ...persona, ...profesion };

console.log(infoCompleta);























