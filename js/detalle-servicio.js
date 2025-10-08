// ============================================
// Cargar Detalle del Servicio
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadServiceDetail();
    loadRelatedServices();
});

async function loadServiceDetail() {
    const container = document.getElementById('serviceDetail');
    
    if (!container) return;
    
    // Obtener ID del servicio desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = parseInt(urlParams.get('id'));
    
    if (!serviceId) {
        container.innerHTML = '<p>Servicio no encontrado.</p>';
        return;
    }
    
    try {
        const response = await fetch('data/servicios.json');
        const data = await response.json();
        const servicio = data.servicios.find(s => s.id === serviceId);
        
        if (!servicio) {
            container.innerHTML = '<p>Servicio no encontrado.</p>';
            return;
        }
        
        // Actualizar título de la página
        document.title = `${servicio.nombre} - Salosoft`;
        
        // Renderizar detalle
        container.innerHTML = `
            <div class="detail-image">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
            </div>
            <div class="detail-info">
                <h1>${servicio.nombre}</h1>
                ${servicio.promocion ? '<span class="service-badge">¡En Promoción!</span>' : ''}
                <p class="price">$${formatPrice(servicio.precio)} COP</p>
                
                <div class="detail-meta">
                    <div class="meta-item">
                        <i class="fas fa-box"></i>
                        <span><strong>${servicio.cantidad}</strong> disponibles</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas ${servicio.cantidad > 0 ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                        <span>${servicio.cantidad > 0 ? 'En Stock' : 'Agotado'}</span>
                    </div>
                </div>
                
                <div class="detail-description">
                    <h3>Descripción del Servicio</h3>
                    <p>${servicio.descripcion}</p>
                </div>
                
                <div class="detail-features">
                    <h3>Características</h3>
                    <ul>
                        <li><i class="fas fa-check"></i> Servicio profesional certificado</li>
                        <li><i class="fas fa-check"></i> Soporte técnico incluido</li>
                        <li><i class="fas fa-check"></i> Garantía de calidad</li>
                        <li><i class="fas fa-check"></i> Seguimiento personalizado</li>
                    </ul>
                </div>
                
                <a href="#" class="btn-primary" onclick="contactService(event, '${servicio.nombre}')">
                    <i class="fas fa-envelope"></i> Solicitar Cotización
                </a>
            </div>
        `;
    } catch (error) {
        console.error('Error al cargar detalle del servicio:', error);
        container.innerHTML = '<p>Error al cargar el detalle del servicio.</p>';
    }
}

async function loadRelatedServices() {
    const container = document.getElementById('relatedServices');
    
    if (!container) return;
    
    // Obtener ID del servicio actual
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = parseInt(urlParams.get('id'));
    
    try {
        const response = await fetch('data/servicios.json');
        const data = await response.json();
        
        // Obtener 3 servicios relacionados (excluyendo el actual)
        const relatedServices = data.servicios
            .filter(s => s.id !== serviceId)
            .slice(0, 3);
        
        container.innerHTML = relatedServices.map(servicio => `
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
        console.error('Error al cargar servicios relacionados:', error);
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('es-CO').format(price);
}

function contactService(event, serviceName) {
    event.preventDefault();
    alert(`Para solicitar una cotización de "${serviceName}", por favor contáctanos:\n\nEmail: santiiagoobregon2009@gmail.com\nTeléfono: +57 3108760636`);
}

