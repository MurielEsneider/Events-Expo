
///////////////////////////////ELEMENTOHTML/////////////////////////////////////

//SELECIONAR UN ELEMENTO POR SU ID
var titulo = document.getElementById('tituloPrincipal')
titulo.innerText = "Nuevo titulo"

//SELECIONAR UN ELEMENTO POR SU CLASE
var parrafo = document.querySelector(".contenido");
//OBTENER EL ELEMENTO
var textParrafo = parrafo.innerText;
console.log(textParrafo);

//CREAR UN ELEMENTO P
var nuevoParrafo = document.createElement("p");
//ASIGNAR TEXTO AL NUEVO ELEMENTO
nuevoParrafo.innerText = "Este en un nuevo párrafo."
//AGREGAR EL NUEVO ELEMENTO AL DOCUMENTO
document.body.appendChild(nuevoParrafo);

///////////////////////////////ELEMENTOHTML/////////////////////////////////////
