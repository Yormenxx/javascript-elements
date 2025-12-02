/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(n) {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= n; i += 2) {

        if (n% i === 0) {
            return false;
        }

    }

    return true;
   

}



for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(` El número ${i} es primo.`);
    } else {
        console.log(` El número ${i} NO es primo.`);
    }
}























