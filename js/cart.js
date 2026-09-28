// FarmaSalud — carrito de compras

function agregarAlCarrito(productoId, cantidad = 1) {
  const carrito = obtenerCarrito();
  const idx = carrito.findIndex((it) => it.id === productoId);
  if (idx >= 0) {
    carrito[idx].cantidad += cantidad;
  } else {
    const p = obtenerProducto(productoId);
    if (!p) return false;
    carrito.push({
      id: p.id,
      nombre: p.nombre,
      precio: p.precio,
      imagen: p.imagen,
      cantidad,
      recetaRequerida: p.recetaRequerida,
    });
  }
  guardarCarrito(carrito);
  actualizarContadorCarrito();
  return true;
}

function eliminarDelCarrito(productoId) {
  const carrito = obtenerCarrito().filter((it) => it.id !== productoId);
  guardarCarrito(carrito);
  actualizarContadorCarrito();
}

function actualizarCantidadCarrito(productoId, cantidad) {
  if (cantidad < 1) {
    eliminarDelCarrito(productoId);
    return;
  }
  const carrito = obtenerCarrito();
  const idx = carrito.findIndex((it) => it.id === productoId);
  if (idx === -1) return;
  carrito[idx].cantidad = cantidad;
  guardarCarrito(carrito);
  actualizarContadorCarrito();
}

function vaciarCarrito() {
  guardarCarrito([]);
  actualizarContadorCarrito();
}

function obtenerResumenCarrito() {
  const carrito = obtenerCarrito();
  const subtotal = carrito.reduce(
    (acc, it) => acc + it.precio * it.cantidad,
    0
  );
  const cantidad = carrito.reduce((acc, it) => acc + it.cantidad, 0);
  return { subtotal, cantidad, items: carrito.length };
}

function carritoRequiereReceta() {
  return obtenerCarrito().some((it) => it.recetaRequerida);
}

function actualizarContadorCarrito() {
  const { cantidad } = obtenerResumenCarrito();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = cantidad;
    el.classList.toggle("hidden", cantidad === 0);
  });
}
