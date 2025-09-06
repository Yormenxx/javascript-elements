
let saludo = new String("Hola Mundo");
console.log(saludo);

const b = {};
console.log(b);

const a = new Object();
console.log(a);


const persona = {
    nombre: "pedro",
    edad: 30,
    isDeveloper: true,
    pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
    soltero: false,
    saludo: function () {
        console.log("Hola mi nombre es " + this.nombre);
    }

}

//accediendo a las propiedades del objeto

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.isDeveloper)
console.log(persona["nombre"])
console.log(persona["edad"])

persona.saludo();

console.log(Object.keys(persona))
console.log(Object.values(persona))










