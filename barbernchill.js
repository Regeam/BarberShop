
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // When the scroll is more than 50px
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});



let currentSlide = 0; // Track the current slide
const totalSlides = 2; // Total number of slides (6 reviews / 3 reviews per slide)

function moveSlide(direction) {
    currentSlide += direction;
    
    // Loop back to the start/end
    if (currentSlide < 0) {
        currentSlide = totalSlides;
    } else if (currentSlide > totalSlides) {
        currentSlide = 0;
    }
    
    // Move the track
    const track = document.querySelector('.reviews-track');
    track.style.transform = `translateX(-${currentSlide * (100 / (totalSlides + 1))}%)`;
}

