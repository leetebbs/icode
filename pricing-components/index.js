// Add JavaScript code here
var slider = document.getElementById("mySlider");
var sliderValue = document.getElementById("sliderValue");

sliderValue.innerHTML = slider.value; 

slider.oninput = function () {
    sliderValue.innerHTML = this.value; 
};

var isDragging = false;

slider.addEventListener("mousedown", function () {
    isDragging = true;
});

slider.addEventListener("mouseup", function () {
    isDragging = false;
});

slider.addEventListener("mousemove", function (event) {
    if (isDragging) {
        var mouseX = event.clientX - slider.getBoundingClientRect().left;
        var percentage = (mouseX / slider.offsetWidth) * 100;
        var newValue = Math.round((percentage * (slider.max - slider.min) / 100) + parseInt(slider.min));
        if (slider.value <= 1000) {
            var newValue = 1000;
        } else if (slider.value >= 10000) {
            newValue = 10000;
        }
        slider.value = newValue;
        sliderValue.innerHTML = newValue;
    }
});
