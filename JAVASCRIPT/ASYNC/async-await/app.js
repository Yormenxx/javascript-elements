// Es la forma moderna de crear codigo asincrono



// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promesa cumplida")
//     },1000)
// })


// async function main(){
//     try{
//         const response = await promise;
//         console.log(promise)
//     }catch(error){
//         console.log(error)
//     }
// }

// main();



const multiply = (num1, num2) => {
    return new Promise((res, rej) => {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            rej("Ambos valores deben ser números");
        } else {
            setTimeout(() => {
                res({
                    num1,
                    num2,
                    product: num1 * num2
                })
            }, 1000)
        }


    })
}

async function table() {
    try {
        let response = await multiply(1, 2);
        console.log(`${response.num1} x ${response.num2} = ${response.product}`);

        response = await multiply(6, 2);
        console.log(`${response.num1} x ${response.num2} = ${response.product}`);

        response = await multiply(9, 2);
        console.log(`${response.num1} x ${response.num2} = ${response.product}`);


    } catch (error) {
        console.log(error);
    }
}


table();


