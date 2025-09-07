// La desestructuración en JavaScript es una forma de extraer valores de arreglos u objetos y asignarlos a variables de forma rápida y concisa. Simplifica el código que se usaría tradicionalmente para acceder a propiedades de objetos o elementos de arreglos.



const frutas = ['manzana', 'banana', 'naranja'];

// Asigna el primer elemento a 'primeraFruta' y el segundo a 'segundaFruta'
const [primeraFruta, segundaFruta] = frutas;

console.log(primeraFruta);  // 'manzana'
console.log(segundaFruta);  // 'banana'


// Desestructuración de objetos
// Funciona de manera similar a la de arreglos, pero las variables se crean con el mismo nombre que las propiedades del objeto.

const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

// Asigna las propiedades 'nombre' y 'edad' a variables con el mismo nombre
const { nombre, edad } = persona;

console.log(nombre); // 'Juan'
console.log(edad);   // 30
console.log(persona.nombre)
















