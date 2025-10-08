# 📖 Manual de Usuario - Salosoft

Manual completo de usuario para la plataforma de servicios tecnológicos Salosoft.

---

## Tabla de Contenidos

1. [Introducción](#1-introducción)
2. [Acceso a la Plataforma](#2-acceso-a-la-plataforma)
3. [Navegación Principal](#3-navegación-principal)
4. [Página de Inicio](#4-página-de-inicio)
5. [Catálogo de Servicios](#5-catálogo-de-servicios)
6. [Detalle de Servicio](#6-detalle-de-servicio)
7. [Login de Administrador](#7-login-de-administrador)
8. [Panel de Administración](#8-panel-de-administración)
9. [Dashboard](#9-dashboard)
10. [Gestión de Servicios - Listar](#10-gestión-de-servicios---listar)
11. [Gestión de Servicios - Crear](#11-gestión-de-servicios---crear)
12. [Gestión de Servicios - Editar](#12-gestión-de-servicios---editar)
13. [Gestión de Servicios - Eliminar](#13-gestión-de-servicios---eliminar)
14. [Formulario de Contacto](#14-formulario-de-contacto)
15. [Newsletter](#15-newsletter)
16. [Navegación Responsive](#16-navegación-responsive)
17. [Cerrar Sesión](#17-cerrar-sesión)
18. [Preguntas Frecuentes](#18-preguntas-frecuentes)
19. [Solución de Problemas](#19-solución-de-problemas)
20. [Glosario de Términos](#20-glosario-de-términos)

---

## 1. Introducción

### ¿Qué es Salosoft?

Salosoft es una plataforma web diseñada para ofrecer servicios tecnológicos de forma profesional y eficiente. La plataforma permite a los usuarios explorar un catálogo de servicios mientras que los administradores pueden gestionar todo el contenido a través de un panel de control intuitivo.

### Objetivos del Sistema

- Facilitar la visualización de servicios tecnológicos
- Permitir la gestión completa de servicios (CRUD)
- Ofrecer una experiencia de usuario moderna y responsiva
- Proporcionar información detallada de cada servicio

### Alcance

El sistema incluye funcionalidades para dos tipos de usuarios:
- **Visitantes**: Pueden navegar, ver servicios y contactar
- **Administradores**: Tienen acceso completo al panel de gestión

---

## 2. Acceso a la Plataforma

### Requisitos del Sistema

**Navegador Web:**
- Google Chrome 90+
- Mozilla Firefox 88+
- Safari 14+
- Microsoft Edge 90+

**Conexión a Internet:**
- Requerida para cargar imágenes externas
- Velocidad mínima recomendada: 2 Mbps

**Resolución de Pantalla:**
- Mínima: 320px (móviles)
- Recomendada: 1366x768 o superior

### URL de Acceso

```
http://localhost:8000/
```
o la URL donde esté desplegada la aplicación.

---

## 3. Navegación Principal

### Barra de Navegación

La barra de navegación superior contiene:

1. **Logo y Nombre**: Salosoft con icono
2. **Menú de Navegación**:
   - Inicio
   - Servicios
   - Nosotros
   - Contacto
   - Administrador (botón de login)

### Características de Navegación

- **Sticky Navigation**: La barra permanece visible al hacer scroll
- **Active State**: El enlace actual se resalta en azul
- **Smooth Scroll**: Desplazamiento suave a secciones internas
- **Responsive**: Se convierte en menú hamburger en dispositivos móviles

### Cómo Navegar

1. Hacer clic en cualquier elemento del menú
2. La página se desplazará automáticamente a la sección
3. El indicador activo mostrará la ubicación actual

---

## 4. Página de Inicio

### 4.1 Slider Principal

**Descripción**: Carrusel de imágenes con información destacada.

**Características**:
- Cambio automático cada 5 segundos
- 3 slides con diferentes mensajes
- Botones de navegación (anterior/siguiente)
- Indicadores de posición (dots)

**Interacción**:
- Click en flechas: Cambiar slide manualmente
- Click en dots: Ir directamente a un slide específico
- Automático: Avanza solo cada 5 segundos

**Contenido de cada Slide**:
1. **Slide 1**: Soluciones Tecnológicas Innovadoras
2. **Slide 2**: Desarrollo de Software a Medida
3. **Slide 3**: Consultoría IT Especializada

### 4.2 Sección "Acerca de Nosotros"

**Contenido**:
- Descripción de la empresa
- Misión y visión
- Estadísticas destacadas:
  - 500+ Clientes Satisfechos
  - 1000+ Proyectos Completados
  - 50+ Premios Ganados

**Cómo Acceder**:
- Scroll down desde el slider
- Click en "Nosotros" en el menú

### 4.3 Servicios Destacados

**Descripción**: Muestra los primeros 6 servicios del catálogo.

**Información por Servicio**:
- Imagen representativa
- Nombre del servicio
- Precio en COP
- Badge de promoción (si aplica)

**Interacción**:
- Click en cualquier tarjeta: Ir al detalle del servicio
- Hover: Efecto de elevación de la tarjeta
- Botón "Ver Todos": Ir al catálogo completo

### 4.4 Sección de Contacto

**Información de Contacto**:
- Dirección física
- Teléfono
- Email
- Horario de atención

**Formulario de Contacto**:
- Campos: Nombre, Email, Asunto, Mensaje
- Validación en tiempo real
- Mensaje de confirmación al enviar

---

## 5. Catálogo de Servicios

### Acceso

**Formas de acceder**:
1. Click en "Servicios" en el menú principal
2. Click en "Ver Todos los Servicios" desde la home
3. URL directa: `/servicios.html`

### Visualización

**Layout**:
- Grid responsivo
- 3 columnas en desktop
- 2 columnas en tablet
- 1 columna en móvil

**Información Mostrada**:
- Imagen del servicio
- Nombre completo
- Precio en pesos colombianos
- Cantidad disponible
- Badge de promoción (si aplica)

### Interacción

1. **Ver Detalle**:
   - Click en cualquier parte de la tarjeta
   - Redirección a página de detalle

2. **Efectos Visuales**:
   - Hover: Elevación de la tarjeta
   - Transición suave
   - Sombra expandida

---

## 6. Detalle de Servicio

### Acceso

- Click en un servicio desde el catálogo
- URL con parámetro ID: `/detalle-servicio.html?id=1`

### Información Completa

**Sección Superior**:
- Imagen grande del servicio
- Nombre completo
- Precio destacado
- Badge de promoción (si aplica)

**Metadata**:
- Cantidad disponible
- Estado de stock (En Stock/Agotado)

**Descripción Detallada**:
- Explicación completa del servicio
- Beneficios y características
- Alcance del servicio

**Características Incluidas**:
- ✓ Servicio profesional certificado
- ✓ Soporte técnico incluido
- ✓ Garantía de calidad
- ✓ Seguimiento personalizado

### Acciones Disponibles

1. **Solicitar Cotización**:
   - Botón principal azul
   - Abre alert con información de contacto
   - Incluye email y teléfono

2. **Volver a Servicios**:
   - Enlace en la parte superior
   - Regresa al catálogo completo

### Servicios Relacionados

**Ubicación**: Parte inferior de la página

**Contenido**:
- 3 servicios similares
- Excluye el servicio actual
- Click para ver detalle de cada uno

---

## 7. Login de Administrador

### Acceso

**Formas de acceder**:
1. Click en "Administrador" en el menú
2. URL directa: `/login.html`

### Pantalla de Login

**Diseño**:
- Fondo gradiente azul
- Formulario centrado
- Logo de Salosoft
- Título "Panel de Administración"

**Campos del Formulario**:
1. **Usuario**:
   - Campo de texto
   - Icono de usuario
   - Requerido

2. **Contraseña**:
   - Campo de contraseña
   - Icono de candado
   - Requerido

### Credenciales de Acceso

```
Usuario: admin
Contraseña: admin123
```

### Proceso de Login

1. Ingresar usuario y contraseña
2. Click en "Iniciar Sesión"
3. Sistema valida credenciales
4. Si es correcto: Redirección al panel admin
5. Si es incorrecto: Mensaje de error

### Mensajes del Sistema

**Éxito**:
- "¡Login exitoso! Redirigiendo..."
- Color verde
- Redirección automática en 1.5 segundos

**Error**:
- "Usuario o contraseña incorrectos"
- Color rojo
- Permanece en pantalla 5 segundos

### Seguridad

- Sesión guardada en sessionStorage
- Verificación en cada página admin
- Redirección automática si ya está autenticado
- Cierre de sesión al cerrar navegador

---

## 8. Panel de Administración

### Acceso

**Requisitos**:
- Estar autenticado como administrador
- Si no está autenticado: Redirección automática a login

**URL**: `/admin.html`

### Estructura del Panel

**Barra Superior**:
- Logo "Salosoft - Admin"
- Nombre del usuario actual
- Botón "Cerrar Sesión"

**Menú Lateral**:
- Dashboard
- Gestión de Servicios
- Ver Sitio Web

**Área Principal**:
- Contenido dinámico según sección seleccionada
- Fondo gris claro
- Cards y tablas

### Navegación Interna

1. Click en cualquier opción del menú lateral
2. La sección se activa visualmente
3. El contenido cambia en el área principal
4. URL no cambia (Single Page Application)

---

## 9. Dashboard

### Acceso

- Primera pantalla al entrar al panel admin
- Click en "Dashboard" en el menú lateral

### Estadísticas en Tiempo Real

**Tarjetas de Estadísticas**:

1. **Total Servicios**:
   - Icono: Engranajes
   - Color: Azul
   - Muestra: Cantidad total de servicios

2. **Servicios Disponibles**:
   - Icono: Check
   - Color: Verde
   - Muestra: Servicios con cantidad > 0

3. **En Promoción**:
   - Icono: Etiqueta
   - Color: Amarillo
   - Muestra: Servicios con promoción activa

4. **Precio Promedio**:
   - Icono: Dólar
   - Color: Azul cielo
   - Muestra: Promedio de precios de todos los servicios

### Actualización

- Las estadísticas se actualizan automáticamente
- Cambios en servicios reflejan instantáneamente
- Cálculos en tiempo real

### Mensaje de Bienvenida

**Contenido**:
- Título de bienvenida
- Instrucciones básicas
- Orientación sobre el uso del panel

---

## 10. Gestión de Servicios - Listar

### Acceso

- Click en "Gestión de Servicios" en el menú lateral

### Vista de Tabla

**Encabezado**:
- Título: "Gestión de Servicios"
- Botón: "+ Nuevo Servicio" (esquina derecha)

**Columnas de la Tabla**:
1. **ID**: Identificador único
2. **Imagen**: Miniatura del servicio
3. **Nombre**: Nombre completo
4. **Precio**: Precio formateado (COP)
5. **Cantidad**: Unidades disponibles
6. **Promoción**: Badge Sí/No
7. **Acciones**: Botones de editar y eliminar

### Características de la Tabla

**Diseño**:
- Fondo blanco
- Bordes suaves
- Hover en filas (fondo gris claro)
- Scroll horizontal en móviles

**Imágenes**:
- Tamaño: 60x40px
- Bordes redondeados
- Object-fit: cover

**Badges de Promoción**:
- **Sí**: Verde con fondo claro
- **No**: Rojo con fondo claro

### Acciones por Servicio

**Botón Editar**:
- Icono: Lápiz
- Color: Azul
- Acción: Abre modal de edición

**Botón Eliminar**:
- Icono: Papelera
- Color: Rojo
- Acción: Abre modal de confirmación

---

## 11. Gestión de Servicios - Crear

### Acceso

1. Ir a "Gestión de Servicios"
2. Click en botón "+ Nuevo Servicio"
3. Se abre modal de formulario

### Modal de Creación

**Título**: "Nuevo Servicio"

**Campos del Formulario**:

1. **Nombre del Servicio** *
   - Tipo: Texto
   - Requerido: Sí
   - Ejemplo: "Desarrollo Web Personalizado"

2. **Precio (COP)** *
   - Tipo: Número
   - Mínimo: 0
   - Paso: 1000
   - Requerido: Sí
   - Ejemplo: 5000000

3. **Cantidad Disponible** *
   - Tipo: Número
   - Mínimo: 0
   - Requerido: Sí
   - Ejemplo: 15

4. **URL de Imagen** *
   - Tipo: Texto (URL)
   - Requerido: Sí
   - Ejemplo: https://images.unsplash.com/...

5. **Descripción** *
   - Tipo: Textarea
   - Filas: 4
   - Requerido: Sí
   - Ejemplo: Descripción completa del servicio...

6. **En Promoción**
   - Tipo: Checkbox
   - Requerido: No
   - Por defecto: No marcado

### Proceso de Creación

1. Llenar todos los campos requeridos (*)
2. Click en botón "Guardar"
3. Validación del formulario
4. Si es válido:
   - Servicio se crea con ID único
   - Se guarda en el sistema
   - Modal se cierra automáticamente
   - Aparece mensaje de éxito
   - Tabla se actualiza
   - Estadísticas se recalculan

### Validaciones

- Todos los campos marcados con * son obligatorios
- Precio debe ser número positivo
- Cantidad debe ser número entero no negativo
- URL de imagen debe ser válida

### Mensajes

**Éxito**:
- "Servicio creado correctamente"
- Color: Verde
- Duración: 5 segundos

**Error**:
- "Por favor complete todos los campos"
- Color: Rojo
- Se muestra si faltan campos

---

## 12. Gestión de Servicios - Editar

### Acceso

1. Ir a tabla de servicios
2. Click en botón de editar (icono lápiz azul)
3. Se abre modal con datos pre-cargados

### Modal de Edición

**Título**: "Editar Servicio"

**Campos del Formulario**:
- Todos los campos del servicio seleccionado
- Datos pre-cargados automáticamente
- ID del servicio (oculto, no editable)

### Proceso de Edición

1. **Cargar Datos**:
   - Sistema busca servicio por ID
   - Llena formulario con datos actuales
   - Modal se abre automáticamente

2. **Modificar Campos**:
   - Cambiar cualquier campo deseado
   - Mantener campos que no se modifican
   - Todos los campos siguen siendo requeridos

3. **Guardar Cambios**:
   - Click en botón "Guardar"
   - Validación del formulario
   - Actualización del servicio
   - Modal se cierra
   - Mensaje de éxito
   - Tabla se actualiza

### Validaciones

- Mismas validaciones que creación
- ID no se puede cambiar
- Al menos un campo debe modificarse

### Mensajes

**Éxito**:
- "Servicio actualizado correctamente"
- Color: Verde
- Duración: 5 segundos

### Cancelar Edición

- Click en botón "Cancelar"
- Click en "X" de cerrar
- Click fuera del modal
- Cambios no se guardan

---

## 13. Gestión de Servicios - Eliminar

### Acceso

1. Ir a tabla de servicios
2. Click en botón de eliminar (icono papelera rojo)
3. Se abre modal de confirmación

### Modal de Confirmación

**Título**: "Confirmar Acción"

**Contenido**:
- Mensaje: "¿Está seguro de eliminar el servicio '[Nombre del Servicio]'?"
- Advertencia implícita: La acción no se puede deshacer

**Botones**:
1. **Cancelar** (Gris): No elimina, cierra modal
2. **Confirmar** (Rojo): Procede con eliminación

### Proceso de Eliminación

1. **Confirmación**:
   - Usuario debe confirmar explícitamente
   - Modal de seguridad previene eliminaciones accidentales

2. **Eliminación**:
   - Click en "Confirmar"
   - Servicio se elimina del sistema
   - Modal se cierra
   - Mensaje de éxito
   - Tabla se actualiza sin el servicio
   - Estadísticas se recalculan

### Advertencias

⚠️ **Importante**:
- La eliminación es inmediata
- No hay papelera de reciclaje
- Los datos no se pueden recuperar
- Se debe tener precaución

### Mensajes

**Éxito**:
- "Servicio eliminado correctamente"
- Color: Verde
- Duración: 5 segundos

### Cancelar Eliminación

- Click en "Cancelar"
- Click en "X"
- Click fuera del modal
- Servicio se mantiene intacto

---

## 14. Formulario de Contacto

### Ubicación

- Página principal (Home)
- Sección "Contáctanos"
- Parte inferior de la página

### Campos del Formulario

1. **Nombre**
   - Tipo: Texto
   - Requerido: Sí
   - Placeholder: "Nombre"

2. **Email**
   - Tipo: Email
   - Requerido: Sí
   - Validación: Formato de email válido
   - Placeholder: "Email"

3. **Asunto**
   - Tipo: Texto
   - Requerido: Sí
   - Placeholder: "Asunto"

4. **Mensaje**
   - Tipo: Textarea
   - Filas: 5
   - Requerido: Sí
   - Placeholder: "Mensaje"

### Proceso de Envío

1. Completar todos los campos
2. Click en "Enviar Mensaje"
3. Validación del formulario
4. Mensaje de confirmación
5. Formulario se limpia automáticamente

### Información de Contacto

Además del formulario, se muestra:
- **Dirección**: Calle 100 #10-20, Bogotá, Colombia
- **Teléfono**: +57 (1) 234-5678
- **Email**: contacto@salosoft.com
- **Horario**: Lunes a Viernes: 8:00 AM - 6:00 PM

---

## 15. Newsletter

### Ubicación

- Footer de todas las páginas
- Sección "Newsletter"

### Suscripción

**Campos**:
- Email (único campo)
- Botón de envío (icono de avión de papel)

**Proceso**:
1. Ingresar email válido
2. Click en botón de envío
3. Mensaje de confirmación
4. Campo se limpia

**Mensaje**:
- "¡Gracias por suscribirte a nuestro newsletter!"

---

## 16. Navegación Responsive

### Dispositivos Móviles

**Menú Hamburger**:
- Aparece en pantallas < 768px
- Icono de 3 líneas horizontales
- Click abre menú vertical

**Comportamiento**:
1. Click en hamburger: Menú se desliza desde arriba
2. Fondo blanco con sombra
3. Enlaces en vertical
4. Click en enlace: Menú se cierra automáticamente

### Adaptaciones por Dispositivo

**Desktop (> 1024px)**:
- Grid de 3 columnas
- Menú horizontal completo
- Sidebar de admin visible

**Tablet (768px - 1024px)**:
- Grid de 2 columnas
- Menú horizontal
- Ajuste de espaciados

**Móvil (< 768px)**:
- Grid de 1 columna
- Menú hamburger
- Stack vertical de secciones
- Tablas con scroll horizontal

---

## 17. Cerrar Sesión

### Proceso

1. **Ubicación**: Esquina superior derecha del panel admin
2. **Botón**: "Cerrar Sesión" con icono
3. **Click**: Abre confirmación
4. **Confirmar**: "¿Está seguro de cerrar sesión?"
5. **Aceptar**:
   - Limpia sessionStorage
   - Elimina token de autenticación
   - Redirecciona a página de login

### Seguridad

- Sesión se limpia completamente
- No se puede acceder al panel sin re-autenticarse
- Datos sensibles se eliminan del navegador

---

## 18. Preguntas Frecuentes

### ¿Puedo registrar una cuenta?

Actualmente el sistema solo permite un administrador predefinido. Para más administradores, contactar al desarrollador.

### ¿Los cambios se guardan permanentemente?

Los cambios se guardan en localStorage del navegador. Para persistencia real, se requiere un backend.

### ¿Puedo usar imágenes locales?

Sí, pero deben estar en la carpeta `images/` y usar rutas relativas como `images/mi-imagen.jpg`.

### ¿Funciona sin internet?

La estructura sí, pero las imágenes de Unsplash no se cargarán. Usar imágenes locales para uso offline.

### ¿Puedo cambiar los colores?

Sí, editando las variables CSS en `css/styles.css`.

---

## 19. Solución de Problemas

### Los servicios no cargan

**Problema**: Página en blanco o servicios vacíos

**Soluciones**:
1. Verificar que se use un servidor web local
2. Revisar consola del navegador (F12)
3. Verificar que existe `data/servicios.json`
4. Limpiar caché del navegador

### No puedo iniciar sesión

**Problema**: Login no funciona

**Soluciones**:
1. Verificar credenciales exactas (admin/admin123)
2. Limpiar localStorage: `localStorage.clear()`
3. Probar en modo incógnito
4. Verificar que `data/usuarios.json` existe

### Imágenes no aparecen

**Problema**: Espacios en blanco donde deberían estar imágenes

**Soluciones**:
1. Verificar conexión a internet (imágenes de Unsplash)
2. Revisar URLs en `data/servicios.json`
3. Usar imágenes locales alternativas
4. Verificar bloqueador de contenido

### El menú no funciona en móvil

**Problema**: No aparece el menú hamburger

**Soluciones**:
1. Verificar ancho de pantalla < 768px
2. Limpiar caché del navegador
3. Revisar consola de errores JavaScript
4. Probar en otro navegador

---

## 20. Glosario de Términos

**CRUD**: Create, Read, Update, Delete - Operaciones básicas de bases de datos

**Dashboard**: Panel de control con estadísticas y resumen

**Modal**: Ventana emergente sobre el contenido principal

**Responsive**: Diseño que se adapta a diferentes tamaños de pantalla

**Badge**: Etiqueta visual que indica un estado (ej: promoción)

**Grid**: Sistema de diseño en cuadrícula

**Slider**: Carrusel de imágenes que rota automáticamente

**Sticky**: Elemento que permanece visible al hacer scroll

**Smooth Scroll**: Desplazamiento suave entre secciones

**SessionStorage**: Almacenamiento temporal del navegador que se borra al cerrar

**LocalStorage**: Almacenamiento persistente del navegador

**JSON**: JavaScript Object Notation - Formato de datos

**Frontend**: Parte visual de la aplicación (lo que ve el usuario)

**Backend**: Parte del servidor (no implementado en esta versión)

---

## Fin del Manual

Para soporte adicional o preguntas:
- Email: contacto@salosoft.com
- Teléfono: +57 (1) 234-5678

**Versión del Manual**: 1.0.0  
**Fecha**: Octubre 2024

