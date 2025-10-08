# 📷 Carpeta de Imágenes - Salosoft

Esta carpeta está destinada para almacenar las imágenes locales del proyecto.

## 🎨 Imágenes Actuales

Por defecto, el proyecto utiliza imágenes de **Unsplash** a través de URLs en el archivo `data/servicios.json`. Estas imágenes requieren conexión a internet.

## 🔄 Usar Imágenes Locales

Si deseas usar imágenes locales en lugar de URLs de Unsplash:

### Paso 1: Agregar Imágenes

Coloca tus imágenes en esta carpeta con nombres descriptivos:
```
images/
├── slider1.jpg
├── slider2.jpg
├── slider3.jpg
├── about.jpg
├── servicio-desarrollo-web.jpg
├── servicio-mobile.jpg
├── servicio-consultoria.jpg
└── ...
```

### Paso 2: Actualizar Referencias

**Para el slider** - Editar `index.html`:
```html
<div class="slide active" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/slider1.jpg');">
```

**Para servicios** - Editar `data/servicios.json`:
```json
{
  "id": 1,
  "nombre": "Desarrollo Web Personalizado",
  "imagen": "images/servicio-desarrollo-web.jpg",
  ...
}
```

## 📐 Especificaciones Recomendadas

### Imágenes del Slider
- **Resolución**: 1920x600px o superior
- **Formato**: JPG o WebP
- **Peso**: < 500KB (optimizadas)
- **Orientación**: Horizontal/Landscape

### Imágenes de Servicios
- **Resolución**: 800x500px
- **Formato**: JPG, PNG o WebP
- **Peso**: < 200KB
- **Orientación**: Horizontal (ratio 16:10 o 16:9)

### Imagen "Acerca de Nosotros"
- **Resolución**: 800x800px
- **Formato**: JPG o PNG
- **Peso**: < 300KB
- **Orientación**: Cuadrada o vertical

## 🎯 Fuentes de Imágenes Gratuitas

Si necesitas imágenes libres de derechos:

1. **Unsplash** - https://unsplash.com
   - Alta calidad
   - Sin atribución requerida
   - Temática: Tecnología, oficinas, desarrollo

2. **Pexels** - https://pexels.com
   - Gratuitas para uso comercial
   - Variedad de estilos
   - Sin registro necesario

3. **Pixabay** - https://pixabay.com
   - Gran biblioteca
   - Múltiples categorías
   - Gratis para uso comercial

## 🔍 Palabras Clave para Búsqueda

Para encontrar imágenes adecuadas, usa estos términos:
- `technology`
- `software development`
- `coding`
- `business technology`
- `digital transformation`
- `cloud computing`
- `cybersecurity`
- `data analysis`
- `mobile app`
- `web design`

## 🛠️ Herramientas de Optimización

Para optimizar el peso de las imágenes:

**Online**:
- TinyPNG - https://tinypng.com
- Squoosh - https://squoosh.app
- ImageOptim - https://imageoptim.com/online

**Software**:
- Adobe Photoshop (Save for Web)
- GIMP (Export for Web)
- XnConvert (Batch processing)

## 📝 Convenciones de Nombres

Usa nombres descriptivos en minúsculas con guiones:
```
✅ CORRECTO:
- servicio-desarrollo-web.jpg
- slider-principal-1.jpg
- about-equipo.jpg

❌ INCORRECTO:
- IMG001.jpg
- imagen sin espacios.jpg
- SERVICIO.JPG
```

## 📦 Estructura Sugerida

```
images/
├── slider/
│   ├── slider-1.jpg
│   ├── slider-2.jpg
│   └── slider-3.jpg
├── servicios/
│   ├── desarrollo-web.jpg
│   ├── mobile-apps.jpg
│   ├── consultoria.jpg
│   └── ...
├── general/
│   ├── about.jpg
│   ├── logo.png
│   └── favicon.ico
└── README.md
```

## 🚀 Placeholder Actual

Actualmente el proyecto usa:
- **Unsplash Source** para imágenes dinámicas
- URLs directas en `data/servicios.json`
- Requiere conexión a internet

## 💡 Tip

Para mejor rendimiento, considera usar:
- **WebP** en lugar de JPG (menor tamaño, misma calidad)
- **Lazy loading** para imágenes fuera del viewport
- **Responsive images** con srcset para diferentes resoluciones

