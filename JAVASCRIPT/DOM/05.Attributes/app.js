// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a =  document.querySelector('a');
console.log(a.href);
console.log(a.href = 'https://google.com');


const a2 = document.querySelector('.a-two');
console.log(a2)
console.log(a2.getAttribute("href"));
a2.setAttribute("href", "https://youtube.com");
console.log(a2.getAttribute("href"));

const input = document.querySelector('input');
console.log(input.value="hello");
console.log(input.type="password");



