
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const dotsContainer = document.getElementById('carousel-dots');

    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            setActiveSlide(i);
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.carousel-dot');

    document.getElementById('next').addEventListener('click', () => {
        setActiveSlide((currentSlide + 1) % totalSlides);
    });

    document.getElementById('prev').addEventListener('click', () => {
        setActiveSlide((currentSlide - 1 + totalSlides) % totalSlides);
    });

    function setActiveSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    
    setActiveSlide(0);
});