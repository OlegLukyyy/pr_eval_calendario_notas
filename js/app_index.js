/*--------IMPORTACIONES----------*/
import { monthNames } from "./constants.js";

/*--------VARIABLES GLOBALES----------*/
const months = document.querySelectorAll(".months li");
const notesList = document.querySelector("#notes-list");
const clearButton = document.querySelector("#clear-tasks");
const listButton = document.querySelector("#list-tasks");

let notes = loadNotes();

/*--------FUNCIONES----------*/
function loadNotes() {
  return JSON.parse(localStorage.getItem("calendarioNotas")) || [];
}

function updateCounters() {
  months.forEach((item) => {
    const selectedMonth = item.dataset.month;

    // Obtener cantidad de notas por mes
    const numberNotes = notes.filter(
      (nota) => nota.mes == selectedMonth,
    ).length;

    if (numberNotes > 0) {
      item.querySelector(".note-count").textContent = numberNotes;
    } else {
      item.querySelector(".note-count").textContent = "";
    }
  });
}

function showNotes() {
  for (let i = 0; i < notes.length; i++) {
    const newTask = document.createElement("li");
    newTask.textContent = notes[i].title;
    notesList.appendChild(newTask);

    const taskDescription = document.createElement("p");
    taskDescription.textContent = notes[i].description;
    newTask.appendChild(taskDescription);

    const month = document.createElement("p");
    month.textContent = monthNames[notes[i].mes];
    newTask.appendChild(month);
  }
}

function updateNotes() {
  notes = loadNotes();
  notesList.innerHTML = ""; //
  updateCounters();
}

/*------------------EVENTOS-------------------*/

listButton.addEventListener("click", () => {
  updateNotes();
  showNotes();
});

clearButton.addEventListener("click", () => {
  if (confirm("Deseas eliminar todas las notas?")) {
    localStorage.clear();
    updateNotes();
  }
});

months.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedMonth = item.dataset.month;
    window.location.href = `./pages/month.html?month=${selectedMonth}`;
  });

  updateNotes();
});
