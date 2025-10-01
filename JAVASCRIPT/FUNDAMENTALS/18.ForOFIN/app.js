
const frutas = ['manzana', 'banana', 'naranja'];

for (const fruta of frutas) {
  console.log(fruta); // Imprime el valor de cada elemento
}


// El bucle for...in se utiliza para iterar sobre las claves (propiedades enumerables) de un objeto. A diferencia de for...of, no está diseñado para recorrer arreglos, ya que puede iterar sobre propiedades inesperadas o en un orden no garantizado.




const persona = {
  nombre: 'Ana',
  edad: 25,
  ciudad: 'Lima'
};

for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`); // Accede a la clave y el valor
}














