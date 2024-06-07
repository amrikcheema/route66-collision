document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.classList.remove('active');
            if (idx === index) {
                testimonial.classList.add('active');
            }
        });
    }

    function showNextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Initialize the slider
    showTestimonialApologies for the incomplete message. Let's complete the JavaScript so it properly cycles through the testimonials and ensures that only one is visible at a time:

### Complete JavaScript (`script.js`)
Ensure the script correctly cycles through the testimonials:
```js
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.classList.remove('active');
            if (idx === index) {
                testimonial.classList.add('active');
            }
        });
    }

    function showNextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Initialize the slider
    showTestimonial(currentIndex);
    setInterval(showNextTestimonial, 5000);
});
