import { monthNames } from "./constants.js";

const params = new URLSearchParams(window.location.search);
const monthParam = Number(params.get("month"));

const form = document.querySelector("#formNote");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const error = document.querySelector("#error");
const notesList = document.querySelector("#notes-list");

let notes = JSON.parse(localStorage.getItem("calendarioNotas")) || [];
let editingIndex = null; // null = creando nueva, número = editando existente

function mostrarTituloMes() {
  document.querySelector("#tituloMes").textContent =
    "Notas de " + monthNames[monthParam];
}

function saveNotes() {
  localStorage.setItem("calendarioNotas", JSON.stringify(notes));
}

function showNotes() {
  notesList.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].mes == monthParam) {
      const newTask = document.createElement("li");
      notesList.appendChild(newTask);

      const taskTitle = document.createElement("strong");
      taskTitle.textContent = notes[i].title;
      newTask.appendChild(taskTitle);

      const taskDescription = document.createElement("p");
      taskDescription.textContent = notes[i].description;
      newTask.appendChild(taskDescription);

      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      newTask.appendChild(editButton);

      editButton.addEventListener("click", () => {
        title.value = notes[i].title;
        description.value = notes[i].description;
        editingIndex = i;
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      newTask.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
        if (confirm("¿Seguro que quieres eliminar esta nota?")) {
          notes.splice(i, 1); // elimina 1 elemento en la posición i
          saveNotes();
          showNotes();
        }
      });
    }
  }
}

/*----------LISTENERS-----------*/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (title.value.trim() === "" || description.value.trim() === "") {
    error.textContent = "Ninguno de los campos puede estar vacío";
    setTimeout(() => {
      error.textContent = "";
    }, 3000);
    return;
  }
  //EDICION NOTA
  if (editingIndex !== null) {
    notes[editingIndex].title = title.value;
    notes[editingIndex].description = description.value;
    editingIndex = null;
  } else {
    //CREACION
    notes.push({
      title: title.value,
      description: description.value,
      mes: monthParam,
    });
  }

  saveNotes();
  title.value = "";
  description.value = "";
  showNotes();
});

mostrarTituloMes();
showNotes();
