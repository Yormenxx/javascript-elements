// El método every() comprueba si todos los elementos de un array pasan la prueba implementada por la función proporcionada. Retorna true si la condición se cumple para todos los elementos, y false en cuanto encuentra el primer elemento que no la cumple. Es como una "prueba de unanimidad".


const edades = [22, 25, 27, 30, 35];

const todosMayores18 = edades.every((edad)=>{
    return edad >=18;
})

console.log(todosMayores18)


