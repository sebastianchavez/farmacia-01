// FarmaSalud — autenticación simulada (localStorage)

function registrarUsuario({ nombre, email, telefono, password }) {
  const usuarios = obtenerUsuarios();
  if (usuarios.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { ok: false, error: "Ya existe una cuenta con ese correo." };
  }
  const nuevo = {
    id: "u" + Date.now(),
    nombre,
    email,
    telefono,
    password,
    direccion: "",
    fechaRegistro: new Date().toISOString().slice(0, 10),
  };
  usuarios.push(nuevo);
  guardarUsuarios(usuarios);
  guardarSesion({ id: nuevo.id, nombre: nuevo.nombre, email: nuevo.email });
  return { ok: true, usuario: nuevo };
}

function iniciarSesion(email, password) {
  const usuarios = obtenerUsuarios();
  const u = usuarios.find(
    (x) =>
      x.email.toLowerCase() === email.toLowerCase() && x.password === password
  );
  if (!u) return { ok: false, error: "Correo o contraseña incorrectos." };
  guardarSesion({ id: u.id, nombre: u.nombre, email: u.email });
  return { ok: true, usuario: u };
}

function recuperarContrasena(email) {
  const usuarios = obtenerUsuarios();
  const existe = usuarios.some(
    (x) => x.email.toLowerCase() === email.toLowerCase()
  );
  if (!existe) {
    return {
      ok: false,
      error: "No encontramos una cuenta asociada a ese correo.",
    };
  }
  return {
    ok: true,
    mensaje:
      "Si la cuenta existe, enviamos un enlace de recuperación al correo indicado.",
  };
}

function actualizarPerfil(cambios) {
  const sesion = obtenerSesion();
  if (!sesion) return { ok: false, error: "Sin sesión activa." };
  const usuarios = obtenerUsuarios();
  const idx = usuarios.findIndex((u) => u.id === sesion.id);
  if (idx === -1) return { ok: false, error: "Usuario no encontrado." };
  usuarios[idx] = { ...usuarios[idx], ...cambios };
  guardarUsuarios(usuarios);
  guardarSesion({
    id: usuarios[idx].id,
    nombre: usuarios[idx].nombre,
    email: usuarios[idx].email,
  });
  return { ok: true };
}
