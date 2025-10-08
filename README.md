# 🚀 Salosoft - Plataforma de Servicios Tecnológicos

Aplicación web completa para la venta de servicios tecnológicos desarrollada con HTML5, CSS3 y JavaScript vanilla.

## 📋 Descripción del Proyecto

Salosoft es una empresa de servicios tecnológicos que necesita ampliar su cobertura de ventas mediante una aplicación web moderna que permita:

- Mostrar y gestionar servicios tecnológicos
- Panel de administración para gestión de servicios (CRUD)
- Sistema de autenticación para administradores
- Diseño responsivo y moderno

## 🌟 Características Principales

### Para Usuarios
- ✅ **Página Principal (Home)**: Slider dinámico, información de la empresa, servicios destacados
- ✅ **Catálogo de Servicios**: Listado de 10 servicios con imagen, nombre y precio
- ✅ **Detalle de Servicio**: Vista completa con descripción, cantidad, precio y estado de promoción
- ✅ **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y escritorio
- ✅ **Navegación Intuitiva**: Menú de navegación con enlaces a todas las secciones

### Para Administradores
- ✅ **Sistema de Login**: Autenticación segura para acceso al panel
- ✅ **Dashboard**: Estadísticas en tiempo real de servicios
- ✅ **CRUD de Servicios**: Crear, leer, actualizar y eliminar servicios
- ✅ **Gestión de Promociones**: Activar/desactivar promociones por servicio
- ✅ **Gestión de Inventario**: Control de cantidades disponibles

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y moderna
- **CSS3**: Estilos avanzados con Flexbox y Grid
- **JavaScript (ES6+)**: Funcionalidad dinámica y gestión de datos
- **JSON**: Base de datos plana para usuarios y servicios
- **Font Awesome**: Iconografía profesional
- **LocalStorage**: Persistencia de datos en el navegador

## 📁 Estructura del Proyecto

```
salosoft/
│
├── index.html                 # Página principal
├── servicios.html            # Listado de servicios
├── detalle-servicio.html     # Detalle individual de servicio
├── login.html                # Login de administrador
├── admin.html                # Panel de administración
│
├── css/
│   └── styles.css            # Estilos completos de la aplicación
│
├── js/
│   ├── main.js               # Funcionalidad general (slider, navbar)
│   ├── servicios.js          # Listado de servicios
│   ├── detalle-servicio.js   # Detalle de servicio
│   ├── login.js              # Autenticación
│   └── admin.js              # Panel administrativo y CRUD
│
├── data/
│   ├── servicios.json        # Base de datos de servicios
│   └── usuarios.json         # Base de datos de usuarios
│
├── images/                   # Imágenes (placeholders de Unsplash)
│
├── README.md                 # Este archivo
└── MANUAL.md                 # Manual completo de usuario
```

## 🚀 Instalación y Uso

### Opción 1: Uso Local Simple

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL-del-repositorio]
   cd salosoft
   ```

2. **Abrir con un servidor local**
   
   Debido a restricciones de CORS al cargar archivos JSON, necesitas un servidor web:

   **Con Python 3:**
   ```bash
   python -m http.server 8000
   ```

   **Con Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```

   **Con PHP:**
   ```bash
   php -S localhost:8000
   ```

   **Con Visual Studio Code:**
   - Instalar extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

3. **Abrir en el navegador**
   ```
   http://localhost:8000
   ```

### Opción 2: Desplegar en Internet

#### GitHub Pages
1. Crear repositorio en GitHub
2. Subir los archivos
3. Ir a Settings → Pages
4. Seleccionar la rama main
5. La aplicación estará disponible en: `https://[usuario].github.io/[repositorio]`

#### Netlify
1. Arrastrar la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. La aplicación se desplegará automáticamente

#### Vercel
```bash
npm i -g vercel
vercel
```

## 🔐 Credenciales de Acceso

**Panel de Administración:**
- Usuario: `admin`
- Contraseña: `admin123`

## 📖 Manual de Usuario

Para información detallada sobre cómo usar todas las funcionalidades, consulta el archivo [MANUAL.md](MANUAL.md).

## 🎨 Características de Diseño

- **Paleta de colores moderna**: Azules profesionales con acentos naranjas
- **Tipografía legible**: Segoe UI / System fonts
- **Animaciones suaves**: Transiciones en hover y cambios de estado
- **Iconografía profesional**: Font Awesome 6.4
- **Imágenes de calidad**: Unsplash para imágenes de servicios
- **Sombras y profundidad**: Material Design principles

## 🔄 Funcionalidades Implementadas

### 1. Sistema de Navegación
- Menú responsive con hamburger en móviles
- Enlaces internos con smooth scroll
- Breadcrumbs y navegación contextual

### 2. Slider de Imágenes
- Cambio automático cada 5 segundos
- Controles de navegación (anterior/siguiente)
- Indicadores de posición (dots)
- Contenido superpuesto con llamados a la acción

### 3. Gestión de Servicios
- Listado completo con grid responsivo
- Filtrado por disponibilidad
- Indicadores de promoción
- Vista de detalle completa

### 4. Panel de Administración
- Dashboard con estadísticas en tiempo real
- Tabla de servicios con acciones rápidas
- Formulario modal para crear/editar
- Confirmación de eliminación
- Alertas de éxito/error

### 5. Base de Datos
- JSON para usuarios y servicios
- LocalStorage para persistencia
- Sincronización automática

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🐛 Solución de Problemas

### Los servicios no se cargan
- Asegúrate de estar usando un servidor web (no abrir el HTML directamente)
- Verifica que exista el archivo `data/servicios.json`
- Revisa la consola del navegador para errores

### Las imágenes no aparecen
- Las imágenes usan URLs de Unsplash que requieren conexión a internet
- Para imágenes locales, modifica las URLs en `data/servicios.json`

### El login no funciona
- Verifica las credenciales (admin/admin123)
- Limpia el localStorage si hay problemas: `localStorage.clear()`

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #f59e0b;
}
```

### Agregar Servicios
Edita `data/servicios.json` siguiendo la estructura existente.

### Modificar Usuarios
Edita `data/usuarios.json` para agregar más administradores.

## 📊 Base de Datos

### Estructura de Servicios
```json
{
  "id": 1,
  "nombre": "Nombre del Servicio",
  "precio": 5000000,
  "cantidad": 15,
  "imagen": "URL de la imagen",
  "descripcion": "Descripción completa del servicio",
  "promocion": true
}
```

### Estructura de Usuarios
```json
{
  "id": 1,
  "username": "admin",
  "password": "admin123",
  "nombre": "Administrador",
  "email": "admin@salosoft.com",
  "rol": "admin"
}
```

## 👨‍💻 Desarrollo

### Roadmap Futuro
- [ ] Backend con Node.js/Express
- [ ] Base de datos PostgreSQL/MongoDB
- [ ] Sistema de roles (admin, editor, viewer)
- [ ] Carrito de compras
- [ ] Pasarela de pagos
- [ ] Dashboard con gráficas
- [ ] Búsqueda y filtros avanzados
- [ ] Sistema de notificaciones

## 📄 Licencia

Este proyecto fue desarrollado como entrega académica para el Politécnico Grancolombiano.

## 👥 Autor

Desarrollado para el curso de Desarrollo Web - Politécnico Grancolombiano

## 📞 Soporte

Para preguntas o soporte:
- Email: santiiagoobregon2009@gmail.com
- Teléfono: +57 3108760636

---

**Fecha de Última Actualización**: Octubre 2024

**Versión**: 1.0.0

