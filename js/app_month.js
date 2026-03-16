const params = new URLSearchParams(window.location.search);
const monthParam = Number(params.get("month"));

const createButton = document.querySelector("#new-note");
const title = document.querySelector("#titulo");

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

function mostrarTituloMes() {
  document.querySelector("#tituloMes").textContent =
    "Notas de " + nombresMes[monthParam];
}

if (!isNaN(monthParam)) {
  mostrarTituloMes();
}

if (createButton) {
  createButton.addEventListener("click", () => {
    if (title.value.trim() === "") return;

    const notes = JSON.parse(localStorage.getItem("calendarioNotas")) || [];

    notes.push({
      name: title.value,
      mes: monthParam,
    });

    localStorage.setItem("calendarioNotas", JSON.stringify(notes));

    title.value = ""; // limpiar input
  });
}
