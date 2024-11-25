document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-item');
    const slideCount = slides.length;
    let slideIndex = 0;
    let autoSlideInterval;

    const isMobile = window.innerWidth <= 768; // Проверяем, мобильное устройство или нет

    function showSlides(n) {
        if (n >= slideCount) slideIndex = 0;
        if (n < 0) slideIndex = slideCount - 1;

        // Перемещаем карусель влево на ширину экрана
        carouselContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function moveSlide(n) {
        slideIndex += n;
        showSlides(slideIndex);
        if (!isMobile) resetAutoSlide(); // На десктопе сбрасываем автолистание
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    if (isMobile) {
        clearInterval(autoSlideInterval); // Отключаем автолистание на мобильных
    } else {
        startAutoSlide(); // Включаем автолистание на десктопах
    }

    // Навешиваем обработчики на кнопки
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));

    // Запускаем отображение первого слайда
    showSlides(slideIndex);
});
