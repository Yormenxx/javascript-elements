

// El método estático Array.from() en JavaScript crea una nueva instancia de Array a partir de un objeto iterable o similar a un array (que tenga una propiedad length y elementos indexados).

// Es una herramienta muy útil para convertir estructuras de datos que no son arrays puros, pero que contienen colecciones de elementos, en arrays con los que se puede trabajar usando métodos de Array (como map(), filter(), etc.).


// Los Sets en JavaScript son objetos que permiten almacenar colecciones de valores únicos de cualquier tipo. Su principal característica y diferencia con los Arrays es que no admiten elementos duplicados. Si intentás agregar un valor que ya existe en el Set, la operación se ignora y el Set permanece sin cambios.

const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Recorriendo set");
for (item of set) {
    console.log(item);
}
console.log("Recorriendo set2");
set2.forEach(item => console.log((item)));

let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);
console.log(arr[9]);

set.delete("HOla");
console.log(set);

console.log(set.has("hola"));
console.log(set.has(19));

set2.clear();
console.log(set2); 