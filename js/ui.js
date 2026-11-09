// FarmaSalud — UI compartida: header, footer, cards, toasts, animaciones

// =========================== Toast ===========================
function toast(mensaje, tipo = "") {
  const t = document.createElement("div");
  t.className = `toast ${tipo}`;
  t.textContent = mensaje;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 300);
  }, 2400);
}

// =========================== Header ===========================
function renderHeader() {
  const sesion = obtenerSesion();
  const root = document.querySelector("[data-header]");
  if (!root) return;
  const path = window.location.pathname.split("/").pop() || "index.html";
  const isActive = (p) => (p === path ? "text-primary font-semibold" : "text-ink hover:text-primary");

  root.innerHTML = `
  <!-- Top utility bar -->
  <div class="bg-primary-800 text-white text-xs">
    <div class="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
      <span class="flex items-center gap-1.5">
        <span class="material-symbols-outlined text-sm">local_shipping</span>
        Envío gratis en pedidos sobre $40.000
      </span>
      <span class="hidden sm:flex items-center gap-1.5">
        <span class="material-symbols-outlined text-sm">verified</span>
        Farmacéuticos certificados disponibles
      </span>
      <span class="flex items-center gap-1.5">
        <span class="material-symbols-outlined text-sm">schedule</span>
        Atención Lun-Sáb 8:00 a 21:00
      </span>
    </div>
  </div>

  <!-- Main header -->
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-primary-100">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
      <a href="index.html" class="flex items-center gap-2.5 group">
        <span class="grid place-items-center w-10 h-10 rounded-xl bg-primary text-white shadow-soft group-hover:scale-105 transition-transform">
          <span class="material-symbols-outlined">medical_services</span>
        </span>
        <span class="leading-tight">
          <span class="block font-display text-xl text-primary-900">FarmaSalud</span>
          <span class="block text-[10px] tracking-[0.25em] uppercase text-muted">Farmacia · Desde 1998</span>
        </span>
      </a>

      <nav class="hidden md:flex items-center gap-7 text-sm">
        <a href="index.html" class="${isActive("index.html")}">Inicio</a>
        <a href="productos.html" class="${isActive("productos.html")}">Productos</a>
        <a href="nosotros.html" class="${isActive("nosotros.html")}">Nosotros</a>
        <a href="contacto.html" class="${isActive("contacto.html")}">Contacto</a>
      </nav>

      <div class="flex items-center gap-3">
        ${
          sesion
            ? `<a href="perfil.html" class="hidden sm:flex items-center gap-1.5 text-sm text-ink hover:text-primary">
                 <span class="material-symbols-outlined text-[20px]">account_circle</span>
                 <span class="hidden lg:inline">${sesion.nombre.split(" ")[0]}</span>
               </a>`
            : `<a href="login.html" class="hidden sm:flex items-center gap-1.5 text-sm text-ink hover:text-primary">
                 <span class="material-symbols-outlined text-[20px]">account_circle</span>
                 <span class="hidden lg:inline">Ingresar</span>
               </a>`
        }
        <a href="carrito.html" class="relative inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-50 text-ink hover:text-primary">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span data-cart-count class="absolute -top-0.5 -right-0.5 grid place-items-center min-w-[20px] h-5 px-1 rounded-full bg-accent text-white text-[11px] font-bold hidden">0</span>
        </a>
        <button id="mobileMenuBtn" class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-50 text-ink">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobileMenu" class="hidden md:hidden border-t border-primary-100 bg-white">
      <nav class="px-4 py-3 flex flex-col gap-2 text-sm">
        <a href="index.html" class="py-2 border-b border-primary-50">Inicio</a>
        <a href="productos.html" class="py-2 border-b border-primary-50">Productos</a>
        <a href="nosotros.html" class="py-2 border-b border-primary-50">Nosotros</a>
        <a href="contacto.html" class="py-2 border-b border-primary-50">Contacto</a>
        ${
          sesion
            ? `<a href="perfil.html" class="py-2 border-b border-primary-50">Mi perfil</a>
               <button id="mobileLogout" class="py-2 text-left text-red-600">Cerrar sesión</button>`
            : `<a href="login.html" class="py-2 border-b border-primary-50">Ingresar</a>
               <a href="registro.html" class="py-2">Crear cuenta</a>`
        }
      </nav>
    </div>
  </header>
  `;

  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  }
  const logoutBtn = document.getElementById("mobileLogout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      cerrarSesion();
      window.location.href = "index.html";
    });
  }

  actualizarContadorCarrito();
}

