let  saludo= "Hola mundo"; //Respete el scope de su declaracion
var saludo2 = "Hola mundo con var"; //No respeta el scope de su declaracion 
console.log(window)
console.log(saludo)
console.log(saludo2)
const PI = 3.1416; //Constante, no puede cambiar su valor
console.log(PI)

var musica = "Rock"
console.log(musica)
{
    musica = "Pop"
   
}
console.log(musica)

//Objetos ->coleccion de elementos y valores

let objeto1 = {
    nombre:"Juan",
    edad: 30
}

console.log(objeto1.nombre)
console.log(objeto1.edad)

//Array -> coleccion de elementos

let array1 = [1,2,3,4,5]

console.log(array1[0])
console.log(array1[3])










