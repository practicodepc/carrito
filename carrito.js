let app = document.getElementById("app");
let contador = document.getElementById("contador");

app.onclick = function( event ) {
    let boton = event.target;
    let padre = boton.parentElement;
    let id = padre.id;
    let fila = document.getElementById(id);
    let articulos = Number(contador.textContent);

    fila.classList.add("ocultar");
    articulos = articulos + 1;
    contador.textContent = articulos;
}