// =========================== Footer ===========================
function renderFooter() {
  const root = document.querySelector("[data-footer]");
  if (!root) return;
  root.innerHTML = `
  <footer class="bg-primary-900 text-primary-100 mt-16">
    <div class="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
      <div>
        <div class="flex items-center gap-2.5 mb-4">
          <span class="grid place-items-center w-10 h-10 rounded-xl bg-white/10 text-white">
            <span class="material-symbols-outlined">medical_services</span>
          </span>
          <span class="font-display text-xl text-white">FarmaSalud</span>
        </div>
        <p class="text-sm leading-relaxed text-primary-200">
          Tu salud, nuestra prioridad desde 1998. Atención farmacéutica cercana,
          productos certificados y entrega a domicilio.
        </p>
      </div>

      <div>
        <h4 class="font-display text-white text-base mb-4">Tienda</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="productos.html" class="hover:text-white">Todos los productos</a></li>
          <li><a href="productos.html?cat=medicamentos" class="hover:text-white">Medicamentos</a></li>
          <li><a href="productos.html?cat=vitaminas" class="hover:text-white">Vitaminas</a></li>
          <li><a href="productos.html?cat=dermocosmetica" class="hover:text-white">Dermocosmética</a></li>
          <li><a href="productos.html?cat=equipos" class="hover:text-white">Equipos médicos</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-display text-white text-base mb-4">Mi cuenta</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="perfil.html" class="hover:text-white">Mi perfil</a></li>
          <li><a href="carrito.html" class="hover:text-white">Mi carrito</a></li>
          <li><a href="login.html" class="hover:text-white">Iniciar sesión</a></li>
          <li><a href="registro.html" class="hover:text-white">Crear cuenta</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-display text-white text-base mb-4">Contacto</h4>
        <ul class="space-y-2 text-sm text-primary-200">
          <li class="flex items-start gap-2">
            <span class="material-symbols-outlined text-base mt-0.5">location_on</span>
            Av. Salud 245, Providencia
          </li>
          <li class="flex items-start gap-2">
            <span class="material-symbols-outlined text-base mt-0.5">call</span>
            +56 2 2345 6789
          </li>
          <li class="flex items-start gap-2">
            <span class="material-symbols-outlined text-base mt-0.5">mail</span>
            contacto@farmasalud.cl
          </li>
          <li class="flex items-start gap-2">
            <span class="material-symbols-outlined text-base mt-0.5">schedule</span>
            Lun-Sáb 8:00 – 21:00
          </li>
        </ul>
        <div class="flex gap-3 mt-4">
          <a href="#" aria-label="Facebook" class="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white">
            <span class="material-symbols-outlined text-base">facebook</span>
          </a>
          <a href="#" aria-label="Instagram" class="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white">
            <span class="material-symbols-outlined text-base">photo_camera</span>
          </a>
          <a href="#" aria-label="WhatsApp" class="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white">
            <span class="material-symbols-outlined text-base">chat</span>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-200">
        <span>&copy; 2026 FarmaSalud. Todos los derechos reservados.</span>
        <div class="flex gap-4">
          <a href="privacidad.html" class="hover:text-white">Privacidad</a>
          <a href="terminos.html" class="hover:text-white">Términos</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

// =========================== Product card ===========================
function renderProductoCard(p) {
  return `
    <article class="product-card bg-white rounded-2xl overflow-hidden border border-primary-100 flex flex-col">
      <a href="producto.html?id=${p.id}" class="block relative aspect-square overflow-hidden bg-primary-50">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        ${
          p.recetaRequerida
            ? `<span class="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500 text-white text-[11px] font-semibold">
                 <span class="material-symbols-outlined text-[14px]">description</span> Receta
               </span>`
            : ""
        }
        ${
          p.destacado
            ? `<span class="absolute top-2 right-2 inline-flex items-center px-2 py-1 rounded-full bg-accent text-white text-[11px] font-semibold">
                 Destacado
               </span>`
            : ""
        }
      </a>
      <div class="p-4 flex-1 flex flex-col">
        <p class="text-[11px] uppercase tracking-wider text-muted mb-1">
          ${(obtenerCategoria(p.categoria) || {}).nombre || ""}
        </p>
        <h3 class="font-semibold text-primary-900 leading-tight line-clamp-2 mb-2">
          <a href="producto.html?id=${p.id}" class="hover:text-primary">${p.nombre}</a>
        </h3>
        <div class="flex items-center gap-1.5 text-xs text-muted mb-3">
          ${renderEstrellas(p.rating)}
          <span>${(p.rating || 0).toFixed(1)}</span>
        </div>
        <div class="mt-auto flex items-center justify-between">
          <span class="text-xl font-bold text-primary">${formatearPrecio(p.precio)}</span>
          <button onclick="agregarAlCarritoUI('${p.id}')" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-800 shadow-soft" aria-label="Agregar al carrito">
            <span class="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function agregarAlCarritoUI(productoId) {
  const ok = agregarAlCarrito(productoId, 1);
  if (ok) toast("Producto agregado al carrito", "success");
}

// =========================== Animaciones de scroll ===========================
function inicializarAnimacionesScroll() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => obs.observe(el));
}

// =========================== Helpers de página ===========================
function cerrarSesionYRedirigir(destino = "index.html") {
  cerrarSesion();
  toast("Sesión cerrada", "success");
  setTimeout(() => (window.location.href = destino), 400);
}

function redirigirSiNoLogueado(destino = "login.html") {
  const ses = obtenerSesion();
  if (!ses) {
    window.location.href = `${destino}?redirect=${encodeURIComponent(window.location.pathname.split("/").pop())}`;
  }
}
