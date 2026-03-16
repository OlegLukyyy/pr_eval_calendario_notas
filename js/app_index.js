const months = document.querySelectorAll(".months li");
const notesList = document.querySelector("#notes-list");
const clearButton = document.querySelector("#clear-tasks");
const listButton = document.querySelector("#list-tasks");

let notas = loadNotes();

function loadNotes() {
  return JSON.parse(localStorage.getItem("calendarioNotas")) || [];
}

months.forEach((item) => {
  const selectedMonth = item.dataset.month;

  // Obtener cantidad de notas por mes
  const numberNotes = notas.filter((nota) => nota.mes == selectedMonth).length;

  if (numberNotes > 0) {
    item.querySelector(".note-count").textContent = numberNotes;
  }

  item.addEventListener("click", () => {
    window.location.href = `/pages/month.html?month=${selectedMonth}`;
  });
});

/*------------------EVENTOS-------------------*/

listButton.addEventListener("click", () => {
  notas = loadNotes();

  notesList.innerHTML = ""; //

  for (let i = 0; i < notas.length; i++) {
    const newTask = document.createElement("li");
    newTask.textContent = notas[i].name;
    notesList.appendChild(newTask);
  }
});

clearButton.addEventListener("click", () => {
  localStorage.clear();
});
