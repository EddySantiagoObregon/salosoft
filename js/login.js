// ============================================
// Login Functionality
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si ya está autenticado
    if (isAuthenticated()) {
        window.location.href = 'admin.html';
        return;
    }

    initLoginForm();
});

function initLoginForm() {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const alertBox = document.getElementById('loginAlert');
        
        try {
            // Cargar usuarios desde JSON
            const response = await fetch('data/usuarios.json');
            const data = await response.json();
            
            // Buscar usuario
            const user = data.usuarios.find(u => 
                u.username === username && u.password === password
            );
            
            if (user) {
                // Guardar sesión
                sessionStorage.setItem('authenticated', 'true');
                sessionStorage.setItem('user', JSON.stringify({
                    id: user.id,
                    username: user.username,
                    nombre: user.nombre,
                    rol: user.rol
                }));
                
                // Mostrar mensaje de éxito
                showAlert(alertBox, 'success', '¡Login exitoso! Redirigiendo...');
                
                // Redireccionar al panel de administración
                setTimeout(() => {
                    window.location.href = 'admin.html';
                }, 1500);
            } else {
                showAlert(alertBox, 'error', 'Usuario o contraseña incorrectos.');
            }
        } catch (error) {
            console.error('Error al autenticar:', error);
            showAlert(alertBox, 'error', 'Error al procesar la solicitud. Intente nuevamente.');
        }
    });
}

function showAlert(element, type, message) {
    element.className = `alert alert-${type}`;
    element.textContent = message;
    element.style.display = 'block';
    
    if (type === 'error') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

function isAuthenticated() {
    return sessionStorage.getItem('authenticated') === 'true';
}

