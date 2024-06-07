document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.transform = 'translateX(0)';
    }

    function toggleMenu() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('show');
    }

    setInterval(showNextTestimonial, 5000);

    // Attach the toggleMenu function to the hamburger menu
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
});
