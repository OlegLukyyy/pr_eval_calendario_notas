const months = document.querySelectorAll(".months li");

const notas = loadNotes();

function loadNotes() {
  return JSON.parse(localStorage.getItem("calendarioNotas")) || [];
}

months.forEach((item) => {
  const selectedMonth = item.dataset.month;
  // obtener cantidad de notas por cada mes
  const numberNotes = notas.filter((nota) => nota.mes === mes).length;
  item.querySelector(".note-count").textContent = numberNotes;
  if (numberNotes > 0) {
    item.classList.add("has-note");
  }

  item.addEventListener("click", () => {
    window.location.href = `/pages/month.html?month=${selectedMonth}`;
  });
});
