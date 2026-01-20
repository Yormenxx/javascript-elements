/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


const str = "Hola mundo";
const reverseStr=[];

for(let i= str.length -1; i>=0; i--){

    reverseStr.push(str[i]);

}
console.log(reverseStr.join(""))
