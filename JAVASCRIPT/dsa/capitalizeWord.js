
const capitalizeWord = (word) => {

    return word.toLowerCase().split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")

}

console.log(capitalizeWord("hola mundo"))
console.log(capitalizeWord("john doe"))








