// Open/Closed Principle (OCP)
// "Abierto para extensión, pero cerrado para modificación."

// Mal: Usar un switch gigante que debes editar cada vez que agregas un nuevo tipo de descuento.

// Bien: Usar polimorfismo.



interface Discount {
    applyDiscount(amount:number):number;
}

class GoldDiscount implements Discount{
    applyDiscount(amount: number): number {
        return amount * 0.8;
    }
}

class SilverDiscount implements Discount{
    applyDiscount(amount: number): number {
        return amount * 0.9;
    }
}

class DiscountCalculator{
    calculate(amount:number, discount:Discount):number{
        return discount.applyDiscount(amount);
    }
}




