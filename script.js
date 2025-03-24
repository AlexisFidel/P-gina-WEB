// Mejorar las animaciones iniciales con secuencias más complejas
window.addEventListener("load", () => {
    // Pantalla de carga con animación más suave y avanzada
    const loader = document.querySelector(".loader");
    if (loader) {
        // Agregamos animaciones adicionales para la pantalla de carga
        gsap.to(".loader-line", {
            boxShadow: "0 0 30px #FF69B4, inset 0 0 30px #FF69B4",
            duration: 1,
            repeat: -1,
            yoyo: true
        });
        
        gsap.to(".loader-logo", {
            textShadow: "0 0 20px #FF69B4, 0 0 40px #FF69B4",
            duration: 1.5,
            repeat: -1,
            yoyo: true
        });
        
        // Animación de salida para el loader
        const tl = gsap.timeline();
        tl.to(loader, {
            opacity: 0,
            duration: 0.8,
            delay: 1.5, 
            ease: "power3.out",
            onComplete: () => {
                loader.style.display = "none";
            }
        });
        
        if (document.querySelector("header")) {
            tl.from("header", {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1, 0.8)"
            }, "-=0.2");
        }
        
        if (document.querySelector(".home-content h1")) {
            tl.from(".home-content h1", {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.5");
        }
        
        if (document.querySelector(".typing-text")) {
            tl.from(".typing-text", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "-=0.3");
            
            const typingTextElement = document.querySelector(".typing-text span");
            if (typingTextElement) {
                const roles = ["", "", ""];
                let currentRoleIndex = 0;
                
                function typeText() {
                    const currentRole = roles[currentRoleIndex];
                    let charIndex = 0;
                    
                    function type() {
                        if (charIndex < currentRole.length) {
                            typingTextElement.textContent += currentRole.charAt(charIndex);
                            charIndex++;
                            setTimeout(type, 100); 
                        } else {
                            setTimeout(erase, 2000); 
                        }
                    }
                    
                    function erase() {
                        if (charIndex > 0) {
                            typingTextElement.textContent = currentRole.substring(0, charIndex-1);
                            charIndex--;
                            setTimeout(erase, 50); // Velocidad de borrado
                        } else {
                            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                            setTimeout(typeText, 500); // Esperar antes de escribir el siguiente rol
                        }
                    }
                    
                    type();
                }
                
                typeText();
            }
        }
        
        if (document.querySelector(".home-content p")) {
            tl.from(".home-content p", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "-=0.5");
        }
        
        if (document.querySelector(".home-img img")) {
            tl.from(".home-img img", {
                scale: 0,
                rotation: 12,
                opacity: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.4)"
            }, "-=0.8");
        }
        
        if (document.querySelector(".social-icons a")) {
            tl.from(".social-icons a", {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: "back.out(2)",
                duration: 0.6
            }, "-=0.6");
        }
        
        if (document.querySelector(".btn")) {
            tl.from(".btn", {
                scale: 0,
                opacity: 0,
                ease: "back.out(1.7)",
                duration: 0.6
            }, "-=0.4");
        }
    }
    
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    if (menuToggle && mobileMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            gsap.from('.mobile-nav a', {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.2
            });
        });
        
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
        
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // Header sticky en scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }
    });
});

