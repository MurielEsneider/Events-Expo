///////////////////////////////OBJETO WINDOW/////////////////////////////////////
//GUARDAR DATOS EN LOCARSTORAGE
window.localStorage.setItem('usuario', 'Juan');

//OBTENER DATOS DE LOCALSTORAGE

const usuario = window.localStorage.getItem('usuario');
console.log(usuario); 

//ABRIR UNA VENTANA DEL NAVEGADOR
function abrirVentana(){
    window.open ('https://www.google.com', 'blank', 'width=600, height=400');

}
//EVENTO DOMCONTENT QUE SE DISPARA CUANDO SE HA CARGADO
window.addEventListener('DOMContentLoaded', (Event) => {
    console.log('DOM completamente cargado y analizado.')
})
///////////////////////////////OBJETO WINDOW/////////////////////////////////////