const menu = document.getElementById("header");
const stickyOffset = menu.offsetTop;

// Función que se ejecuta al hacer scroll
function stickyMenu() {
    if (window.pageYOffset > stickyOffset) {
        menu.classList.add("sticky");  // Agrega la clase sticky cuando el menú se pega
    } else {
        menu.classList.remove("sticky"); // Elimina la clase sticky cuando el menú vuelve a su lugar
    }
}

// Añadir el evento de scroll
window.onscroll = function() {
    stickyMenu();
};