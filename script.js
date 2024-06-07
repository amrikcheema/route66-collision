document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.transform = 'translateX(0)';
    }

    function toggleMenu() {
        const menu = document.querySelector('.menu');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }

    setInterval(showNextTestimonial, 5000);

    // Attach the toggleMenu function to the hamburger menu
    const hamburger = document.querySelector('.menu-icon');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});
