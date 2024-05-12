// Almacenar un valor
sessionStorage.setItem('usuario', 'Juan');

// Obtener el valor almacenado
const usuario = sessionStorage.getItem('usuario');
console.log(usuario); // Imprime: Juan





// Almacenar un objeto como JSON
const persona = { nombre: 'María', edad: 25 };
sessionStorage.setItem('persona', JSON.stringify(persona));

// Obtener y parsear el objeto almacenado
const personaGuardada = JSON.parse(sessionStorage.getItem('persona'));
console.log(personaGuardada); // Imprime: { nombre: 'María', edad: 25 }






// Eliminar un valor
sessionStorage.removeItem('usuario');

// Verificar si el valor ha sido eliminado
const usuarioEliminado = sessionStorage.getItem('usuario');
console.log(usuarioEliminado); // Imprime: null
