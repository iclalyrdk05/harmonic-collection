let currentSlide = 0;
const slides = document.querySelectorAll('.image-carousel img');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -index * 100; // Move to the left based on the current slide index
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
    showSlide(currentSlide);
}

function prevSlide() {
    current
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive"; // Add responsive class
    } else {
        x.className = "topnav"; // Remove responsive class
    }
}
