

//Convirtiendo el objeto en JSON
const usuario = {
  nombre: "Elena",
  edad: 28,
  ciudad: "Madrid",
  esActivo: true,
  intereses: ["fotografía", "viajar", "cocina"],
};

const objectToJson = JSON.stringify(usuario);
console.log(objectToJson)

//Ahora lo hacemos al revés, de JSON a objeto


const jsonString = `{
  "nombre": "Juan",
  "edad": 35,
  "ciudad": "Barcelona"
}`;

const objetoUsuario = JSON.parse(jsonString);


console.log(objetoUsuario);
console.log(objetoUsuario.nombre); 
console.log(objetoUsuario.edad);


