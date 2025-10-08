// ============================================
// Variables Globales
// ============================================
let currentSlide = 0;
let slideInterval;

// ============================================
// Inicialización
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSlider();
    loadFeaturedServices();
    initContactForm();
});

// ============================================
// Navbar Toggle (Mobile)
// ============================================
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Cerrar menu al hacer click en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// ============================================
// Slider Functionality
// ============================================
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    
    if (slides.length > 0) {
        showSlide(0);
        
        // Auto slide cada 5 segundos
        slideInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Resetear todas las slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Manejar límites
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Activar slide actual
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

function changeSlide(direction) {
    // Reiniciar el intervalo
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
    
    showSlide(currentSlide + direction);
}

function currentSlide(index) {
    // Reiniciar el intervalo
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
    
    showSlide(index);
}

// ============================================
// Cargar Servicios Destacados (Home)
// ============================================
async function loadFeaturedServices() {
    const container = document.getElementById('servicesPreview');
    
    if (!container) return;
    
    try {
        const response = await fetch('data/servicios.json');
        const data = await response.json();
        const servicios = data.servicios.slice(0, 6); // Mostrar solo 6 servicios
        
        container.innerHTML = servicios.map(servicio => `
            <div class="service-card" onclick="window.location.href='detalle-servicio.html?id=${servicio.id}'">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
                <div class="service-card-content">
                    <h3>${servicio.nombre}</h3>
                    <p class="price">$${formatPrice(servicio.precio)} COP</p>
                    ${servicio.promocion ? '<span class="service-badge">En Promoción</span>' : ''}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error al cargar servicios:', error);
        container.innerHTML = '<p>Error al cargar los servicios.</p>';
    }
}

// ============================================
// Formatear Precio
// ============================================
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO').format(price);
}

// ============================================
// Formulario de Contacto
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío de formulario
            alert('¡Gracias por contactarnos! Te responderemos pronto.');
            form.reset();
        });
    }

    // Newsletter form
    const newsletters = document.querySelectorAll('.newsletter-form');
    newsletters.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por suscribirte a nuestro newsletter!');
            form.reset();
        });
    });
}

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

