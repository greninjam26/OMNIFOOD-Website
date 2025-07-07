// console.log("Hello World!");

// const h1 = document.querySelector(".heading-primary");

// console.log(h1);

// h1.addEventListener("click", function () {
//     h1.textContent = "Greninja";
//     h1.style.backgroundColor = "red";
// });

////////////////////////////////////////////////////////////////////////////
// set current year
const yearEL = document.querySelector(".year");
const curYear = new Date().getFullYear();
yearEL.textContent = curYear;

////////////////////////////////////////////////////////////////////////////
// Smooth scrolling animation
// might not need safari works with CSS now
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to the top
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }
    });
});

////////////////////////////////////////////////////////////////////////////
// make mobile nav work

const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});
