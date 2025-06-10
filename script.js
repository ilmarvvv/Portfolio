

const slider = document.querySelector('.cert-slider');
const slides = document.querySelectorAll('.cert-slider img');
const prevButton = document.querySelector('.cert-prev');
const nextButton = document.querySelector('.cert-next');

let currentIndex = 0;

function updateSlider() {
    const slideWidth = document.querySelector('.cert-slider-wrapper').clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

// Initial update
window.addEventListener('load', updateSlider);
window.addEventListener('resize', updateSlider);