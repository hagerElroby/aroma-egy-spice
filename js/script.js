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
            }, 500);
        }

        prev.addEventListener('click', () => showSlide(currentIndex - 1));
        next.addEventListener('click', () => showSlide(currentIndex + 1));

        // Autoplay functionality
        setInterval(() => showSlide(currentIndex + 1), 5000);

        // Initial display
        showSlide(currentIndex);


        // script.js
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// Toggle active class
function toggleClassActive () {
     const links = document.querySelectorAll('ul li a');
console.log(links)
    // Function to remove active class from all links
    function removeActiveClasses() {
      links.forEach(link => link.classList.remove('active'));
    }

    // Add event listener to each link
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        removeActiveClasses(); // Remove active class from all links
        this.classList.add('active'); // Add active class to the clicked link
      });
    });

    // Ensure the first item has the active class by default
    if (links.length > 0) {
      links[0].classList.add('active');
}
}

toggleClassActive()


// Open side menu
function openMenu() {
    const menuIcon = document.querySelector('.top-bar-right');
    const side = document.getElementById('side'); // Get the first element with the class 'side'
    
    menuIcon.addEventListener('click', function(event) {
        event.preventDefault();
        side.style.right = "0"; // Correct syntax to change display property
    });
    side.addEventListener('click', function(event) {
        event.preventDefault();
        side.style.right = "-300px"; // Correct syntax to change display property
    });
}

openMenu();

