// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(255, 107, 53, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
});

// Add animation on scroll for feature cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .price-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Button click handlers
document.querySelectorAll('.btn-primary, .cta-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('CTA Clicked');
        // Add your navigation or action here
        // Example: window.location.href = '/signup';
    });
});

// Mobile menu toggle (if needed in future)
function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-toggle');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            document.querySelector('.nav-menu').toggleAttribute('hidden');
        });
    }
}

initMobileMenu();

// Add ripple effect to buttons
document.querySelectorAll('.btn, .cta-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

console.log('HBITZ Landing Page Loaded Successfully ✨');