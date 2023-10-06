// Add JavaScript code here
var button = document.getElementById("retry");
var error = document.getElementById("error");
var ok = document.getElementById("ok");
var loader = document.getElementById("loading");

button.addEventListener("click", function () {
    error.style.display = "none";
    loader.style.display = "inline-block"
    setTimeout(function () {
        loader.style.display = "none";
        ok.style.display = "block";
    }, 3000);

});

 
  