// Agregar preloader para imágenes
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;
    
    images.forEach(img => {
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                console.log('Todas las imágenes cargadas');
            }
        };
        
        if (img.complete) {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                console.log('Todas las imágenes cargadas desde caché');
            }
        }
    });
});
// Mejorar las animaciones iniciales con secuencias más complejas
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
        const tl = gsap.timeline();
        tl.to(loader, {
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => {
                loader.style.display = "none";
            }
        });
        
        if (document.querySelector("header")) {
            tl.from("header", {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1, 0.8)"
            }, "-=0.2");
        }
        
        if (document.querySelector(".home-content h1")) {
            tl.from(".home-content h1", {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.5");
        }
        
        if (document.querySelector(".typing-text")) {
            tl.from(".typing-text", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "-=0.3");
            
            // Implementar la animación de escritura
            const typingTextElement = document.querySelector(".typing-text span");
            if (typingTextElement) {
                const roles = ["Técnico", "Estudiante", "Autodidacta"];
                let currentRoleIndex = 0;
                
                function typeText() {
                    const currentRole = roles[currentRoleIndex];
                    let charIndex = 0;
                    
                    function type() {
                        if (charIndex < currentRole.length) {
                            typingTextElement.textContent += currentRole.charAt(charIndex);
                            charIndex++;
                            setTimeout(type, 100); // Velocidad de escritura
                        } else {
                            setTimeout(erase, 2000); // Esperar antes de borrar
                        }
                    }
                    
                    function erase() {
                        if (charIndex > 0) {
                            typingTextElement.textContent = currentRole.substring(0, charIndex-1);
                            charIndex--;
                            setTimeout(erase, 50); // Velocidad de borrado
                        } else {
                            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                            setTimeout(typeText, 500); // Esperar antes de escribir el siguiente rol
                        }
                    }
                    
                    type();
                }
                
                typeText(); // Iniciar la animación de escritura
            }
        }
        
        if (document.querySelector(".home-content p")) {
            tl.from(".home-content p", {
                opacity: 0,
                y: 30,
                duration: 0.8
            }, "-=0.5");
        }
        
        if (document.querySelector(".home-img img")) {
            tl.from(".home-img img", {
                scale: 0,
                rotation: 12,
                opacity: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.4)"
            }, "-=0.8");
        }
        
        if (document.querySelector(".social-icons a")) {
            tl.from(".social-icons a", {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: "back.out(2)",
                duration: 0.6
            }, "-=0.6");
        }
        
        if (document.querySelector(".btn")) {
            tl.from(".btn", {
                scale: 0,
                opacity: 0,
                ease: "back.out(1.7)",
                duration: 0.6
            }, "-=0.4");
        }
    }
});

// Mejorar el cursor personalizado
const cursor = document.querySelector(".cursor");
if (cursor) {
    const cursorinner = document.createElement("div");
    cursorinner.className = "cursor-inner";
    document.body.appendChild(cursorinner);

    document.addEventListener("mousemove", (e) => {
        // Movimiento principal del cursor con suavidad
        gsap.to(cursor, {
            left: e.pageX,
            top: e.pageY,
            duration: 0.2,
            ease: "power2.out"
        });
        
        // Movimiento del cursor interno más rápido
        gsap.to(cursorinner, {
            left: e.pageX,
            top: e.pageY,
            duration: 0.1
        });
    });
    
    // Efecto mejorado para hover
    const hoverElements = document.querySelectorAll("a, button, .btn, .social-icons a, .skill-card");
    hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-active");
            cursorinner.classList.add("cursor-inner-active");
            
            gsap.to(cursor, {
                scale: 2,
                backgroundColor: "rgba(255, 105, 180, 0.1)",
                border: "1px solid #FF69B4",
                duration: 0.3
            });
        });
        
        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-active");
            cursorinner.classList.remove("cursor-inner-active");
            
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "transparent",
                border: "2px solid #FF69B4",
                duration: 0.3
            });
        });
    });
}

// Menú móvil
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            gsap.fromTo(
                mobileMenu,
                { opacity: 0, x: "100%" },
                { opacity: 1, x: "0%", duration: 0.5, ease: "power3.out" }
            );
        });
        
        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                gsap.to(mobileMenu, {
                    opacity: 0,
                    x: "100%",
                    duration: 0.5,
                    ease: "power3.in",
                    onComplete: () => {
                        mobileMenu.classList.remove('active');
                    }
                });
            });
        }
        
        if (mobileLinks.length > 0) {
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    gsap.to(mobileMenu, {
                        opacity: 0,
                        x: "100%",
                        duration: 0.5,
                        ease: "power3.in",
                        onComplete: () => {
                            mobileMenu.classList.remove('active');
                        }
                    });
                });
            });
        }
    }
}

