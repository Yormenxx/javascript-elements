
//Un callback es una funcion que se pasa a otra funcion como argumento,
//y luego se invoca dentro de la funcion externa para completar algun tipo de rutina o accion.

// console.log("soy el numero 1");


// function imprimeDos(callback){
//     setTimeout(()=>{
//         console.log("soy el numero 2");
//         callback();
//     },1000);
    
// }

// function imprimeTres(){
//     console.log("soy el numero 3");
// }

// imprimeDos(imprimeTres);


const booksDb = [
  {
    id: 1,
    title: 'Clean Code'
  },
  {
    id: 2,
    title: 'The pragmatic programmer'
  },
  {
    id: 3,
    title: 'Web Development with Node.js'
  }
];

function getBookByid(id,callback){
    const book = booksDb.find(book => book.id ===id);
    if(!book){
        return callback(new Error("El libro no existe"));
    }
    return callback(null,book);
}
getBookByid(1,(error,book)=>{
    if(error){
        return console.log(error.message);
    }
    console.log("Libro obtenido", book.title);
})


