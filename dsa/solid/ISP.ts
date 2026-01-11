// Interface Segregation Principle (ISP)
// "Muchas interfaces específicas son mejores que una interfaz general."

// Mal: Una interfaz SmartDevice que obliga a un reloj a implementar videoCall().


interface Printer{
    print():void;
}


interface Scanner {
    scan():void;
}


class OldPrinter implements Printer{
    print(){console.log("Imprimiendo...")}
}


class MultiFUnctionalPrinter implements Printer, Scanner{
    print(){console.log("Imprimiendo...")}
    scan(){console.log("Escaneando...")}
}