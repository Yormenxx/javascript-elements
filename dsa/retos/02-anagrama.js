/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */


function isAnagrama(w1,w2){

    if(w1.toLowerCase()===w2.toLowerCase().split("").reverse().join("")){
        return true;
    }else{
        return false;
    }
}

console.log(isAnagrama("roma","amor"))

