// FarmaSalud — persistencia en localStorage

const STORAGE_KEYS = {
  usuarios: "usuarios",
  sesion: "sesionActual",
  carrito: "carrito",
  pedidos: "pedidos",
  resenas: "resenas",
};

function inicializarStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.usuarios)) {
    localStorage.setItem(
      STORAGE_KEYS.usuarios,
      JSON.stringify(USUARIOS_INICIALES)
    );
  }
  if (!localStorage.getItem(STORAGE_KEYS.pedidos)) {
    localStorage.setItem(
      STORAGE_KEYS.pedidos,
      JSON.stringify(PEDIDOS_INICIALES)
    );
  }
  if (!localStorage.getItem(STORAGE_KEYS.resenas)) {
    localStorage.setItem(STORAGE_KEYS.resenas, JSON.stringify([]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.carrito)) {
    localStorage.setItem(STORAGE_KEYS.carrito, JSON.stringify([]));
  }
}

// ----- Usuarios -----
function obtenerUsuarios() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.usuarios) || "[]");
  } catch (_) {
    return [];
  }
}
function guardarUsuarios(arr) {
  localStorage.setItem(STORAGE_KEYS.usuarios, JSON.stringify(arr));
}

// ----- Sesión -----
function obtenerSesion() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.sesion) || "null");
  } catch (_) {
    return null;
  }
}
function guardarSesion(sesion) {
  localStorage.setItem(STORAGE_KEYS.sesion, JSON.stringify(sesion));
}
function cerrarSesion() {
  localStorage.removeItem(STORAGE_KEYS.sesion);
}

// ----- Carrito -----
function obtenerCarrito() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.carrito) || "[]");
  } catch (_) {
    return [];
  }
}
function guardarCarrito(arr) {
  localStorage.setItem(STORAGE_KEYS.carrito, JSON.stringify(arr));
}

// ----- Pedidos -----
function obtenerPedidos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.pedidos) || "[]");
  } catch (_) {
    return [];
  }
}
function guardarPedidos(arr) {
  localStorage.setItem(STORAGE_KEYS.pedidos, JSON.stringify(arr));
}

// ----- Reseñas -----
function obtenerResenasStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.resenas) || "[]");
  } catch (_) {
    return [];
  }
}
function guardarResenas(arr) {
  localStorage.setItem(STORAGE_KEYS.resenas, JSON.stringify(arr));
}
