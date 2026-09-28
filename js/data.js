// FarmaSalud — datos mockeados
// Estructura: categorías, productos, equipo, testimonios, reseñas iniciales,
// pedidos iniciales, usuarios iniciales + helpers compartidos.

const CATEGORIAS = [
  {
    id: "medicamentos",
    nombre: "Medicamentos",
    icono: "medication",
    descripcion: "Analgésicos, antigripales, antibióticos y más, con receta o de libre venta.",
  },
  {
    id: "cuidado-personal",
    nombre: "Cuidado Personal",
    icono: "soap",
    descripcion: "Higiene diaria, cuidado bucal y protección para toda la familia.",
  },
  {
    id: "dermocosmetica",
    nombre: "Dermocosmética",
    icono: "spa",
    descripcion: "Líneas dermatológicas para el rostro, cuerpo y cabello.",
  },
  {
    id: "vitaminas",
    nombre: "Vitaminas y Suplementos",
    icono: "eco",
    descripcion: "Multivitamínicos, minerales y suplementos para tu bienestar.",
  },
  {
    id: "bebe",
    nombre: "Bebé y Maternidad",
    icono: "child_care",
    descripcion: "Fórmulas, pañales, cremas y accesorios para los más pequeños.",
  },
  {
    id: "equipos",
    nombre: "Equipos Médicos",
    icono: "monitor_heart",
    descripcion: "Tensiómetros, termómetros, glucómetros y más con respaldo profesional.",
  },
];

