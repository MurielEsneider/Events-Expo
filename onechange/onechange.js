const input = document.getElementById('myInput');
  function handleChange(event) {
    console.log(event.target.value);
    input.removeEventListener('change', handleChange);
  }
  input.addEventListener('change', handleChange);




  const form = document.getElementById('myForm');
  function handleSubmit(event) {
    event.preventDefault(); // Evitar el envío predeterminado
    console.log('Formulario enviado');
  }
  function handleChange() {
    console.log('Campo cambiado');
    form.removeEventListener('change', handleChange);
  }
  form.addEventListener('change', handleChange);
  form.addEventListener('submit', handleSubmit);






  const select = document.getElementById('mySelect');
  function handleChange(event) {
    console.log('Valor seleccionado:', event.target.value);
    select.removeEventListener('change', handleChange);
  }
  select.addEventListener('change', handleChange);