// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll(".carousel-slide");
//     let currentSlide = 0;

//     function showSlide(index) {
//         const offset = -index * 100;
//         document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
//     }

//     document.querySelector("#prev").addEventListener("click", function() {
//         currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
//         showSlide(currentSlide);
//     });

//     document.querySelector("#next").addEventListener("click", function() {
//         currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
//         showSlide(currentSlide);
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const dotsContainer = document.getElementById('carousel-dots');

    // Create dots
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

    // Initialize the first slide and dot
    setActiveSlide(0);
});