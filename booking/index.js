var button = document.getElementById("btn");
var button2 = document.getElementById("btn2");

var isColored = false;
var isColored2 = false;

button.addEventListener("click", function() {
  if (isColored) {
    button.classList.remove("change-color");
    button.textContent = "Book now";
  } else {
    button.classList.add("change-color");
    button.textContent = "Booked";
  }
  isColored = !isColored;
});

button2.addEventListener("click", function() {
  if (isColored2) {
    button2.classList.remove("change-color");
    button2.textContent = "Book now";
  } else {
    button2.classList.add("change-color");
    button2.textContent = "Booked";
  }
  isColored2 = !isColored2;
});


