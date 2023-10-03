document.addEventListener("DOMContentLoaded", function () {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click", function () {
        div1.style.transition = "opacity 0.5s";
        div1.style.opacity = 0;

        setTimeout(function () {
            div1.style.display = "none";
            div2.style.transition = "opacity 5s";
            div2.style.opacity = 1;
            div2.style.display = "block";
        }, 800); // 500ms (same duration as transition) after div1 starts fading out
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var starIcon = document.getElementById("star-icon");
    var starIcon2 = document.getElementById("star-icon2");
    var starIcon3 = document.getElementById("star-icon3");
    var starIcon4 = document.getElementById("star-icon4");
    var starIcon5 = document.getElementById("star-icon5");

    starIcon.addEventListener("click", function () {
        starIcon.classList.toggle("yellow-star");
    });
    starIcon2.addEventListener("click", function () {
        starIcon2.classList.toggle("yellow-star");
    });
    starIcon3.addEventListener("click", function () {
        starIcon3.classList.toggle("yellow-star");
    });
    starIcon4.addEventListener("click", function () {
        starIcon4.classList.toggle("yellow-star");
    });
    starIcon5.addEventListener("click", function () {
        starIcon5.classList.toggle("yellow-star");
    });
});