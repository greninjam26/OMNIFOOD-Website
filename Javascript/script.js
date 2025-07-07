// console.log("Hello World!");

// const h1 = document.querySelector(".heading-primary");

// console.log(h1);

// h1.addEventListener("click", function () {
//     h1.textContent = "Greninja";
//     h1.style.backgroundColor = "red";
// });

const yearEL = document.querySelector(".year");
const curYear = new Date().getFullYear();
yearEL.textContent = curYear;