const PRODUCTOS = [
  // ---------- Medicamentos (4) ----------
  {
    id: "p001",
    nombre: "Paracetamol 500mg",
    categoria: "medicamentos",
    precio: 4.5,
    imagen:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Analgésico y antipirético de uso común. Alivia dolores leves a moderados y reduce la fiebre.",
    principioActivo: "Paracetamol",
    presentacion: "Caja x 20 tabletas",
    laboratorio: "Genfar",
    recetaRequerida: false,
    stock: 120,
    destacado: true,
    rating: 4.6,
  },
  {
    id: "p002",
    nombre: "Ibuprofeno 400mg",
    categoria: "medicamentos",
    precio: 6.2,
    imagen:
      "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Antiinflamatorio no esteroideo (AINE). Indicado para dolor, fiebre e inflamación.",
    principioActivo: "Ibuprofeno",
    presentacion: "Caja x 30 tabletas",
    laboratorio: "MK",
    recetaRequerida: false,
    stock: 95,
    destacado: false,
    rating: 4.4,
  },
  {
    id: "p003",
    nombre: "Amoxicilina 500mg",
    categoria: "medicamentos",
    precio: 12.8,
    imagen:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Antibiótico de amplio espectro. Uso bajo prescripción médica para infecciones bacterianas.",
    principioActivo: "Amoxicilina",
    presentacion: "Caja x 21 cápsulas",
    laboratorio: "Bayer",
    recetaRequerida: true,
    stock: 40,
    destacado: false,
    rating: 4.2,
  },
  {
    id: "p004",
    nombre: "Loratadina 10mg",
    categoria: "medicamentos",
    precio: 7.9,
    imagen:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Antihistamínico de segunda generación para el alivio de rinitis alérgica y urticaria.",
    principioActivo: "Loratadina",
    presentacion: "Caja x 30 tabletas",
    laboratorio: "Pfizer",
    recetaRequerida: false,
    stock: 70,
    destacado: true,
    rating: 4.5,
  },

  // ---------- Cuidado Personal (3) ----------
  {
    id: "p005",
    nombre: "Jabón Líquido Neutro 500ml",
    categoria: "cuidado-personal",
    precio: 5.5,
    imagen:
      "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Jabón líquido con pH neutro, ideal para pieles sensibles y uso diario.",
    principioActivo: "—",
    presentacion: "Frasco 500ml",
    laboratorio: "FarmaSalud",
    recetaRequerida: false,
    stock: 200,
    destacado: false,
    rating: 4.7,
  },
  {
    id: "p006",
    nombre: "Pasta Dental Triple Acción 150ml",
    categoria: "cuidado-personal",
    precio: 3.8,
    imagen:
      "https://images.unsplash.com/photo-1559463564-4ee84a8c8f3d?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Protección contra caries, frescura prolongada y blanqueamiento suave.",
    principioActivo: "Fluoruro de sodio",
    presentacion: "Tubo 150ml",
    laboratorio: "Colgate",
    recetaRequerida: false,
    stock: 180,
    destacado: false,
    rating: 4.6,
  },
  {
    id: "p007",
    nombre: "Desodorante Roll-on 50ml",
    categoria: "cuidado-personal",
    precio: 4.2,
    imagen:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&q=80&auto=format&fit=crop",
    descripcion:
      " Protección 48h contra el sudor, sin alcohol y dermatológicamente probado.",
    principioActivo: "—",
    presentacion: "Roll-on 50ml",
    laboratorio: "Rexona",
    recetaRequerida: false,
    stock: 150,
    destacado: false,
    rating: 4.4,
  },

  // ---------- Dermocosmética (3) ----------
  {
    id: "p008",
    nombre: "Protector Solar FPS 50+ 60ml",
    categoria: "dermocosmetica",
    precio: 18.9,
    imagen:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Protección de amplio espectro contra rayos UVA/UVB. Textura ligera, no graso.",
    principioActivo: "Filtros solares + Aloe vera",
    presentacion: "Tubo 60ml",
    laboratorio: "La Roche-Posay",
    recetaRequerida: false,
    stock: 60,
    destacado: true,
    rating: 4.8,
  },
  {
    id: "p009",
    nombre: "Crema Hidratante Facial 50ml",
    categoria: "dermocosmetica",
    precio: 14.5,
    imagen:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Hidratación profunda por 24h con ácido hialurónico. Apta para pieles sensibles.",
    principioActivo: "Ácido hialurónico",
    presentacion: "Frasco 50ml",
    laboratorio: "CeraVe",
    recetaRequerida: false,
    stock: 75,
    destacado: true,
    rating: 4.7,
  },
  {
    id: "p010",
    nombre: "Sérum Vitamina C 30ml",
    categoria: "dermocosmetica",
    precio: 22.0,
    imagen:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Sérum antioxidante que ilumina y unifica el tono de la piel. Uso nocturno.",
    principioActivo: "Vitamina C 10%",
    presentacion: "Frasco gotero 30ml",
    laboratorio: "Skinceuticals",
    recetaRequerida: false,
    stock: 35,
    destacado: false,
    rating: 4.9,
  },

  // ---------- Vitaminas y Suplementos (3) ----------
  {
    id: "p011",
    nombre: "Multivitamínico Adulto x60",
    categoria: "vitaminas",
    precio: 15.9,
    imagen:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Fórmula completa con 13 vitaminas y 11 minerales para el día a día.",
    principioActivo: "Vitaminas A, C, D, E, complejo B",
    presentacion: "Frasco x 60 cápsulas",
    laboratorio: "Centrum",
    recetaRequerida: false,
    stock: 90,
    destacado: true,
    rating: 4.7,
  },
  {
    id: "p012",
    nombre: "Vitamina D3 1000UI x30",
    categoria: "vitaminas",
    precio: 9.5,
    imagen:
      "https://images.unsplash.com/photo-1559667326-26cf2d3f6f5d?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Apoya la salud ósea y el sistema inmune. Una cápsula al día con las comidas.",
    principioActivo: "Colecalciferol (D3)",
    presentacion: "Frasco x 30 cápsulas blandas",
    laboratorio: "NOW Foods",
    recetaRequerida: false,
    stock: 110,
    destacado: false,
    rating: 4.6,
  },
  {
    id: "p013",
    nombre: "Omega 3 1000mg x100",
    categoria: "vitaminas",
    precio: 19.5,
    imagen:
      "https://images.unsplash.com/photo-1577400808258-6a05fdba8d56?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Aceite de pescado purificado, rico en EPA y DHA. Salud cardiovascular.",
    principioActivo: "Omega 3 (EPA + DHA)",
    presentacion: "Frasco x 100 cápsulas blandas",
    laboratorio: "Nordic Naturals",
    recetaRequerida: false,
    stock: 65,
    destacado: false,
    rating: 4.8,
  },

  // ---------- Bebé y Maternidad (2) ----------
  {
    id: "p014",
    nombre: "Fórmula Infantil Etapa 1 400g",
    categoria: "bebe",
    precio: 24.9,
    imagen:
      "https://images.unsplash.com/photo-1584650581263-b00a9ee0a48e?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Fórmula de inicio para lactantes de 0 a 6 meses. Con prebióticos y DHA.",
    principioActivo: "—",
    presentacion: "Lata 400g",
    laboratorio: "Nan",
    recetaRequerida: false,
    stock: 30,
    destacado: true,
    rating: 4.7,
  },
  {
    id: "p015",
    nombre: "Crema Pañalitis 100g",
    categoria: "bebe",
    precio: 7.5,
    imagen:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Protege y calma la piel del bebé contra rozaduras. Hipoalergénica.",
    principioActivo: "Óxido de zinc + Dexpantenol",
    presentacion: "Tubo 100g",
    laboratorio: "Bepanthen",
    recetaRequerida: false,
    stock: 85,
    destacado: false,
    rating: 4.8,
  },

  // ---------- Equipos Médicos (3) ----------
  {
    id: "p016",
    nombre: "Tensiómetro Digital de Brazo",
    categoria: "equipos",
    precio: 49.9,
    imagen:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Medición automática, memoria para 2 usuarios, detección de arritmias.",
    principioActivo: "—",
    presentacion: "Unidad + brazalete + estuche",
    laboratorio: "Omron",
    recetaRequerida: false,
    stock: 25,
    destacado: true,
    rating: 4.9,
  },
  {
    id: "p017",
    nombre: "Termómetro Infrarrojo",
    categoria: "equipos",
    precio: 22.0,
    imagen:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Lectura en 1 segundo sin contacto. Ideal para adultos y niños.",
    principioActivo: "—",
    presentacion: "Unidad + baterías + manual",
    laboratorio: "Microlife",
    recetaRequerida: false,
    stock: 40,
    destacado: false,
    rating: 4.7,
  },
  {
    id: "p018",
    nombre: "Glucómetro con 50 tiras reactivas",
    categoria: "equipos",
    precio: 38.0,
    imagen:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?w=600&q=80&auto=format&fit=crop",
    descripcion:
      "Medición rápida en 5 segundos, memoria para 500 resultados, codificación automática.",
    principioActivo: "—",
    presentacion: "Kit: glucómetro + lancetas + tiras",
    laboratorio: "Accu-Chek",
    recetaRequerida: false,
    stock: 22,
    destacado: false,
    rating: 4.8,
  },
];

