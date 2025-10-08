
const BASE_URL = 'https://rickandmortyapi.com/api';

// export const getCharacters = async (page) => {
//   try {
//     const res = await fetch(`${BASE_URL}/character/?page=${page}`, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
//     if (!res.ok) {
//       throw new Error(`Error en la respuesta: ${res.status}`);
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error al obtener personajes:", error);
//     throw error;
//   }
// }


export const getCharacters = async (name, page) => {

  try {
    const url = name ? `${BASE_URL}/character/?name=${encodeURIComponent(name)}` : `${BASE_URL}/character/?page=${page}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if(!res.ok){
      throw new Error("Ocurrio un error en la respuesta: " , res.status);
    }

    const data = await res.json();
    return data;

  }catch(error){
    console.log("Error al obtener personajes por nombre: ", error);
    throw error;
  }



}































