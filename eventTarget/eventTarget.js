document.getElementById('myForm').addEventListener('submit', event => {
    event.preventDefault(); // Evitar que se envíe el formulario
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  });