
//Elementos del documento

console.log(window)

console.log(document);
console.dir(document);

console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.documentURI);

console.log(document.characterSet);
console.log(document.links);

console.log(document.scripts)

setTimeout(()=>{
    console.log(document.getSelection().toString());
},2000)


document.write("<h2>Hola mundo desde el DOM</h2>")
