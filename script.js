document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.transform = 'translateX(0)';
    }

    setInterval(showNextTestimonial, 5000);
});