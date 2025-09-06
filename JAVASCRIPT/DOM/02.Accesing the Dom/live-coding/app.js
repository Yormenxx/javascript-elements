// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);
// 2. getElementById
document.getElementById("main");
console.log(document.getElementById("main"));
console.log(document.getElementById("main").innerText);
console.log(document.getElementById("main").innerHTML);
// 3. getElementsByClassName
document.getElementsByClassName("cls");
console.log(document.getElementsByClassName("cls"));
// 4. querySelector
document.querySelector("h1")
console.log(document.querySelector("h1"))
console.log(document.querySelector(".cls"))
console.log(document.querySelector("#main"))
// 5. querySelectorAll 
console.log(document.querySelectorAll(".cls"))

// ---------------------------------------
// Storing data in variables

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.innerText);
console.log(h1.innerHTML);