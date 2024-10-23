// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formMessage.textContent = 'Pesan Anda berhasil dikirim!';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        this.reset();
    } else {
        formMessage.textContent = 'Mohon lengkapi semua bidang!';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    }
});