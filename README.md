# Portafolio · Sofia Uribe, arquitecta

Sitio web de portafolio (HTML, CSS y JavaScript puros, sin dependencias) con cambio de idioma ES/EN.

## Estructura

```
assets/img/          Imágenes originales (una por clave, ej. mm1.jpg, sch1.jpg)
src/
  index.template.html  Estructura HTML con marcadores para CSS y JS
  css/                 Estilos por sección (base, intro, header, categorías, grilla, proyecto, contacto, skills, sobre mí)
  data/
    projects.js        Proyectos (títulos, textos, rol, carruseles `gals`)
    meta.js            Etiqueta, ubicación, créditos y herramientas por proyecto
    strings.js         Textos de la interfaz (ES/EN)
    translations-en.js Traducciones al inglés de cada proyecto
    images.json        Lista de imágenes y proporciones
  js/
    config.js, i18n.js, helpers.js, core.js   Configuración, idioma, utilidades y estado
    views/             Pantallas: categorías, grilla, proyecto (carrusel), sobre mí, contacto
    menu.js, language.js, events.js           Menú, cambio de idioma y eventos
  build-order.json     Orden en que se unen los archivos
build.py               Genera dist/index.html
```

## Construir

```
python3 build.py
```

Genera `dist/index.html`, un único archivo con todo incrustado (imágenes en base64). Solo requiere Python 3.

> Los archivos de `src/js` y `src/data` no son módulos independientes: se concatenan en ese orden dentro de una sola función (IIFE), por eso comparten variables.

## Tareas comunes

- **Agregar un proyecto:** añadir sus imágenes a `assets/img/` y registrarlas en `src/data/images.json`; luego el proyecto en `src/data/projects.js`, sus datos en `src/data/meta.js` y su traducción en `src/data/translations-en.js`.
- **Descripciones por foto:** en `gals`, usar `caps: {es: [...], en: [...]}`.
- **Cambiar una portada:** campo `cover` del proyecto (portada de la categoría: `CATCOVER` en `src/js/views/categories.js`).