const EQUIPO = [
  {
    id: "e001",
    nombre: "Dra. Carolina Méndez",
    rol: "Farmacéutica Titular",
    foto:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop",
    descripcion:
      "Más de 18 años de experiencia en farmacia comunitaria. Asesora en farmacoterapia y uso racional de medicamentos.",
  },
  {
    id: "e002",
    nombre: "Lic. Andrés Ríos",
    rol: "Dermoconsejero",
    foto:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop",
    descripcion:
      "Especialista en rutinas de cuidado facial y selección de productos dermatológicos según tipo de piel.",
  },
  {
    id: "e003",
    nombre: "Lic. Valentina Soto",
    rol: "Nutricionista",
    foto:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
    descripcion:
      "Aconseja sobre suplementos, multivitamínicos y planes personalizados para cada etapa de la vida.",
  },
  {
    id: "e004",
    nombre: "Juan Pablo Pérez",
    rol: "Atención al Cliente",
    foto:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    descripcion:
      "Te ayuda a encontrar el producto adecuado y resuelve dudas sobre pedidos, envíos y recetas.",
  },
];

const TESTIMONIOS = [
  {
    nombre: "Lucía Fernández",
    texto:
      "Siempre encuentro lo que necesito y el equipo me orienta con mucha paciencia. La entrega es rapidísima.",
    rating: 5,
    ubicacion: "Centro",
  },
  {
    nombre: "Roberto Gómez",
    texto:
      "Compré el tensiómetro y me asesoraron por WhatsApp. Excelente atención postventa.",
    rating: 5,
    ubicacion: "Norte",
  },
  {
    nombre: "Carolina Vega",
    texto:
      "Las vitaminas que me recomendó la nutricionista son justo las que necesitaba. Me siento con más energía.",
    rating: 5,
    ubicacion: "Sur",
  },
];

