# 🚂 Railway Setup - Salosoft

## 📁 Archivos de Configuración Creados

### ✅ Archivos Principales de Railway:

1. **`railway.json`** - Configuración principal de Railway
2. **`nixpacks.toml`** - Configuración de build con Nixpacks
3. **`Procfile`** - Comando de inicio para Railway
4. **`package.json`** - Metadatos del proyecto
5. **`requirements.txt`** - Dependencias (vacío para app estática)
6. **`runtime.txt`** - Versión de Python (3.11.0)

### 📚 Documentación:

7. **`RAILWAY-DEPLOY.md`** - Guía completa de despliegue

---

## 🚀 Pasos Rápidos para Desplegar

### 1. Subir a GitHub
```bash
git add .
git commit -m "Add Railway configuration"
git push origin main
```

### 2. Crear Proyecto en Railway
1. Ir a [railway.app](https://railway.app)
2. Login con GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Seleccionar tu repositorio `salosoft`

### 3. ¡Listo!
Railway detectará automáticamente la configuración y desplegará tu app.

---

## 🔗 URL Final
Tu aplicación estará disponible en:
`https://salosoft-production.up.railway.app`

---

## ⚙️ Configuración Técnica

### Comando de Inicio:
```bash
python -m http.server $PORT
```

### Puerto:
Railway asignará automáticamente el puerto via `$PORT`

### Build:
- Usa Nixpacks
- Detecta automáticamente Python
- No requiere build steps complejos

---

## ✅ Verificación Post-Despliegue

- [ ] URL carga correctamente
- [ ] Slider funciona con tus banners
- [ ] Servicios se muestran (10 servicios)
- [ ] Login admin funciona
- [ ] Panel CRUD funciona
- [ ] Datos de contacto actualizados


