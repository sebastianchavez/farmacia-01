// FarmaSalud — orquestador al cargar cualquier página
document.addEventListener("DOMContentLoaded", () => {
  if (typeof inicializarStorage === "function") inicializarStorage();
  if (typeof renderHeader === "function") renderHeader();
  if (typeof renderFooter === "function") renderFooter();
  setTimeout(inicializarAnimacionesScroll, 60);
});
