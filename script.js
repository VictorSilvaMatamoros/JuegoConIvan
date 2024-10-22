// Creación de juego de disparo a blancos
let pistola = document.getElementById("pistolaImg");
let contador = document.getElementById("timer");
let tiempo = 10;
let enemigoContainer = document.getElementById("enemigos");

let contadorPuntos = document.createElement("puntos"); 
contadorPuntos.setAttribute("id", "puntos");

// Generar temporizador
let temporizador = setInterval(function() {
    tiempo--;
    contador.innerHTML = tiempo;
    if (tiempo <= 0) {
        contador.innerHTML = 0;
        perder();
        clearInterval(temporizador); // Detener el temporizador cuando el tiempo se acaba
    }
}, 1000);

// Mover la pistola con el ratón
document.addEventListener("mousemove", function(event) {
    pistola.style.position = "absolute";
    pistola.style.top = (event.clientY - pistola.offsetHeight / 2) + "px";
    pistola.style.left = (event.clientX - pistola.offsetWidth / 2) + "px";
});

// Generar enemigos con imágenes por JS
function generarEnemigo() {
    let enemigo = document.createElement("img");
    enemigo.setAttribute("class", "enemigo");
    enemigo.setAttribute("src", "img/enemigo1.jpg");

    let posicionX = Math.floor(Math.random() * (window.innerWidth - 100)); // Ajusta para no salir de la pantalla
    let posicionY = Math.floor(Math.random() * (window.innerHeight - 100));
    enemigo.style.position = "absolute";
    enemigo.style.top = posicionY + "px";
    enemigo.style.left = posicionX + "px";

    // Añadir enemigo al contenedor
    enemigoContainer.appendChild(enemigo);

    // Hacer que el enemigo desaparezca cuando se hace clic en él (disparo)
    enemigo.addEventListener("click", function() {
        contadorPuntos.innerHTML = "Puntos: " + contadorPuntos++;
        enemigo.remove(); // Elimina el enemigo cuando se hace clic en él
    });
}

// Generar enemigos cada 2 segundos
setInterval(generarEnemigo, 2000);

// Hacer la función perder
function perder() {
    alert("Perdiste");
}
