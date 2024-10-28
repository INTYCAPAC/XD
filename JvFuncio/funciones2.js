const bott_dado = document.getElementById("dado");
var soni = new Audio("efect1.mp3");  // Sonido de fondo mientras se decide el resultado
let soni1 = new Audio("efect2.mp3"); // Sonido de ganar
let soni2 = new Audio("efect3.mp3"); // Sonido de perder

bott_dado.addEventListener("click", () => {
    soni.loop = true; // Hace que el sonido se repita en bucle hasta que se detenga
    soni.play(); // Reproduce el sonido de fondo al hacer clic
    const opcionUSER = Math.floor(Math.random() * 6) + 1;  // Genera un nuevo número en cada ronda
    jugar(opcionUSER);
});

function jugar(opcion) {
    alert("EL JUGADOR SACÓ...");
    const opcionPC = Math.floor(Math.random() * 6) + 1;
    alert("LA MÁQUINA SACÓ...");

    soni.pause(); // Detiene el sonido de fondo antes de los sonidos de resultado
    soni.currentTime = 0; // Reinicia el sonido de fondo para la próxima vez

    if (opcion === opcionPC) {
        alert("JUGADOR SACÓ: " + opcion);
        alert("MAQUINA SACÓ: " + opcionPC);
        alert("¡EMPATAMOS!");
        alert(" (ง︡'-'︠)ง");
    } else if (opcion > opcionPC) {
        alert("JUGADOR SACÓ: " + opcion);
        alert("MAQUINA SACÓ: " + opcionPC);
        soni1.play(); // Reproduce el sonido de victoria
        alert("¡GANAMOS GOD!");
        alert ("(͡° ͜ʖ ͡°)");
    } else {
        alert("JUGADOR SACÓ: " + opcion);
        alert("MAQUINA SACÓ: " + opcionPC);
        soni2.play(); // Reproduce el sonido de derrota
        alert("¡PERDIMOS RAYOS!");
        alert("( ˘︹˘ )");
    }
}
