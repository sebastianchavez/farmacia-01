# 💊 FarmaSalud — E-commerce de Farmacia

Plantilla de sitio web tipo e-commerce para una farmacia comunitaria, construida con **HTML + JavaScript vanilla + Tailwind CSS**, sin dependencias de backend. Los datos están mockeados y la persistencia se realiza en `localStorage`.

## 🚀 Cómo usar

1. Abre `index.html` directamente, **o**
2. Sirve con un servidor estático para evitar restricciones de CORS en algunos navegadores:
   ```bash
   python -m http.server 8000
   # o
   npx serve .
   ```

## 👤 Cuentas de demostración

| Email | Contraseña | Estado |
|---|---|---|
| `maria@ejemplo.com` | `123456` | 3 pedidos previos (1 entregado), reseñas precargadas |
| `juan@ejemplo.com` | `123456` | 1 pedido en camino |

Ambas cuentas se siembran automáticamente la primera vez que abres el sitio.

## 📁 Estructura del proyecto

```
farmacia-01/
├── index.html              ← Landing
├── nosotros.html           ← Historia + misión + equipo
├── productos.html          ← Catálogo con filtros
├── producto.html           ← Detalle de producto (?id=X)
├── carrito.html            ← Carrito de compras
├── pago.html               ← Checkout (dirección, envío, pago, receta)
├── confirmacion.html       ← Recibo imprimible + botones
├── perfil.html             ← Mi cuenta + historial de pedidos
├── pedido.html             ← Detalle de pedido (?id=X)
├── resena.html             ← Escribir reseña (?producto=X)
├── privacidad.html         ← Política de privacidad
├── terminos.html           ← Términos y condiciones
├── registro.html           ← Crear cuenta
├── login.html              ← Iniciar sesión
├── contacto.html           ← Formulario + mapa + horarios
├── recuperar.html          ← Recuperar contraseña
├── README.md
└── assets/
    ├── css/
    │   ├── styles.css              ← Overrides + animaciones + print
    │   └── tailwind.config.js      ← Paleta + fuentes + animaciones
    └── js/
        ├── data.js         ← CATEGORIAS, PRODUCTOS, EQUIPO, TESTIMONIOS, *_INICIALES
        ├── storage.js      ← Helpers de localStorage
        ├── auth.js         ← Registro, login, recuperar, actualizar perfil
        ├── cart.js         ← CRUD carrito + contador del header
        ├── ui.js           ← renderHeader, renderFooter, toast, product card
        └── main.js         ← Orquestador (DOMContentLoaded)
```

> Los archivos JS viven directamente en `js/` (no en `assets/js/`).

## ✨ Funcionalidades

### Públicas
- Landing con hero, 6 categorías, 4 productos destacados, testimonios, CTA de receta médica.
- Catálogo con filtros (categoría, búsqueda, rango de precio, sólo con receta) + ordenamiento.
- Detalle de producto dinámico por `?id=X` con tabs (Descripción / Composición / Envío / Reseñas), galería, selector de cantidad y agregado al carrito.
- Página de contacto con tarjetas, horarios de venta y mapa embebido.
- Páginas legales (privacidad, términos).

### E-commerce
- Carrito persistente en `localStorage` con edición de cantidad, eliminación, vaciado y cupones (`BIENVENIDO10` aplica 10%).
- Checkout con 3 secciones: dirección, tipo de envío (Estándar/Express/Recojo) y medio de pago (tarjeta, transferencia, PayPal, efectivo).
- **Bloque de receta médica** que aparece automáticamente cuando algún producto del carrito tiene `recetaRequerida: true` (con drag & drop / file input).
- Confirmación con número de pedido, recibo imprimible y 2 botones: **Imprimir comprobante** y **Ver mis pedidos**.

### Usuario
- Registro, login y recuperación de contraseña (simulados).
- Perfil editable con avatar de iniciales y cambio de teléfono/dirección.
- Historial de pedidos con estado, total y thumbnails.
- Detalle de pedido con timeline, productos, dirección, método de pago y datos de receta.
- Reseñas con estrellas (5) y comentario — sólo disponibles para clientes que compraron el producto.

### Toque diferenciador de farmacia
- Campo `recetaRequerida: boolean` por producto.
- Banner ámbar en el detalle cuando aplica.
- Bloque de subida de receta en `pago.html`.
- Marcas de "Receta" en producto y tarjetas del catálogo.
- Mención en checkout: "Adjunta tu receta para validación por un farmacéutico en menos de 1h".

### Persistencia (localStorage)
- `usuarios` — cuentas (registro + seed).
- `sesionActual` — sesión activa.
- `carrito` — items del carrito.
- `pedidos` — historial.
- `resenas` — reseñas creadas por usuarios.

Para limpiar todo y volver al estado inicial:
```js
localStorage.clear(); location.reload();
```

## 🎨 Personalización

### Colores — editar `assets/css/tailwind.config.js`

```js
colors: {
  primary: { DEFAULT: "#0F766E", 50: "#F0FDFA", …, 900: "#134E4A" },
  accent:  { DEFAULT: "#10B981", light: "#34D399", dark: "#059669" },
  cream: "#FAFAF9",
  ink: "#1F2937",
  muted: "#6B7280",
}
```

### Tipografía
Google Fonts: **Playfair Display** (display) + **Inter** (cuerpo) + **Material Symbols Outlined**.

### Datos mockeados — editar `js/data.js`

Arrays disponibles:
- `CATEGORIAS` (6)
- `PRODUCTOS` (18, con `recetaRequerida`, `presentacion`, `laboratorio`, `principioActivo`)
- `EQUIPO` (4)
- `TESTIMONIOS` (3)
- `RESENAS_INICIALES` (8)
- `PEDIDOS_INICIALES` (3)
- `USUARIOS_INICIALES` (2)

Y helpers:
`formatearPrecio`, `formatearFecha`, `generarIdPedido`, `obtenerProducto`, `obtenerCategoria`, `obtenerResenasProducto`, `promedioRating`, `distribucionRating`, `renderEstrellas`, `usuarioHaComprado`, `obtenerQueryParam`.

### Imágenes
URLs de Unsplash en `js/data.js` → campo `imagen` (formato `?w=600&q=80&auto=format&fit=crop`).

## 🧪 Flujo de prueba recomendado

1. Abre `index.html` y revisa el landing.
2. Ve a **Productos** → filtra por "Vitaminas" → abre "Vitamina D3 1000UI".
3. Agrega 2 unidades al carrito.
4. Abre **Productos → Medicamentos** → abre "Amoxicilina 500mg" (requiere receta) → agrégala.
5. Ve al **Carrito** → aplica cupón `BIENVENIDO10` → **Proceder al pago**.
6. Inicia sesión con `maria@ejemplo.com` / `123456`.
7. Completa el formulario, elige Express, Tarjeta → **Confirma el pago**.
8. **Importante:** sube cualquier archivo en el bloque de receta.
9. En la confirmación: imprime el comprobante o ve a tu perfil.
10. En **Mi perfil → Pedidos** abre el pedido "FAR-…-001" (Entregado).
11. Pulsa "Dejar reseña" en un producto → califica con estrellas → envía.
12. Vuelve al producto y verifica que la reseña aparece.

## 📝 Notas

- Las contraseñas se almacenan en texto plano en `localStorage` (solo demo, no producción).
- Sin build step: `index.html` se abre directo.
- Imágenes desde Unsplash requieren conexión; el resto del sitio funciona offline.
- Recibo de confirmación usa `window.print()` con CSS `@media print` real.

© 2026 FarmaSalud · Template listo para personalización.
