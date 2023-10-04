let dashcounter = 38;
document.getElementById("dashCount").innerHTML = dashcounter;

let dashClickCount = 0;

document.getElementById("dash_btn").addEventListener("click", () => {
    document.getElementById("dash_module").style.display = "block";
    document.getElementById("main").style.display = "none";
});

document.getElementById("dash_vote").addEventListener("click", () => {
    if (dashClickCount === 0) {
        dashClickCount = 1; // Set dashClickCount to 1 when clicked
        dashcounter = dashcounter + 1;
        document.getElementById("dash_vote").innerHTML = "Remove Vote";

    } else {
        dashClickCount = 0; // Set dashClickCount to 0 when clicked again
        dashcounter--;
        document.getElementById("dash_vote").innerHTML = "Vote";
    }

    document.getElementById("dashCount").innerHTML = dashcounter;
    document.getElementById("dash_module").style.display = "none";
    document.getElementById("main").style.display = "block";
})