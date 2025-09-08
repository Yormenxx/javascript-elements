// Las funciones anónimas autoejecutables (o IIFE por sus siglas en inglés, Immediately Invoked Function Expression) son una de las características más comunes y útiles de JavaScript. Son funciones que se definen y se ejecutan inmediatamente después de su creación.

// Una IIFE es una función anónima (no tiene nombre) que se envuelve entre paréntesis () y se invoca inmediatamente con un par de paréntesis adicionales ().

(function() {
  // Código que se ejecuta inmediatamente
})();




// Ámbito global
var nombre = 'Juan';

(function() {
  // Ámbito de la IIFE
  var nombre = 'Ana'; // Esta variable 'nombre' no sobrescribe la global
  console.log(nombre); // 'Ana'
})();

console.log(nombre); // 'Juan'



























