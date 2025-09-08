// Las anotaciones en TypeScript se refieren a la sintaxis que se utiliza para añadir tipos de datos al código. A diferencia de JavaScript, que es un lenguaje de tipado dinámico, TypeScript es de tipado estático, lo que significa que puedes (y a menudo debes) especificar el tipo de las variables, parámetros de funciones, y valores de retorno. Esto ayuda a detectar errores antes de que se ejecute el código, facilita la refactorización y mejora la legibilidad.

let nombre : string ="Juan";
let edad : number = 30;
let estudiante : boolean = true;

console.log(nombre);
console.log(edad);
console.log(estudiante);

function saludar (saludo:string):void{
    console.log(saludo)
}

saludar("Hola a todos");

function sumar(a:number, b:number):number{
    return a + b;
}
console.log(sumar(3,4));

let nombres: string[] = ["Ana", "Luis", "Carlos"];

// Un objeto con propiedades tipadas
let persona: { nombre: string, edad: number } = {
  nombre: "María",
  edad: 25
};

const double = (x:number, y:number)=> x*y;
console.log(double(3,4));


function greet(person:string ="john doe"){
    return `Hello, ${person}`;
}

console.log(greet("juan"));

const double2 = (x:number):number=> Math.pow(x,2);
console.log(double2(5));

//void no de vuelve nada, no usa return

function message(message:string):void{
    console.log(message);
}

message("Hello, World!");


//never, indica que una función nunca va a retornar un valor, por ejemplo, si lanza una excepción o entra en un bucle infinito.

function throwError(message:string):never{
    throw new Error(message);
}



    




