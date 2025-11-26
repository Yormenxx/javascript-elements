
export const factorial = (n) =>{

    let f = 1;
    for(let i = 2; i <=n; i++){
        f *=i;
    }
    return f;

}

console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(7))








