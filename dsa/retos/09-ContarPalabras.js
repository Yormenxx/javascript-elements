/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */


let text = "Hola mundo, esto es una prueba. Hola mundo!";
let cleanText = "";

for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let char = text[i];

    
    if (charCode >= 65 && charCode <= 90) {
        cleanText += String.fromCharCode(charCode + 32);
    }

    else if ((charCode >= 97 && charCode <= 122) || char === " ") {
        cleanText += char;
    }

}


let wordCounts = {};
let currentWord = "";

cleanText += " ";

for (let i = 0; i < cleanText.length; i++) {
    let char = cleanText[i];

    if (char === " ") {
        if (currentWord.length > 0) {
            if (wordCounts[currentWord]) {
                wordCounts[currentWord]++;
            } else {
                wordCounts[currentWord] = 1;
            }
            currentWord = "";
        }
    } else {
        currentWord += char;
    }
}

console.log(wordCounts);


















