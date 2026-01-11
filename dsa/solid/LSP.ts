
// Liskov Substitution Principle (LSP)
// "Las subclases deben poder sustituir a sus clases base sin romper el programa."

// Mal: Un Pinguino que hereda de Ave pero lanza un error en el método volar().

// Bien: Dividir las interfaces por comportamiento real.


interface Bird {};
interface FlyingBird extends Bird{ fly():void;}
interface SwimmingBird extends Bird{ swim():void;}


class Duck implements FlyingBird, SwimmingBird{
    fly():void { console.log("Vuela")};
    swim(): void {console.log("Nada")}
}

class Penguin implements SwimmingBird{
    swim(){console.log("Nadando")}
}




