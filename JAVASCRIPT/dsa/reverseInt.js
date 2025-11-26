const reverse = (n)=>{
    const reversedNumber = n.toString().split("").reverse().join("");
    return parseInt(reversedNumber) * Math.sign(n);
}


console.log(reverse(-123))
console.log(reverse(456) )