// ============================================
// Slider Fix - Versión Simplificada
// ============================================

let currentSlideIndex = 0;
let slideTimer;

// Inicializar slider cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initSliderFix();
});

function initSliderFix() {
    console.log('Inicializando slider fix...');
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) {
        console.log('No se encontraron slides');
        return;
    }
    
    console.log('Slides encontrados:', slides.length);
    
    // Mostrar el primer slide
    showSlideFix(0);
    
    // Configurar auto-rotación cada 5 segundos
    startAutoSlide();
    
    // Configurar botones
    setupSliderButtons();
    
    // Configurar dots
    setupSliderDots();
}

function showSlideFix(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Ocultar todos los slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (dots[i]) {
            dots[i].classList.remove('active');
        }
    });
    
    // Mostrar slide actual
    if (slides[index]) {
        slides[index].classList.add('active');
        currentSlideIndex = index;
        
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        console.log('Mostrando slide:', index);
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    showSlideFix(nextIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlideFix(prevIndex);
}

function startAutoSlide() {
    slideTimer = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopAutoSlide() {
    if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = null;
    }
}

function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

function setupSliderButtons() {
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            restartAutoSlide();
        });
        console.log('Botón prev configurado');
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            restartAutoSlide();
        });
        console.log('Botón next configurado');
    }
}

function setupSliderDots() {
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlideFix(index);
            restartAutoSlide();
        });
    });
    
    console.log('Dots configurados:', dots.length);
}

// Funciones globales para compatibilidad con onclick
window.changeSlide = function(direction) {
    if (direction === 1) {
        nextSlide();
    } else {
        prevSlide();
    }
    restartAutoSlide();
};

window.goToSlide = function(index) {
    showSlideFix(index);
    restartAutoSlide();
};