const RESENAS_INICIALES = [
  {
    id: "r001",
    productoId: "p001",
    usuario: "Lucía Fernández",
    rating: 5,
    comentario: "Alivió el dolor de cabeza en minutos. Lo tengo siempre en casa.",
    fecha: "2026-08-12",
  },
  {
    id: "r002",
    productoId: "p008",
    usuario: "Andrea López",
    rating: 5,
    comentario: "El mejor protector solar que he probado, no me deja la piel grasa.",
    fecha: "2026-08-25",
  },
  {
    id: "r003",
    productoId: "p016",
    usuario: "Roberto Gómez",
    rating: 5,
    comentario: "Tensiómetro muy fácil de usar. La memoria para 2 usuarios es genial.",
    fecha: "2026-09-01",
  },
  {
    id: "r004",
    productoId: "p009",
    usuario: "María José Salas",
    rating: 4,
    comentario: "Hidrata muy bien, aunque el olor es un poco fuerte.",
    fecha: "2026-09-04",
  },
  {
    id: "r005",
    productoId: "p011",
    usuario: "Felipe Ortiz",
    rating: 5,
    comentario: "Me lo recomendó la nutricionista y noto la diferencia en 2 semanas.",
    fecha: "2026-09-08",
  },
  {
    id: "r006",
    productoId: "p014",
    usuario: "Carolina Vega",
    rating: 5,
    comentario: "Mi bebé lo tolera perfecto. Buena relación calidad-precio.",
    fecha: "2026-09-10",
  },
  {
    id: "r007",
    productoId: "p006",
    usuario: "Diego Ruiz",
    rating: 4,
    comentario: "Buen sabor y precio. La presentación es práctica.",
    fecha: "2026-09-12",
  },
  {
    id: "r008",
    productoId: "p017",
    usuario: "Sofía Martín",
    rating: 5,
    comentario: "Es súper rápido y fácil de usar con los niños. Una gran compra.",
    fecha: "2026-09-15",
  },
];

const PEDIDOS_INICIALES = [
  {
    id: "FAR-20260812-001",
    usuarioEmail: "maria@ejemplo.com",
    fecha: "2026-08-12",
    estado: "Entregado",
    productos: [
      {
        id: "p001",
        nombre: "Paracetamol 500mg",
        precio: 4.5,
        cantidad: 2,
        imagen: PRODUCTOS[0].imagen,
      },
      {
        id: "p006",
        nombre: "Pasta Dental Triple Acción 150ml",
        precio: 3.8,
        cantidad: 1,
        imagen: PRODUCTOS[5].imagen,
      },
    ],
    subtotal: 12.8,
    envio: 5.0,
    total: 17.8,
    tipoEnvio: "Estándar (3-5 días)",
    direccion: {
      nombre: "María López",
      telefono: "555-1234",
      calle: "Av. Principal 245",
      ciudad: "Centro",
      cp: "12345",
    },
    metodoPago: "Tarjeta de Crédito",
    requiereReceta: false,
  },
  {
    id: "FAR-20260904-002",
    usuarioEmail: "maria@ejemplo.com",
    fecha: "2026-09-04",
    estado: "Entregado",
    productos: [
      {
        id: "p008",
        nombre: "Protector Solar FPS 50+ 60ml",
        precio: 18.9,
        cantidad: 1,
        imagen: PRODUCTOS[7].imagen,
      },
      {
        id: "p010",
        nombre: "Sérum Vitamina C 30ml",
        precio: 22.0,
        cantidad: 1,
        imagen: PRODUCTOS[9].imagen,
      },
    ],
    subtotal: 40.9,
    envio: 12.0,
    total: 52.9,
    tipoEnvio: "Express (24-48h)",
    direccion: {
      nombre: "María López",
      telefono: "555-1234",
      calle: "Av. Principal 245",
      ciudad: "Centro",
      cp: "12345",
    },
    metodoPago: "PayPal",
    requiereReceta: false,
  },
  {
    id: "FAR-20260918-003",
    usuarioEmail: "juan@ejemplo.com",
    fecha: "2026-09-18",
    estado: "En camino",
    productos: [
      {
        id: "p016",
        nombre: "Tensiómetro Digital de Brazo",
        precio: 49.9,
        cantidad: 1,
        imagen: PRODUCTOS[15].imagen,
      },
    ],
    subtotal: 49.9,
    envio: 0.0,
    total: 49.9,
    tipoEnvio: "Recojo en tienda",
    direccion: {
      nombre: "Juan Pérez",
      telefono: "555-5678",
      calle: "Av. Salud 120",
      ciudad: "Centro",
      cp: "12345",
    },
    metodoPago: "Efectivo contra entrega",
    requiereReceta: false,
  },
];

