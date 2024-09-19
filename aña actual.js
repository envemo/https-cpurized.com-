'use strict';

window.onload = function() {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();

    // Obtener todos los elementos con la clase "currentYear"
    const elements = document.getElementsByClassName("currentYear");

    // Iterar sobre los elementos y establecer el contenido de texto
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = currentYear;
    }
}
