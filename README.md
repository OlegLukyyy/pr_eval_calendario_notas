# Calendario de Notas

Aplicación web que permite organizar notas personales por mes. Desarrollada con HTML, CSS y JavaScript vanilla, sin frameworks ni librerías externas.

## Descripción

El proyecto consta de dos páginas:

- **Página principal** (`index.html`) — muestra un calendario con los 12 meses. Cada mes indica cuántas notas tiene. Incluye opciones para listar y limpiar todas las notas.
- **Página de mes** (`month.html`) — permite crear, editar y eliminar notas asociadas a un mes concreto.

Los datos se persisten en el navegador mediante `localStorage`, por lo que las notas se conservan al cerrar y reabrir la página.

## Instrucciones de uso

### Crear una nota
1. Pulsa sobre cualquier mes en el calendario.
2. Rellena el título y la descripción en el formulario.
3. Pulsa **Crear nota**. La nota aparecerá en la lista.

### Editar una nota
1. Pulsa el botón **Editar** de la nota que quieras modificar.
2. El formulario se rellenará automáticamente con los datos actuales.
3. Modifica los campos y pulsa **Crear nota** para guardar los cambios.

### Eliminar una nota
1. Pulsa el botón **Eliminar** de la nota que quieras borrar.
2. Confirma la acción en el diálogo que aparece.

### Listar todas las notas
Desde la página principal, pulsa **Listar Tareas** para ver todas las notas guardadas.

### Limpiar todas las notas
Desde la página principal, pulsa **Limpiar Tareas**. Se eliminarán todas las notas de todos los meses.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+ (módulos, `localStorage`, manipulación del DOM)
