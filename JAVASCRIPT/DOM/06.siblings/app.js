const firstLi = document.querySelector('li');
const fourthLi = document.querySelector(".fourth")

console.log(firstLi.parentElement);

console.log(firstLi.parentElement.parentElement);

console.log(firstLi.parentElement.parentElement.parentElement);

const ul = document.querySelector("ul");

console.log(ul.children)
console.log(ul.children[0])
console.log(ul.children[1])
console.log(ul.children[2])

console.log(ul.children[2].innerHTML)

console.log(firstLi.nextElementSibling)
console.log(firstLi.nextElementSibling.textContent)



console.log(fourthLi)
console.log(fourthLi.previousElementSibling)

