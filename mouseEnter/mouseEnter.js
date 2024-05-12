const caja = document.getElementById('miCaja');

    caja.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'red';
    });




const boton = document.getElementById('miBoton');
boton.addEventListener('mouseenter', function() {
    alert('¡El ratón está sobre el botón!');
});





const parrafo = document.getElementById('miParrafo');

    parrafo.addEventListener('mouseenter', function() {
      this.classList.add('resaltado');
    });

    parrafo.addEventListener('mouseleave', function() {
      this.classList.remove('resaltado');
    });