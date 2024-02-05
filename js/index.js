//primera seccion de carrusel
document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel');

    setInterval(function () {
        carrusel.style.transform = 'translateX(-100%)';
        setTimeout(function () {
            carrusel.appendChild(carrusel.firstElementChild);
            carrusel.style.transition = 'none';
            carrusel.style.transform = 'translateX(0)';
            setTimeout(function () {
                carrusel.style.transition = 'transform 1s ease-in-out';
            });
        }, 1000);
    }, 5000); // Cambia la duración del intervalo según tus preferencias
});