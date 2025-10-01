// En TypeScript, un type alias te permite crear un nuevo nombre para un tipo existente. Piensa en ello como darle un apodo a un tipo de dato, lo que hace tu código más legible, mantenible y evita repeticiones.


// type NombreDelAlias = TipoExistente;


type ID = number;
type Nombre = string;
type Activo = boolean;

let miId: ID = 123;
let miNombre: Nombre = "Alice";
let estaActivo: Activo = true;


type Usuario = {
  id: number;
  nombre: string;
  email?: string; // Propiedad opcional , puede o no estar presente
};

let usuario1: Usuario = {
  id: 1,
  nombre: "Bob",
};

let usuario2: Usuario = {
  id: 2,
  nombre: "Charlie",
  email: "charlie@example.com",
};

console.log(usuario1)

type User={
    name:string;
    age:number;
    readonly location:string; //Cuando se iniciaza no se puede cambiar , eso hace readonly
}

const printUserInfo = (user:User) =>{
    return `Nmame: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
}

const res = printUserInfo({name:"Diana",age:30,location:"NYC"});
console.log(res)

//Interseccion de tipos

// Estas uniones e intersecciones solo se pueden hacer con los Type alias en Typescript, ya que es una de las Diferencias entre tipos con nombre e interfaces en Typescript


// type RegisteredUser = { username: string };
// type Visitor = { visitDate: Date };

// type User2 = RegisteredUser | Visitor;

// let user : User2 = { username: "jdoe" };
// let visitor: User2 = { visitDate: new Date() };

// Pero ojo porque esto tiene un problema. Imagina que creas una función que devuelve el tipo User que hemos creado antes. Typescript en este caso no nos deja acceder a las propiedades de ese objeto porque no sabe si es de tipo RegisteredUser o de tipo Visitor.



type RegisteredUser = { 
  username: string,
  type: "registered"
};
type Visitor = { 
  visitDate: Date,
  type: "visitor"
};

type User3 = RegisteredUser | Visitor;

function greetUser(user: User3): void {
  if (user.type === "registered") {
    console.log("Welcome back, user");
  }
    if (user.type === "visitor") {
    console.log("Hello new visitor");
  }
}

//Se debe colocar un if para que la funcion sepa que tipo de user es y pueda acceder a sus propiedades

greetUser({ username: "jdoe", type: "registered" });
greetUser({ visitDate: new Date(), type: "visitor" });

//Interseccion de tipos se usa el AND y funciona como un Y logico

type Admin = { adminLevel: number };
type Member = { memberSince: Date };

type AdminMember = Admin & Member;

let adminMember: AdminMember = {
  adminLevel: 1,
  memberSince: new Date("2020-01-01"),
};

const items:(string|number)[]=["a",1,"b",2,"c",3]; //Un array que puede tener strings o numeros
console.log(items)

//Tipos literales

// Los tipos literales en TypeScript permiten definir un tipo que solo puede tener un valor específico y constante, en lugar de un conjunto de valores. Piensa en ellos como un subtipo más estricto de los tipos primitivos como string, number o boolean.

//Imagina que tenemos un semaforo, el tipo literal nos permite definir que el color del semaforo solo puede ser "rojo", "amarillo" o "verde".

type trafficLight = "rojo"|"amarillo"|"verde";

function cambiarLuz(color:trafficLight){
    return `El color del semaforo es ${color}`;
}

cambiarLuz('rojo');   
cambiarLuz('amarillo');
cambiarLuz('verde');    

// Los tipos literales mejoran la seguridad de tipos y la legibilidad del código. Al usar un tipo literal, le dices a TypeScript y a otros desarrolladores exactamente qué valores son permitidos para una variable o parámetro de función
















































