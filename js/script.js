// Typing Animation for Hero
const typingText = document.getElementById('typing-text');
const phrases = ["Honest Crypto Reviews & Insights", "Expert Market Analysis", "Deep DeFi Exploration", "The Best Crypto Wallet Guides"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    if (!typingText) return;

    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Fade-in Scroll Animation
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// Mobile Menu Toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('lucide-menu');
            icon.classList.toggle('lucide-x');
        }
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        // Close others
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer) {
                item.style.display = 'none';
                const otherIcon = item.previousElementSibling.querySelector('.faq-icon');
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
            }
        });

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            if (icon) icon.style.transform = 'rotate(180deg)';
        }
    });
});

// Initialize
window.addEventListener("scroll", reveal);
document.addEventListener('DOMContentLoaded', () => {
    type();
    reveal();
});
