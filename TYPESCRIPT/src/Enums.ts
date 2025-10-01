// Los enum (enumeraciones) en TypeScript te permiten definir un conjunto de constantes con nombre.

//Con los string enums, puedes asignar valores de cadena específicos a cada miembro del enum. Esto es útil cuando los valores tienen un significado específico y no son simplemente números secuenciales.
enum Direccion {
  Arriba = "ARRIBA",
  Abajo = "ABAJO",
  Izquierda = "IZQUIERDA",
  Derecha = "DERECHA"
}

let movimiento: Direccion = Direccion.Arriba;
console.log(movimiento); 


enum EstadoDelJuego {
  // Por defecto, EnCurso = 0, Pausado = 1, Finalizado = 2
  EnCurso,
  Pausado,
  Finalizado
}

let estadoActual: EstadoDelJuego = EstadoDelJuego.EnCurso;
console.log(estadoActual); // Muestra 0

if (estadoActual === EstadoDelJuego.EnCurso) {
  console.log("El juego está en curso.");
}























