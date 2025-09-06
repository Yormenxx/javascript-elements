const p = document.querySelector("p");
console.log(p.innerText)
console.log(p.textContent)

const h1 = document.querySelector("h1");
h1.innerText="Hello world I changed it";
h1.innerHTML="<em>Hello world I changed it</em>";

// Usa innerHTML cuando necesites insertar o modificar la estructura HTML de un elemento.

// Usa textContent cuando solo necesites obtener o establecer contenido de texto plano. Es la opción preferida por su rendimiento y seguridad.

// Usa innerText cuando necesites el texto tal como lo ve un usuario, excluyendo cualquier contenido oculto.

