 const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        let currentIndex = 0;
        const totalSlides = slide.length;

        function showSlide(index) {
            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
            
            const currentSlide = slide[currentIndex];
            const text = currentSlide.querySelector('.slide-text');
            text.style.opacity = 0;
            
            setTimeout(() => {
                text.style.opacity = 1;
            }, 900);
        }

        prev.addEventListener('click', () => showSlide(currentIndex - 1));
        next.addEventListener('click', () => showSlide(currentIndex + 1));

        // Autoplay functionality
        setInterval(() => showSlide(currentIndex + 1), 5000);

        // Initial display
        showSlide(currentIndex);


        // script.js
var swiper = new Swiper('.swiper-container', {
    
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 90,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});





