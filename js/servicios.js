// ============================================
// Cargar Todos los Servicios
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadAllServices();
});

async function loadAllServices() {
    const container = document.getElementById('servicesGrid');
    
    if (!container) return;
    
    try {
        const response = await fetch('data/servicios.json');
        const data = await response.json();
        const servicios = data.servicios;
        
        if (servicios.length === 0) {
            container.innerHTML = '<p>No hay servicios disponibles en este momento.</p>';
            return;
        }
        
        container.innerHTML = servicios.map(servicio => `
            <div class="service-card" onclick="window.location.href='detalle-servicio.html?id=${servicio.id}'">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
                <div class="service-card-content">
                    <h3>${servicio.nombre}</h3>
                    <p class="price">$${formatPrice(servicio.precio)} COP</p>
                    <div class="meta-item">
                        <i class="fas fa-box"></i>
                        <span>${servicio.cantidad} disponibles</span>
                    </div>
                    ${servicio.promocion ? '<span class="service-badge">¡En Promoción!</span>' : ''}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error al cargar servicios:', error);
        container.innerHTML = '<p>Error al cargar los servicios. Por favor, intenta nuevamente.</p>';
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('es-CO').format(price);
}

