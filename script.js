// Get references to the left and right arrow elements
var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");

// Get reference to the hero section and initialize a counter
var heroSection = document.querySelector(".hero");
var cnt = 0;

// Function to change the background image
function changeBackground() {
    var images = [
        "/assets/hero1.jpg",
        "/assets/hero2.jpg",
        "/assets/hero3.jpg",
        "/assets/hero4.jpg",
        "/assets/hero5.jpg"
    ];

    // Set the background image to the next image in the array
    heroSection.style.backgroundImage = "url('" + images[cnt] + "')";

    // Increment the counter and loop back to the first image if necessary
    cnt = (cnt + 1) % images.length;
}

// Add click event listeners to the left and right arrows
leftArrow.addEventListener("click", changeBackground);
rightArrow.addEventListener("click", changeBackground);
