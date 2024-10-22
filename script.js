// Intervalo inicial en milisegundos
let intervalo = 2000; // 2 segundos
let intervaloMinimo = 550; // 100 milisegundos como límite mínimo

// Elementos del juego
let pistola = document.getElementById("pistolaImg");
let contador = document.getElementById("timer");
let tiempo = 10;
let enemigoContainer = document.getElementById("enemigos");
let contadorPuntos = 0;

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
<<<<<<< Updated upstream
    enemigo.setAttribute("src", "./img/enemigo" + String(Math.floor(Math.random() * 7) + 1) + ".png");
    let posicionX = Math.floor(Math.random() * (window.innerWidth - 100)); // Ajusta para no salir de la pantalla
    let posicionY = Math.floor(Math.random() * (window.innerHeight - 100));
=======
    enemigo.setAttribute("src", "/img/enemigo" + String(Math.floor(Math.random() * 7) + 1) + ".png");
    let posicionX = Math.floor(Math.random() * (window.innerWidth - 200)); // Ajusta para no salir de la pantalla
    let posicionY = Math.floor(Math.random() * (window.innerHeight - 200));
>>>>>>> Stashed changes
    enemigo.style.position = "absolute";
    enemigo.style.top = posicionY + "px";
    enemigo.style.left = posicionX + "px";

    // Añadir enemigo al contenedor
    enemigoContainer.appendChild(enemigo);

    // Hacer que el enemigo desaparezca cuando se hace clic en él (disparo)
    enemigo.addEventListener("click", function() {
        contadorPuntos++;
        let Puntos = document.getElementById("contadorPuntos");
        Puntos.textContent = "Puntos: " + contadorPuntos;
        console.log(contadorPuntos);
        tiempo += 2; // Aumentar el tiempo al eliminar un enemigo
        enemigo.remove(); // Elimina el enemigo cuando se hace clic en él
    });
}

// Función para generar enemigos con intervalo decreciente
function generarEnemigosConIntervalo() {
    generarEnemigo(); // Generar un enemigo
    // Reducir el intervalo para la próxima generación
    intervalo = Math.max(intervaloMinimo, intervalo - 50); // Restamos 100ms en cada iteración
    // Programar la siguiente generación de enemigos
    setTimeout(generarEnemigosConIntervalo, intervalo);
}

// Iniciar la generación de enemigos
setTimeout(generarEnemigosConIntervalo, intervalo);

// Hacer la función perder
function perder() {
    alert("Fin del juego");
}