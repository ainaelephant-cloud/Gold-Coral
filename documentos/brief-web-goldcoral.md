# Brief — Web Gold Coral

**Dominio:** https://goldcoral.vip
**Tipo:** Web corporativa de presentación (one-page con secciones)
**Idiomas:** Español / Inglés (conmutable, por defecto EN)
**Última actualización del brief:** 08/06/2026

---

## 1. Resumen del proyecto

Gold Coral es un servicio integral de **lifestyle, asistencia y concierge de lujo** en
la República Dominicana (con foco en Punta Cana). La web sirve como escaparate de marca:
transmite exclusividad, cercanía y confianza, y canaliza el contacto de clientes potenciales
hacia el correo de la empresa.

**Eslogan / esencia:** *Luxury Dominican Experience* — "Nos ocupamos de todo para que tú solo disfrutes".

---

## 2. Objetivo de la web

- Presentar la marca y su propuesta de valor premium.
- Mostrar el catálogo de servicios (las "Líneas" de Gold Coral).
- Generar contacto cualificado (email) y solicitudes de información.
- Reforzar la percepción de marca de lujo, discreta y personalizada.

> Estado actual: web en construcción / fase inicial ("Estamos preparando la experiencia completa").

---

## 3. Público objetivo

Clientes VIP, familias con agendas exigentes, turistas y residentes premium en Punta Cana /
República Dominicana que buscan servicios personalizados, discretos y de alta calidad.

---

## 4. Estructura de la web

La web es *one-page* con navegación por anclas. Secciones (en orden):

| Sección | ID / ancla | Contenido |
|---|---|---|
| Cabecera / menú | `header` | Logo + navegación + idioma + CTA contacto |
| Inicio (Hero) | `#home` | Titular, intro, CTAs y tarjeta destacada |
| Servicios | `#servicios` | Carrusel con las 5 líneas de servicio |
| Sobre Nosotros | `#about-us` | Texto de marca + globo interactivo (Punta Cana) |
| Contacto | `#contacto` | Texto + botón de email |
| Footer | `footer` | Marca, redes sociales y aviso legal |
| Privacidad | `/privacy` | Política de privacidad (ES/EN) |

---

## 5. Servicios (las "Líneas")

1. **Gold Line (a medida):** servicio premium personalizado — gestiones, viajes, eventos, chófer, asistencia personal.
2. **Family Line (transporte escolar):** recogida y traslado de niños a colegio y actividades, con seguimiento.
3. **Home Line (limpieza, chef):** servicios del hogar — limpieza, cocina privada, organización.
4. **Party Line (eventos):** organización integral de eventos — decoración, catering, entretenimiento, música.
5. **Travel Line (experiencias):** escapadas y actividades, excursiones VIP, transporte y planes a medida.

---

## 6. Identidad visual

- **Estilo:** lujo elegante, oscuro y dorado, alineado con el estilo de la web de AIvance.
- **Paleta:**
  - Fondo: negro/grafito (`#020202`, `#0a0a0a`, `#131313`)
  - Dorados: `--gold #d4af37`, `--gold-light #f6e3a1`, `--gold-bright #ffe8a3`, `--gold-deep #8f6a12`
  - Texto: crema suave `#f7f1e3`
- **Tipografías (Google Fonts):**
  - *Cormorant Garamond* (serif display, elegante) — titulares/marca
  - *Space Grotesk* — menú, etiquetas y botones
  - Segoe UI / sans del sistema — cuerpo de texto
- **Logo:** wordmark dorado "Gold Coral" con el coral sobre la "C" (`img/logo.png`).

### Cabecera / menú (rediseño estilo AIvance — 08/06/2026)
- Cabecera full-width, **transparente arriba** que se vuelve **panel oscuro con blur** al hacer scroll.
- Logo a la izquierda con sutil brillo dorado.
- Enlaces con **subrayado degradado animado** al pasar el ratón.
- Selector de idioma en **toggle tipo píldora EN/ES**.
- CTA "Contacto" como **botón pill con degradado dorado**.
- En móvil: **hamburguesa** que despliega un panel con blur (breakpoint 860px).

---

## 7. Funcionalidades

- **Multidioma ES/EN** con persistencia en `localStorage` (clave `gold-coral-language`).
- **Menú responsive** con hamburguesa y estado `scrolled` en la cabecera.
- **Carrusel de servicios** (navegación con flechas).
- **Globo 3D interactivo** señalando Punta Cana (librería `globe.gl`).
- **Animaciones de scroll-reveal** al entrar las secciones en pantalla.
- **PWA básica:** `manifest.webmanifest` + service worker `sw.js`.
- **SEO/Social:** metadatos Open Graph y Twitter Card.

---

## 8. Tecnología y arquitectura

- **Stack:** HTML + CSS + JavaScript *vanilla* (sin framework ni build).
- **Carga de secciones:** cada sección vive en `sections/*.html` y se inyecta por `fetch()`
  desde `scripts/script.js` (por eso **debe servirse por HTTP**, no abrir como `file://`).
- **Versionado de assets:** parámetro `?v=` (cache-busting) en CSS/JS/secciones.
  Variable `ASSET_VERSION` en `scripts/script.js` (actual: `20260608-1`).

### Estructura de carpetas
```
web goldcoral/
├─ index.html              # Página principal (placeholders de secciones)
├─ sections/               # Trozos HTML inyectados por fetch
│  ├─ header.html          # Cabecera / menú
│  ├─ home.html
│  ├─ servicios.html
│  ├─ about-us.html
│  ├─ contacto.html
│  └─ footer.html
├─ styles/styles.css       # Estilos globales
├─ scripts/script.js       # Lógica: i18n, menú, carrusel, globo, carga de secciones
├─ img/                    # Logos, favicon, iconos
├─ sw.js                   # Service worker (PWA)
├─ manifest.webmanifest
└─ documentos/             # Documentación del proyecto (este brief)
```

---

## 9. Cómo ver / probar en local

La web carga las secciones por `fetch`, así que **no** funciona abriendo el HTML con doble clic.
Hay que servirla por HTTP:

```bash
cd "web goldcoral"
python -m http.server 8765
```
Luego abrir en el navegador: **http://localhost:8765**

---

## 10. Despliegue (IMPORTANTE)

> El sitio **NO se publica por git**. Se sube por **FTP manual** a la carpeta
> `/var/www/goldcoral.vip/public`. El **FTP es la fuente de verdad** del sitio en producción.

Al desplegar, recordar subir: `index.html`, `sections/`, `styles/`, `scripts/`, `img/`,
`sw.js` y `manifest.webmanifest`. Subir el bump de `?v=` para evitar caché antigua.

---

## 11. Contacto

- **Email:** info@goldcoral.vip
- **Redes:** Instagram, TikTok (enlazadas en el footer).
