
document.addEventListener("DOMContentLoaded", function() {
    var playButton = document.getElementById("playButton");
    var iframeContainer = document.querySelector(".iframe-container");
    
    // Event listener for the play button
    playButton.addEventListener("click", function() {
        // Hide the play button and show the iframe
        playButton.style.display = "none";
        iframeContainer.style.display = "block";
        
        // Since autoplay is enabled in the iframe, the video will play automatically
    });
});
