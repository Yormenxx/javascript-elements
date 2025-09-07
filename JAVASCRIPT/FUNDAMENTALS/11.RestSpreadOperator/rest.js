// El operador rest (...) y el spread operator (...) en JavaScript tienen la misma sintaxis, pero cumplen funciones opuestas según el contexto en el que se usan:

// Operador Rest
// El operador rest "recoge" o "acumula" elementos individuales en un único arreglo. Se utiliza principalmente en la definición de funciones para manejar un número variable de argumentos.
// Funciona como el vargargs de otros lenguajes de programación.


function max(...numeros){
    console.log(numeros);
}

max(1,2,3,4,5)
max(1,2,3)
max(1,2)

//Devuelve siempre un arreglo

function sumar(...numeros) {
  return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
}

console.log(sumar(1, 2, 3, 4)); 






