const USUARIOS_INICIALES = [
  {
    id: "u001",
    nombre: "María López",
    email: "maria@ejemplo.com",
    password: "123456",
    telefono: "555-1234",
    direccion: "Av. Principal 245, Centro",
    fechaRegistro: "2025-03-10",
  },
  {
    id: "u002",
    nombre: "Juan Pérez",
    email: "juan@ejemplo.com",
    password: "123456",
    telefono: "555-5678",
    direccion: "Av. Salud 120, Centro",
    fechaRegistro: "2025-07-22",
  },
];

// =========================== Helpers ===========================

function formatearPrecio(precio) {
  return `$${Number(precio).toFixed(2)}`;
}

function formatearFecha(fechaISO) {
  const f = new Date(fechaISO);
  if (isNaN(f)) return fechaISO;
  return f.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function generarIdPedido() {
  const d = new Date();
  const ymd =
    d.getFullYear().toString() +
    String(d.getMonth() + 1).padStart(2, "0") +
    String(d.getDate()).padStart(2, "0");
  const rand = Math.floor(Math.random() * 900 + 100);
  return `FAR-${ymd}-${rand}`;
}

function obtenerProducto(id) {
  return PRODUCTOS.find((p) => p.id === id);
}

function obtenerCategoria(id) {
  return CATEGORIAS.find((c) => c.id === id);
}

function obtenerProductosPorCategoria(catId) {
  return PRODUCTOS.filter((p) => p.categoria === catId);
}

function obtenerResenasProducto(productoId) {
  let storage = [];
  try {
    storage = JSON.parse(localStorage.getItem("resenas") || "[]");
  } catch (_) {
    storage = [];
  }
  return [...RESENAS_INICIALES, ...storage]
    .filter((r) => r.productoId === productoId)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

function promedioRating(productoId) {
  const rs = obtenerResenasProducto(productoId);
  if (!rs.length) return 0;
  const sum = rs.reduce((acc, r) => acc + r.rating, 0);
  return sum / rs.length;
}

function distribucionRating(productoId) {
  const rs = obtenerResenasProducto(productoId);
  const dist = [0, 0, 0, 0, 0];
  rs.forEach((r) => {
    const i = Math.min(5, Math.max(1, Math.round(r.rating))) - 1;
    dist[i]++;
  });
  return dist;
}

function renderEstrellas(rating, size = "sm") {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  const cls = size === "lg" ? "text-2xl" : size === "md" ? "text-lg" : "text-base";
  let html = `<span class="inline-flex ${cls} text-amber-400">`;
  for (let i = 0; i < full; i++) html += "★";
  if (half) html += "★";
  for (let i = 0; i < empty; i++)
    html += '<span class="text-gray-300">★</span>';
  html += "</span>";
  return html;
}

function usuarioHaComprado(usuarioEmail, productoId) {
  if (!usuarioEmail) return false;
  const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]");
  return pedidos.some(
    (p) =>
      p.usuarioEmail === usuarioEmail &&
      p.estado === "Entregado" &&
      p.productos.some((it) => it.id === productoId)
  );
}

function obtenerQueryParam(nombre) {
  const u = new URL(window.location.href);
  return u.searchParams.get(nombre);
}
