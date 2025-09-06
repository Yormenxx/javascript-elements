const names = ['Ana', 'Juan', 'Pedro', 'Maria'];

// El bucle forEach en JavaScript es un método de los arreglos (arrays) que te permite ejecutar una función una vez por cada elemento en ese arreglo. Es una forma muy común y legible de iterar sobre colecciones de datos.

names.forEach(function(name){
    console.log(name);
})

names.forEach((name,index)=>{
    console.log(`Este es el valor ${name} y su indice es ${index}`)
})
