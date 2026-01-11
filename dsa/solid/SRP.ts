// Single Responsibility Principle (SRP)
// "Una clase debe tener una única razón para cambiar."

// Mal: Una clase que gestiona el usuario y también envía correos.

// Bien: Separar la lógica de negocio de la lógica de comunicación.



class User {
    constructor(public name: string, public email: string) { }
}

class UserEmail {

    sendWelcomeEmail(user: User) {
        console.log(`Enviando email a ${user.email}`);
    }
}