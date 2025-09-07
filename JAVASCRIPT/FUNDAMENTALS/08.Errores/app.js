// El bloque try...catch en JavaScript se utiliza para manejar errores de manera controlada. Permite ejecutar un bloque de código (try) y, si ocurre un error, capturarlo y manejarlo en el bloque catch. También puedes usar un bloque finally opcional para ejecutar código que debe ejecutarse independientemente de si hubo un error o no.



try {

    // código...

} catch (err) {

    // manipulación de error

}



// try {
//     console.log("En el Try se agrega el código a evaluar");
//     noExiste; // genera un ReferenceError
//     console.log("Segundo mensaje en el try");
// } catch (error) {
//     console.log("Catch, captura cualquier error surgido o lanzado en el try");
//     console.log(error);
// } finally {
//     console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");
// }



try {
    let numero = "y";

    if (isNaN(numero)) {
        throw new Error("El caractér introducido no es un Número");
    }

    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}



function verificarEdad(edad) {
    // throw new Error se usa para generar el error
    if (edad < 18) {
        throw new Error("Acceso denegado: debe ser mayor de 18 años.");
    }
    return "Acceso concedido.";
}

// El bloque try-catch se usa para manejar el error
try {
    let resultado = verificarEdad(15);
    console.log(resultado);
} catch (error) {
    // Aquí se captura y maneja el error lanzado por la función
    console.error("Hubo un problema:", error.message);
}





















