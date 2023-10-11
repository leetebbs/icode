// Add JavaScript code here

const bars = document.querySelector(".fa-bars");
const drop = document.querySelector(".dropMenuContainer")
const outside = document.querySelector(".hero")

bars.addEventListener("click", myFunction);
outside.addEventListener("click", out);

function myFunction() {
    bars.style.display = "none"
    drop.style.display = "block"
}

function out() {
    bars.style.display = "block"
    drop.style.display = "none"
}