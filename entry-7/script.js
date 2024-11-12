let currentSlide = 0;
const slides = document.querySelectorAll('.image-carousel img');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -index * 100; 
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    showSlide(currentSlide);
}

function prevSlide() {
    current
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive"; 
    } else {
        x.className = "topnav"; 
    }
}
