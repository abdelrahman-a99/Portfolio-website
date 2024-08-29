// 1. Copyright Date
let time = document.querySelector(".time")
time.innerHTML = new Date().getFullYear() // 2024

// ===============================================

// 2. Active Navigation State
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    if (window.scrollY === 0) {
        navLinks.forEach(link => link.classList.remove('active'));
        return;
    }

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});

// ===============================================

// 3. Dynamic Testimonials or Quotes
// let testimonials = [
//     "Great service and support!",
//     "Amazing experience, highly recommend!",
//     "Professional and efficient."
// ];
// let testimonialIndex = 0;
// let testimonialElement = document.querySelector('.testimonial');

// function rotateTestimonials() {
//     testimonialElement.innerHTML = testimonials[testimonialIndex];
//     testimonialIndex = (testimonialIndex + 1) % testimonials.length;
// }

// setInterval(rotateTestimonials, 3000);

// ===============================================

// 4. Scroll-to-Top Button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= document.querySelector('#services').offsetTop) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
