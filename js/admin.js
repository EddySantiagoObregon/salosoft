// ============================================
// Variables Globales
// ============================================
let servicios = [];
let editingServiceId = null;

// ============================================
// Inicialización
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Verificar autenticación
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
        return;
    }

    loadUserInfo();
    loadServices();
    initServiceForm();
});

// ============================================
// Autenticación
// ============================================
function isAuthenticated() {
    return sessionStorage.getItem('authenticated') === 'true';
}

function loadUserInfo() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        document.getElementById('adminUsername').textContent = user.nombre;
    }
}

function logout() {
    if (confirm('¿Está seguro de cerrar sesión?')) {
        sessionStorage.clear();
        window.location.href = 'login.html';
    }
}

// ============================================
// Navegación entre Secciones
// ============================================
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remover active de todos los menús
    document.querySelectorAll('.admin-menu li').forEach(li => {
        li.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // Activar el menú correspondiente
    event.target.closest('li').classList.add('active');
}

// ============================================
// Cargar Servicios
// ============================================
async function loadServices() {
    try {
        const response = await fetch('data/servicios.json');
        const data = await response.json();
        servicios = data.servicios;
        
        renderServicesTable();
        updateDashboardStats();
    } catch (error) {
        console.error('Error al cargar servicios:', error);
        showServiceAlert('error', 'Error al cargar los servicios.');
    }
}

function renderServicesTable() {
    const tbody = document.getElementById('servicesTableBody');
    
    if (servicios.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;">No hay servicios registrados.</td></tr>';
        return;
    }
    
    tbody.innerHTML = servicios.map(servicio => `
        <tr>
            <td>${servicio.id}</td>
            <td><img src="${servicio.imagen}" alt="${servicio.nombre}"></td>
            <td>${servicio.nombre}</td>
            <td>$${formatPrice(servicio.precio)}</td>
            <td>${servicio.cantidad}</td>
            <td>
                <span class="badge ${servicio.promocion ? 'badge-success' : 'badge-danger'}">
                    ${servicio.promocion ? 'Sí' : 'No'}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon btn-edit" onclick="editService(${servicio.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="confirmDeleteService(${servicio.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ============================================
// Dashboard Stats
// ============================================
function updateDashboardStats() {
    const totalServices = servicios.length;
    const availableServices = servicios.filter(s => s.cantidad > 0).length;
    const promotionServices = servicios.filter(s => s.promocion).length;
    const avgPrice = servicios.length > 0 
        ? servicios.reduce((sum, s) => sum + s.precio, 0) / servicios.length 
        : 0;
    
    document.getElementById('totalServices').textContent = totalServices;
    document.getElementById('availableServices').textContent = availableServices;
    document.getElementById('promotionServices').textContent = promotionServices;
    document.getElementById('avgPrice').textContent = '$' + formatPrice(Math.round(avgPrice));
}

// ============================================
// Modal de Servicio
// ============================================
function openServiceModal(serviceId = null) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('serviceForm');
    
    editingServiceId = serviceId;
    
    if (serviceId) {
        // Modo edición
        const servicio = servicios.find(s => s.id === serviceId);
        modalTitle.textContent = 'Editar Servicio';
        
        document.getElementById('serviceId').value = servicio.id;
        document.getElementById('serviceName').value = servicio.nombre;
        document.getElementById('servicePrice').value = servicio.precio;
        document.getElementById('serviceQuantity').value = servicio.cantidad;
        document.getElementById('serviceImage').value = servicio.imagen;
        document.getElementById('serviceDescription').value = servicio.descripcion;
        document.getElementById('servicePromotion').checked = servicio.promocion;
    } else {
        // Modo crear
        modalTitle.textContent = 'Nuevo Servicio';
        form.reset();
        document.getElementById('serviceId').value = '';
    }
    
    modal.classList.add('show');
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('show');
    editingServiceId = null;
}

// ============================================
// Formulario de Servicio
// ============================================
function initServiceForm() {
    const form = document.getElementById('serviceForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        saveService();
    });
}

async function saveService() {
    const id = document.getElementById('serviceId').value;
    const nombre = document.getElementById('serviceName').value;
    const precio = parseInt(document.getElementById('servicePrice').value);
    const cantidad = parseInt(document.getElementById('serviceQuantity').value);
    const imagen = document.getElementById('serviceImage').value;
    const descripcion = document.getElementById('serviceDescription').value;
    const promocion = document.getElementById('servicePromotion').checked;
    
    const serviceData = {
        id: id ? parseInt(id) : getNextId(),
        nombre,
        precio,
        cantidad,
        imagen,
        descripcion,
        promocion
    };
    
    if (id) {
        // Actualizar servicio existente
        const index = servicios.findIndex(s => s.id === parseInt(id));
        servicios[index] = serviceData;
        showServiceAlert('success', 'Servicio actualizado correctamente.');
    } else {
        // Crear nuevo servicio
        servicios.push(serviceData);
        showServiceAlert('success', 'Servicio creado correctamente.');
    }
    
    // Guardar en JSON (simulado)
    await saveToJSON();
    
    closeServiceModal();
    renderServicesTable();
    updateDashboardStats();
}

function getNextId() {
    return servicios.length > 0 
        ? Math.max(...servicios.map(s => s.id)) + 1 
        : 1;
}

// ============================================
// Editar Servicio
// ============================================
function editService(id) {
    openServiceModal(id);
}

// ============================================
// Eliminar Servicio
// ============================================
function confirmDeleteService(id) {
    const modal = document.getElementById('confirmModal');
    const confirmBtn = document.getElementById('confirmButton');
    const message = document.getElementById('confirmMessage');
    
    const servicio = servicios.find(s => s.id === id);
    message.textContent = `¿Está seguro de eliminar el servicio "${servicio.nombre}"?`;
    
    modal.classList.add('show');
    
    confirmBtn.onclick = async function() {
        await deleteService(id);
        closeConfirmModal();
    };
}

async function deleteService(id) {
    servicios = servicios.filter(s => s.id !== id);
    
    // Guardar en JSON (simulado)
    await saveToJSON();
    
    renderServicesTable();
    updateDashboardStats();
    showServiceAlert('success', 'Servicio eliminado correctamente.');
}

function closeConfirmModal() {
    const modal = document.getElementById('confirmModal');
    modal.classList.remove('show');
}

// ============================================
// Guardar en JSON (Simulado)
// ============================================
async function saveToJSON() {
    // En un entorno real, esto haría una petición POST/PUT al servidor
    // Para esta demo, guardamos en localStorage
    const data = {
        servicios: servicios
    };
    
    localStorage.setItem('servicios', JSON.stringify(data));
    
    // También intentamos actualizar el archivo JSON
    // Nota: En navegador no es posible escribir archivos directamente
    // En producción, esto requeriría un backend
    console.log('Datos guardados:', data);
    
    return new Promise(resolve => setTimeout(resolve, 300));
}

// ============================================
// Cargar desde localStorage si existe
// ============================================
window.addEventListener('load', function() {
    const stored = localStorage.getItem('servicios');
    if (stored) {
        const data = JSON.parse(stored);
        if (data.servicios && data.servicios.length > 0) {
            servicios = data.servicios;
            renderServicesTable();
            updateDashboardStats();
        }
    }
});

// ============================================
// Utilidades
// ============================================
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO').format(price);
}

function showServiceAlert(type, message) {
    const alertBox = document.getElementById('serviceAlert');
    alertBox.className = `alert alert-${type}`;
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
}

// ============================================
// Cerrar modales al hacer clic fuera
// ============================================
window.onclick = function(event) {
    const serviceModal = document.getElementById('serviceModal');
    const confirmModal = document.getElementById('confirmModal');
    
    if (event.target === serviceModal) {
        closeServiceModal();
    }
    if (event.target === confirmModal) {
        closeConfirmModal();
    }
}

