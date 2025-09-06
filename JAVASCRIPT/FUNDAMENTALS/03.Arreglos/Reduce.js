
// El método reduce() de JavaScript ejecuta una función reductora sobre cada elemento de un array, de forma que el resultado de la ejecución anterior se pasa al siguiente. Este proceso da como resultado un único valor. Es una herramienta poderosa para transformar un array en un valor singular, como la suma de todos sus elementos, un objeto con ciertas propiedades o incluso una cadena de texto.


const flores = ["rosa", "tulipan", "margarita", "girasol"];


const final =flores.reduce((ac, item)=>{
    console.log({ac,item});
    console.log(item, "tiene: " + item.length + " letras"); 
    return ac+item.length; 
},0)

console.log(final);


const tareas = [
    {id:1, descripcion:"Aprender JavaScript", duracion:120, completada:true, prioridad:"A"},
    {id:2, descripcion:"Preparar café", duracion:20, completada:true, prioridad:"B"},
    {id:3, descripcion:"Pasear al perro", duracion:60, completada:false, prioridad:"C"},
    {id:4, descripcion:"Conocer a mis suegros", duracion:240, completada:false, prioridad:"A"}
]


const final2 = tareas.reduce((obj,tarea)=>{
    console.log({tarea})
    if(!obj[tarea.prioridad]){
        obj[tarea.prioridad] = []
    }
    obj[tarea.prioridad].push(tarea.descripcion)
    return obj
},{})


console.log(final2)