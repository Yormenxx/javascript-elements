//Una estructura de adatos es una forma de organizar y almacenar datos en una computadora para que puedan ser utilizados de manera eficiente. Las estructuras de datos permiten realizar operaciones como inserción, eliminación, búsqueda y actualización de datos de manera rápida y efectiva. Algunos ejemplos comunes de estructuras de datos incluyen arreglos, listas enlazadas, pilas, colas, árboles y grafos. Cada estructura de datos tiene sus propias ventajas y desventajas, y la elección de la estructura adecuada depende del tipo de datos que se están manejando y las operaciones que se necesitan realizar.

// Big O, también conocida como Notación Big O, representa la complejidad del peor de los casos de un algoritmo. Utiliza términos algebraicos para describir la complejidad de un algoritmo.

// Big O define el tiempo de ejecución necesario para ejecutar un algoritmo identificando como cambiará el rendimiento de su algoritmo a medida que crece el tamaño de la entrada. Pero no le dice que tan rápido es el tiempo de ejecución de su algoritmo.



// O(1) - Excelente/Mejor
// O(log n) - Bueno
// O(n) - Aceptable
// O(n log n) - Malo
// O(n^2), O(2^n) y O(n!) - Horrible/Peor


// Tiempo Constante: O(1)
// Cuando su algoritmo no depende del tamaño de entrada n, se dice que tiene una complejidad temporal constante con orden O(1). Esto significa que el tiempo de ejecución siempre será el mismo independientemente del tamaño de entrada.

// Por ejemplo, si un algoritmo debe devolver el primer elemento de un arreglo. Incluso si el arreglo tiene 1 millón de elementos, la complejidad temporal será constante


// Tiempo Lineal: O(n)
// Se obtiene complejidad de tiempo lineal cuando el tiempo de ejecución de un algoritmo aumenta linealmente con el tamaño de la entrada. Esto significa que cuando una función tiene una iteración que itera sobre un tamaño de entrada n, se dice que tiene una complejidad temporal de orden O(n).

// Por ejemplo, si un algoritmo debe devolver el factorial de cualquier número de entrada. Esto significa que si ingresa 5, debe realizar un bucle y multiplicar 1 x 2 x 3 x 4 x 5 y luego regresar 120:

import { factorial } from "./factorial.js";
console.log(factorial(6));


// Tiempo Logarítmico: O(log n)
// Esto es similar a la complejidad de tiempo lineal, excepto que el tiempo de ejecución no depende del tamaño de la entrada sino de la mitad del tamaño de la entrada. Cuando el tamaño de entrada disminuye en cada iteración o paso, se dice que un algoritmo tiene complejidad logarítmica.

// Este método es el segundo mejor porque su programa se ejecuta con la mitad del tamaño de entrada en lugar del tamaño completo. Después de todo el tamaño de entrada disminuye en cada iteración.

// Tiempo Cuadrático: O(n^2)
// Cuando se realiza una iteración anidada, es decir un bucle dentro de otro bucle, la complejidad del tiempo es cuadrática, lo cual es horrible.

// Una manera perfecta de explicar esto sería si tuviera un arreglo con n elementos. El bucle exterior se ejecutará n veces y el bucle interior se ejecutará n veces por cada iteración del bucle exterior, lo que dará un total de n^2 impresiones. Si el arreglo tiene 10 elementos, habrán 100 impresiones (10^2).









