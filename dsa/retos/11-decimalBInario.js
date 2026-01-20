
function decimalToBinary(decimal){

    let binario ="";
    let num= decimal;

    while(num>0){

        binario = (num % 2) + binario;

        num = Math.floor(num / 2);

    }

    return binario || "0";

}

console.log(decimalToBinary(42))
