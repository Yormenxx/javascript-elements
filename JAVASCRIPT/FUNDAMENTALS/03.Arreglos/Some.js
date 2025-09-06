// some() 🔎
// El método some() comprueba si al menos uno de los elementos del array pasa la prueba implementada por la función proporcionada. Retorna true en cuanto encuentra el primer elemento que cumple la condición, y false si ninguno de los elementos la cumple. Es como una "prueba de existencia"


const edades = [16, 17, 18, 19, 20];

const hayMayores18 = edades.some((edad)=>{
    return edad >=18;
})

console.log(hayMayores18)




    
