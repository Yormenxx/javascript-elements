
// Los Symbols (Símbolos) en JavaScript son un tipo de dato primitivo introducido en ECMAScript 6 (ES6), uniéndose a String, Number, Boolean, null, undefined y BigInt.Unicidad e Inmutabilidad: Cada vez que se crea un Symbol, incluso con la misma descripción, se garantiza que es completamente único y no se puede modifica
// Se crean usando la función constructora Symbol()

// Su uso principal es como claves (nombres de propiedad) en objetos. Esto permite crear propiedades que no colisionarán accidentalmente con otras claves de cadena o incluso con otros Symbols no compartidos.


let id1 = Symbol("id1");
let id2 = Symbol("id2");

console.log(id1);
console.log(id2);
console.log(id1 ===id2);
console.log(typeof id1, typeof id2);


const ID_UNICO = Symbol('id');
const usuario = {
  nombre: 'Ana',
  [ID_UNICO]: 12345 // Se usa corchetes para usar el valor del Symbol como clave
};
console.log(usuario[ID_UNICO]); // 12345







