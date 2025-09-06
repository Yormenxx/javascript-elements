// find() itera sobre cada elemento del array y ejecuta una función de "callback" que tú le proporcionas. Esta función de callback recibe el elemento actual, su índice y el array completo como argumentos. Si la función de callback devuelve true para algún elemento, find() devuelve ese primer elemento y deja de iterar.

// Si ningún elemento del array satisface la condición (es decir, la función de callback nunca devuelve true), find() devuelve undefined.


const usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
  { id: 3, nombre: 'Maria' }
];

const usuarioEncontrado = usuarios.find(usuario=>usuario.nombre==='Luis');

console.log(usuarioEncontrado); 

const usuarioEncontrado2= usuarios.find(usuario=>usuario.nombre==='Juan');

console.log(usuarioEncontrado2); 

