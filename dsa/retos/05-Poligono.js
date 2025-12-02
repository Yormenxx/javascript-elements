/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcularAreaPoligono(poligono){
    let area;
    let tipo = poligono ? poligono.type.toLowerCase() : "null";

    switch(tipo){
        case"triangulo":{
            if(poligono.base && poligono.height){
                area= (poligono.base * poligono.height) / 2;
                console.log(`El área del triángulo es: ${area}`);
                return area;
            }
            return "Propiedades insuficientes para calcular el área del triángulo.";
        }

        case "cuadrado":{
            if(poligono.side){
                area= poligono.side * poligono.side;
                console.log(`El área del cuadrado es: ${area}`);
                return area;
            }
            return "Propiedades insuficientes para calcular el área del cuadrado.";
        }

        case "rectangulo":{
            if(poligono.width && poligono.height){
                area= poligono.width * poligono.height;
                console.log(`El área del rectángulo es: ${area}`);
                return area;
            }

            return "Propiedades insuficientes para calcular el área del rectángulo.";
        }

        default:{
            return "Tipo de polígono no soportado.";
        }
    }
}

const miTriangulo = { type: "Triangulo", base: 10, height: 5 };
const miCuadrado = { type: "cuadrado", side: 7.5 };
const miRectangulo = { type: "RECTANGULO", base: 12, height: 4 };



console.log("--- Cálculos de Área ---");
console.log(calcularAreaPoligono(miTriangulo));
console.log(calcularAreaPoligono(miCuadrado));
console.log(calcularAreaPoligono(miRectangulo));





















