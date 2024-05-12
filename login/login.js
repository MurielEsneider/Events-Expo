document.getElementById('inicio').addEventListener('sumbit', function(){
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let contraseña = document.getElementById('contraseña').value;

    //ALMACENAR LAS CREDENCIALES EN LOCALSTORAGE

    localStorage.setItem('Nombre de usuario', nombreUsuario);
    localStorage.setItem('Contraseña', contraseña);

    alert('Credenciales almacenadas en localStorage. puedes verificar en consola');
});