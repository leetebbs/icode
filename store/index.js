// Add JavaScript code here

const viewBtn = document.getElementById("viewBtn");

// Get the additional store element by its class
const moreStore = document.querySelector(".more");

// Add a click event listener to the "View" button
viewBtn.addEventListener("click", function () {
    // Toggle the visibility of the additional store element
    moreStore.classList.toggle("more");
});