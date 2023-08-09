document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.juego').forEach(juego => {
            juego.textContent.toLowerCase().includes(e.target.value)
            ? juego.classList.remove('filtro')
            : juego.classList.add('filtro')

        });
    };
});