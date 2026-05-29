const botonTema = document.getElementById('boton-tema');

botonTema.addEventListener('click', function () {
    document.body.classList.toggle('modo-claro');

    if (document.body.classList.contains('modo-claro')) {
        botonTema.textContent = '🌙 Modo oscuro';
    } else {
        botonTema.textContent = '☀️ Modo claro';
    }
});
