// Показ виджета с контактной информацией
document.addEventListener('DOMContentLoaded', () => {
    const widgetButton = document.getElementById('widget-button');
    const widget = document.getElementById('contact-widget');

    widgetButton.addEventListener('click', () => {
        widget.classList.toggle('visible');
    });
});


let slideIndex = 0;

function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-item');
    let carouselContainer = document.querySelector('.carousel-container');
    
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    // Перемещаем карусель, чтобы показать текущий слайд
    carouselContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Инициализация слайдера
showSlides(slideIndex);