// Animaciones de scroll avanzadas
function initScrollAnimations() {
    // Animación para la sección About
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
        ScrollTrigger.create({
            trigger: aboutSection,
            start: "top 70%",
            onEnter: () => {
                if (document.querySelector("#about h2")) {
                    gsap.fromTo(
                        "#about h2", 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                    );
                }
                
                // Animación para las tarjetas about
                const aboutCards = document.querySelectorAll(".about-card");
                if (aboutCards.length > 0) {
                    gsap.fromTo(
                        aboutCards, 
                        { opacity: 0, y: 50, scale: 0.8 }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1, 
                            duration: 0.8, 
                            stagger: 0.2,
                            ease: "back.out(1.7)"
                        }
                    );
                }
            },
            once: true
        });
    }
    
    // Animación para la sección Skills
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
        ScrollTrigger.create({
            trigger: skillsSection,
            start: "top 70%",
            onEnter: () => {
                if (document.querySelector("#skills h2")) {
                    gsap.fromTo(
                        "#skills h2", 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                    );
                }
                
                const skillCards = document.querySelectorAll(".skill-card");
                if (skillCards.length > 0) {
                    gsap.fromTo(
                        skillCards, 
                        { opacity: 0, y: 50, scale: 0.8 }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1, 
                            duration: 0.8, 
                            stagger: 0.2,
                            ease: "back.out(1.7)"
                        }
                    );
                    
                    // Animar las barras de progreso
                    setTimeout(() => {
                        document.querySelectorAll(".skill-progress").forEach(progress => {
                            const progressValue = progress.getAttribute("data-progress");
                            gsap.to(progress, {
                                width: `${progressValue}%`,
                                duration: 1.5,
                                ease: "power3.out"
                            });
                        });
                    }, 500);
                }
            },
            once: true
        });
    }
    
    // Animación para la sección Proyectos
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
        ScrollTrigger.create({
            trigger: projectsSection,
            start: "top 70%",
            onEnter: () => {
                if (document.querySelector("#projects h2")) {
                    gsap.fromTo(
                        "#projects h2", 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                    );
                }
                
                const projectCards = document.querySelectorAll(".project-card");
                if (projectCards.length > 0) {
                    gsap.fromTo(
                        projectCards, 
                        { opacity: 0, y: 50 }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            duration: 0.8, 
                            stagger: 0.3,
                            ease: "back.out(1.7)"
                        }
                    );
                }
            },
            once: true
        });
    }
    
    // Animación para la sección Educación
    const educationSection = document.querySelector("#education");
    if (educationSection) {
        ScrollTrigger.create({
            trigger: educationSection,
            start: "top 70%",
            onEnter: () => {
                if (document.querySelector("#education h2")) {
                    gsap.fromTo(
                        "#education h2", 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                    );
                }
                
                const timelineItems = document.querySelectorAll(".timeline-item");
                if (timelineItems.length > 0) {
                    gsap.fromTo(
                        timelineItems, 
                        { opacity: 0, x: -50 }, 
                        { 
                            opacity: 1, 
                            x: 0, 
                            duration: 0.8, 
                            stagger: 0.3,
                            ease: "power3.out"
                        }
                    );
                }
            },
            once: true
        });
    }
    
    // Paralaje sutil para fondos
    const sections = document.querySelectorAll("section");
    if (sections.length > 0) {
        sections.forEach(section => {
            const bg = section.querySelector('.bg-parallax');
            if (bg) {
                gsap.to(bg, {
                    y: '30%',
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        });
    }
}

// Formulario de contacto interactivo 
const btn = document.getElementById('button');
const form = document.getElementById('form');
const contactContainer = document.querySelector('.contact-container');
const contactConfirmation = document.querySelector('.contact-confirmation');

// Añadir confeti
function createConfetti() {
    const confettiContainer = document.createElement('div');
    contactConfirmation.appendChild(confettiContainer);
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 4}s`;
        confettiContainer.appendChild(confetti);
    }
}

// Validación de formulario con efecto de agitación
function validateForm() {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.closest('.form-group').classList.add('form-shake');
            isValid = false;
            
            input.addEventListener('animationend', () => {
                input.closest('.form-group').classList.remove('form-shake');
            }, { once: true });
        }
    });
    
    return isValid;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validar formulario antes de enviar
    if (!validateForm()) {
        return;
    }
    
    btn.textContent = 'Enviando...';
    
    const serviceID = 'default_service';
    const templateID = 'template_k2y8rrv';
    
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.textContent = 'Enviar Email';
            
            // Mostrar mensaje de confirmación
            contactConfirmation.classList.add('active');
            createConfetti();
            
            // Resetear formulario
            form.reset();
            
            // Ocultar confirmación después de 5 segundos
            setTimeout(() => {
                contactConfirmation.classList.remove('active');
            }, 5000);
        }, (err) => {
            btn.textContent = 'Enviar Email';
            alert('Error al enviar el mensaje: ' + JSON.stringify(err));
        });
});

// Añadir media queries responsive
function applyResponsiveStyles() {
    const contactContainer = document.querySelector('.contact-container');
    const submitBtn = document.getElementById('button');
    
    if (window.innerWidth <= 768) {
        contactContainer.style.padding = '3.5rem 2.5rem';
        contactContainer.style.maxWidth = '90%';
    }
    
    if (window.innerWidth <= 480) {
        contactContainer.style.padding = '2.5rem 2rem';
        submitBtn.style.width = '100%';
    }
}

// Aplicar estilos responsive al cargar y redimensionar
window.addEventListener('load', applyResponsiveStyles);
window.addEventListener('resize', applyResponsiveStyles);
// Initialize GSAP animations and event listeners for the contact form
function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    const contactConfirmation = document.querySelector(".contact-confirmation");
    const submitBtn = document.querySelector(".submit-btn");
    
    if (!contactForm || !contactConfirmation || !submitBtn) return;
    
    // Create animated background particles
    createBackgroundParticles();
    
    // Apply 3D tilt effect for the form container
    applyTiltEffect(contactForm.parentElement);
    
    // Initialize form field animations
    initFormFieldAnimations();
    
    // Handle form submission
    contactForm.addEventListener("submit", handleFormSubmit);
    
    // Button hover animations
    initButtonAnimations(submitBtn);
}

// Create floating background particles
function createBackgroundParticles() {
    const contactSection = document.querySelector(".contact");
    if (!contactSection) return;
    
    const particlesContainer = document.querySelector(".particles-container");
    if (!particlesContainer) return;
    
    // Create particles
    for (let i = 1; i <= 6; i++) {
        const particle = document.createElement("div");
        particle.className = `particle particle-${i}`;
        
        // Random starting position
        const randomX = Math.random() * 100;
        particle.style.left = `${randomX}%`;
        particle.style.top = "110%";
        
        particlesContainer.appendChild(particle);
        
        // Animate with GSAP for better performance
        gsap.to(particle, {
            top: "-10%",
            x: gsap.utils.random(-30, 30),
            rotation: gsap.utils.random(0, 360),
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5,
            ease: "none",
            repeat: -1,
            onRepeat: () => {
                gsap.set(particle, {
                    left: `${Math.random() * 100}%`,
                    top: "110%"
                });
            }
        });
    }
}

// Apply 3D tilt effect to an element
function applyTiltEffect(element) {
    if (!element) return;
    
    const tiltSettings = {
        max: 5,      // max tilt rotation (degrees)
        perspective: 1000,  // transform perspective, the lower the more extreme the tilt gets
        scale: 1.02, // 2 = 200%, 1.5 = 150%, etc.
        speed: 1000, // Speed of the enter/exit transition
        easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit
    };
    
    element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate rotation based on mouse position
        const rotateX = tiltSettings.max * -((mouseY - centerY) / (rect.height / 2));
        const rotateY = tiltSettings.max * ((mouseX - centerX) / (rect.width / 2));
        
        gsap.to(element, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: tiltSettings.scale,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: tiltSettings.perspective,
            transformStyle: "preserve-3d"
        });
    });
    
    element.addEventListener("mouseleave", () => {
        gsap.to(element, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    });
}

// Initialize animations for form fields
function initFormFieldAnimations() {
    const formInputs = document.querySelectorAll(".form-group input, .form-group textarea");
    if (!formInputs.length) return;
    
    formInputs.forEach((input) => {
        // Check if input already has a value on page load (e.g. after refresh)
        if (input.value.trim() !== "") {
            const label = input.parentNode.querySelector("label");
            if (label) {
                gsap.set(label, {
                    top: "-2.5rem",
                    left: 0,
                    fontSize: "1.3rem",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                    color: "#FF69B4",
                    textShadow: "0 0 10px rgba(255, 105, 180, 0.5)"
                });
            }
            
            const underline = input.parentNode.querySelector(".underline");
            if (underline) {
                gsap.set(underline, { scaleX: 1 });
            }
        }
        
        // Focus event animation
        input.addEventListener("focus", function() {
            const label = this.parentNode.querySelector("label");
            const underline = this.parentNode.querySelector(".underline");
            
            // Animate label
            if (label) {
                gsap.to(label, {
                    top: "-2.5rem",
                    left: 0,
                    fontSize: "1.3rem",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                    color: "#FF69B4",
                    textShadow: "0 0 10px rgba(255, 105, 180, 0.5)",
                    duration: 0.35,
                    ease: "power2.out"
                });
            }
            
            // Animate underline
            if (underline) {
                gsap.to(underline, {
                    scaleX: 1,
                    duration: 0.6,
                    ease: "power2.out"
                });
                
                // Start gradient animation
                gsap.fromTo(underline, 
                    { backgroundPosition: "0% 50%" },
                    { 
                        backgroundPosition: "200% 50%", 
                        duration: 3, 
                        repeat: -1, 
                        ease: "linear" 
                    }
                );
            }
        });
        
        // Blur event animation
        input.addEventListener("blur", function() {
            if (this.value.trim() === "") {
                const label = this.parentNode.querySelector("label");
                const underline = this.parentNode.querySelector(".underline");
                
                // Animate label back to original position
                if (label) {
                    gsap.to(label, {
                        top: "1.4rem",
                        left: "1rem",
                        fontSize: "1.6rem",
                        letterSpacing: "0em",
                        fontWeight: "normal",
                        color: "rgba(255, 255, 255, 0.6)",
                        textShadow: "none",
                        duration: 0.3,
                        ease: "power2.in"
                    });
                }
                
                // Animate underline back
                if (underline) {
                    gsap.to(underline, {
                        scaleX: 0,
                        duration: 0.3,
                        ease: "power2.in",
                        onComplete: () => {
                            gsap.killTweensOf(underline, { backgroundPosition: true });
                        }
                    });
                }
            }
        });
    });
}

// Initialize button hover animations
function initButtonAnimations(button) {
    if (!button) return;
    
    button.addEventListener("mouseenter", function() {
        gsap.to(this, {
            y: -5,
            boxShadow: "0 12px 25px rgba(255, 105, 180, 0.5), inset 0 1px 3px rgba(255, 255, 255, 0.5)",
            duration: 0.4,
            ease: "power2.out"
        });
        
        const icon = this.querySelector("i");
        if (icon) {
            gsap.to(icon, {
                x: 8,
                rotate: 10,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        }
    });
    
    button.addEventListener("mouseleave", function() {
        gsap.to(this, {
            y: 0,
            boxShadow: "0 8px 20px rgba(255, 105, 180, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
            duration: 0.4,
            ease: "power2.out"
        });
        
        const icon = this.querySelector("i");
        if (icon) {
            gsap.to(icon, {
                x: 0,
                rotate: 0,
                duration: 0.3,
                ease: "power1.inOut"
            });
        }
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector(".submit-btn");
    const contactContainer = form.closest(".contact-container");
    const contactConfirmation = contactContainer.querySelector(".contact-confirmation");
    
    // Show loading animation
    submitBtn.classList.add("sending");
    
    // Prepare data for sending
    const templateParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message")
    };
    
    setTimeout(() => {
        // In a real implementation, uncomment and use this or similar API call:
        /*
        emailjs.send(
            emailConfig.serviceID,
            emailConfig.templateID,
            templateParams,
            emailConfig.userID
        ).then(() => {
            showConfirmation();
        }).catch((error) => {
            console.error("Error sending email:", error);
            alert("Lo siento, hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
            submitBtn.classList.remove("sending");
        });
        */
        
        // Simulate successful submission - replace with actual API call
        showConfirmation();
    }, 1500);
    
    // Function to display confirmation message
    function showConfirmation() {
        createConfettiEffect(contactContainer);
        
        const tl = gsap.timeline();
        
        tl.to(form, {
            opacity: 0,
            y: -30,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                // Reset button state
                submitBtn.classList.remove("sending");
                
                // Show confirmation
                contactConfirmation.style.display = "flex";
                
                gsap.fromTo(contactConfirmation, 
                    { 
                        opacity: 0, 
                        y: 30,
                        scale: 0.8
                    },
                    { 
                        opacity: 1, 
                        y: 0,
                        scale: 1,
                        duration: 0.6, 
                        ease: "back.out(1.7)",
                    }
                );
                
                const icon = contactConfirmation.querySelector("i");
                if (icon) {
                    gsap.fromTo(icon,
                        { scale: 0, rotation: -30 },
                        { 
                            scale: 1, 
                            rotation: 0,
                            duration: 0.8, 
                            ease: "elastic.out(1, 0.3)",
                            onComplete: () => {
                                // Add pulse animation
                                gsap.to(icon, {
                                    scale: 1.2,
                                    duration: 1,
                                    repeat: -1,
                                    yoyo: true,
                                    ease: "sine.inOut"
                                });
                            }
                        }
                    );
                }
                
                const textElements = contactConfirmation.querySelectorAll("h3, p");
                gsap.fromTo(textElements,
                    { y: 20, opacity: 0 },
                    { 
                        y: 0, 
                        opacity: 1, 
                        stagger: 0.15,
                        duration: 0.5, 
                        ease: "power2.out" 
                    }
                );
            }
        });
        
        setTimeout(() => {
            form.reset();
            
            tl.to(contactConfirmation, {
                opacity: 0,
                y: 20,
                scale: 0.9,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    contactConfirmation.style.display = "none";
                    
                    const icon = contactConfirmation.querySelector("i");
                    if (icon) {
                        gsap.killTweensOf(icon);
                    }
                    
                    gsap.fromTo(form,
                        { opacity: 0, y: -20 },
                        { 
                            opacity: 1, 
                            y: 0, 
                            duration: 0.5, 
                            ease: "power2.out" 
                        }
                    );
                    
                    document.querySelectorAll(".form-group label").forEach(label => {
                        gsap.to(label, {
                            top: "1.4rem",
                            left: "1rem",
                            fontSize: "1.6rem",
                            letterSpacing: "0em",
                            fontWeight: "normal",
                            color: "rgba(255, 255, 255, 0.6)",
                            textShadow: "none",
                            duration: 0.3
                        });
                    });
                    
                    document.querySelectorAll(".underline").forEach(underline => {
                        gsap.set(underline, { scaleX: 0 });
                        gsap.killTweensOf(underline, { backgroundPosition: true });
                    });
                }
            });
        }, 4000);
    }
}

function createConfettiEffect(container) {
    if (!container) return;
    
    const confettiCount = 50;
    const colors = ["#FF69B4", "#FF1493", "#FFB6C1", "#FFC0CB", "#FFFFFF"];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + "%";
        

        const size = 5 + Math.random() * 8;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        container.appendChild(confetti);
        
        gsap.fromTo(confetti,
            { 
                y: -20,
                x: 0,
                opacity: 1,
                rotation: 0
            },
            { 
                y: container.clientHeight + 100,
                x: (Math.random() - 0.5) * 200,
                rotation: Math.random() * 360,
                opacity: 0,
                duration: 1 + Math.random() * 3,
                ease: "power1.out",
                onComplete: () => {
                    confetti.remove();
                }
            }
        );
    }
}
// Initialize when DOM is loadeddocument.addEventListener("DOMContentLoaded", initContactForm);// Inicializar todas las animaciones
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Inicializar menú móvil
    initMobileMenu();
    
    // Inicializar animaciones de scroll
    initScrollAnimations();
    
    // Inicializar formulario interactivo
    initContactForm();
    
    // Animación para el menú de navegación
    const navLinks = document.querySelectorAll("nav a, .mobile-nav a");
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                const href = this.getAttribute("href");
                if (href.startsWith("#")) {
                    e.preventDefault();
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        gsap.to(window, {
                            scrollTo: {
                                y: targetSection,
                                offsetY: 70
                            },
                            duration: 1,
                            ease: "power3.inOut"
                        });
                    }
                }
            });
        });
    }
    
    // Efecto de "scroll reveal" para todos los encabezados de sección
    document.querySelectorAll("section h2").forEach(heading => {
        ScrollTrigger.create({
            trigger: heading,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(
                    heading,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
                );
            },
            once: true
        });
    });
});