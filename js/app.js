let pantalla = document.getElementById('pantalla');

let iniciar = document.getElementById('iniciar');

let pausa = document.getElementById('pausa');

let reiniciar = document.getElementById('reiniciar');

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

iniciar.addEventListener('click', function() {
    timer = setInterval(function() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        pantalla.textContent = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }, 1000);
    iniciar.disabled = true;
    pausa.disabled = false;
    reiniciar.disabled = false;
});

pausa.addEventListener('click', function() {
    clearInterval(timer);
    iniciar.disabled = false;
    pausa.disabled = true;
    reiniciar.disabled = false;
});

reiniciar.addEventListener('click', function() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    pantalla.textContent = '00:00:00';
    iniciar.disabled = false;
    pausa.disabled = true;
    reiniciar.disabled = true;
});

pausa.disabled = true;

reiniciar.disabled = true;
