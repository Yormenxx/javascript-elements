//Las promesas representan un valor que puede estar disponible ahora, en el futuro o nunca.



// new Promise((resolve,reject)=>{
//     if(resolve){
//         resolve("Resuelto")
//     }else{
//         reject("Error algo ocurrió")
//     }
// })

// const promesa2 =new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("Resuelta");
//         rej("Hubo un error")
//     },1000)
// });

// promesa2
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })

// function addToArray(value,array){
//     const promise = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             array.push(value);
//             res(array)
//         },2000)
//     })

//     if(!array){
//         rej(new Error("No se proporciono un array"));
//     }

//     return promise;

// }


// const array = [1,2,3,4,5];

// addToArray(6,array).then(()=>{
//     console.log(array);
// }).catch((error)=>{
//     console.log(error);
// })


const multiply = (num1,num2) =>{
    return new Promise((res,rej)=>{
        if(typeof num1 !== "number" || typeof num2 !== "number"){
            rej("Ambos valores deben ser números");
        }else{
            setTimeout(()=>{
                 res({
                    num1,
                    num2,
                    product:num1*num2
                 })   
            },1000)
        }


    })
}


multiply(1,2)
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})











