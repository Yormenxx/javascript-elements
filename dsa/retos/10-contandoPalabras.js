/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function contarPalabras(texto) {
    const conteo = {};
    let palabraActual = "";

    for (let i = 0; i < texto.length; i++) {
        let codigo = texto.charCodeAt(i);
        let caracter = texto[i];

        
        if (codigo >= 65 && codigo <= 90) {
            caracter = String.fromCharCode(codigo + 32);
            codigo += 32;
        }

     
        if (codigo >= 97 && codigo <= 122) {
            palabraActual += caracter;
        } else {
           
            if (palabraActual.length > 0) {
                if (conteo[palabraActual]) {
                    conteo[palabraActual]++;
                } else {
                    conteo[palabraActual] = 1;
                }
                palabraActual = "";
            }
        }
    }


    if (palabraActual.length > 0) {
        if (conteo[palabraActual]) {
            conteo[palabraActual]++;
        } else {
            conteo[palabraActual] = 1;
        }
    }

    return conteo;
}

const texto = "Hola mundo, esto es una prueba. Hola mundo!";
console.log(contarPalabras(texto));
