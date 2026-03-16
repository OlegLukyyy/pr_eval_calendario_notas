const params = new URLSearchParams(window.location.search);
const monthParam = Number(params.get("month"));

const nombresMes = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

document.querySelector("#tituloMes").textContent =
  "Notas de " + nombresMes[monthParam];

const params = new URLSearchParams(window.location.search);
const mes = Number(params.get("mes"));

// mostrar nombre
mostrarTituloMes();

// cargar notas
mostrarNotas();

// eventos
document.querySelector("#formNota").addEventListener("submit", crearNota);
