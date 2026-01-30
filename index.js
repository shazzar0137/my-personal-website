// ===== CURSOR SPOTLIGHT EFFECT =====
const spotlight = document.getElementById('spotlight');

if (spotlight) {
    document.addEventListener('mousemove', (e) => {
        spotlight.style.left = e.clientX + 'px';
        spotlight.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseleave', () => {
        spotlight.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        spotlight.style.opacity = '1';
    });
}

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
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

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.bento-item, .skill-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== FORM SUBMISSION FEEDBACK =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const submitBtn = this.querySelector('.form-submit');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Re-enable after submission (Formspree handles redirect)
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }, 3000);
    });
}

// ===== TYPING EFFECT FOR HERO (Optional Enhancement) =====
const roles = ['Software Engineer', 'Data Analyst', 'Freelancer'];
let roleIndex = 0;

// Add hover effects to role tags
document.querySelectorAll('.role-tag').forEach((tag, index) => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-5px) scale(1.05)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== PARALLAX EFFECT ON HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

console.log('🚀 Portfolio loaded successfully!');
