document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between bars and times (close)
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Smooth Scrolling & Active Link Highlighting ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // --- Scroll Reveal Animations (Intersection Observer) ---
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Simple Form Validation ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Get inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const msgInput = document.getElementById('message');
            
            // Get error spans
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const msgError = document.getElementById('msgError');
            
            // Reset errors
            [nameError, emailError, msgError].forEach(el => el.style.display = 'none');
            
            // Validate Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                nameError.style.display = 'block';
                isValid = false;
            }
            
            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            }
            
            // Validate Message
            if (msgInput.value.trim().length < 10) {
                msgError.textContent = 'Message must be at least 10 characters long';
                msgError.style.display = 'block';
                isValid = false;
            }
            
            // If valid, show success
            if (isValid) {
                const successMsg = document.getElementById('formSuccess');
                successMsg.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }
        });
    }

    // --- Simple Music Player Logic (Play/Pause Toggle) ---
    const playBtn = document.querySelector('.play-btn');
    const playIcon = playBtn ? playBtn.querySelector('i') : null;
    let isPlaying = false;
    
    if (playBtn && playIcon) {
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
            } else {
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
            }
        });
    }
});
