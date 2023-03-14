window.onload = function() {
  const input = document.getElementById('link');
  const input2 = document.getElementById('descripcion');
  const input3 = document.getElementById('titulo');

  // Agregamos el evento submit al formulario
  var formulario = document.querySelector('form');
  formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Prevenimos el envío del formulario

  // Obtenemos los datos guardados en Local Storage
  var datosGuardados = JSON.parse(localStorage.getItem('datos'));

  // Validamos que los campos del formulario no estén vacíos
  const link = document.querySelector('#link').value;
  const titulo = document.querySelector('#titulo').value;
  if (!datosGuardados) {
  datosGuardados = [];
  }
  if (validarLink(link)) {
    const descripcion = document.querySelector('#descripcion').value;
    const datos = {
      link: link,
      titulo: titulo,
      descripcion: descripcion
    };
    datosGuardados.push(datos);

    // Guardamos el array en el Local Storage
    localStorage.setItem('datos', JSON.stringify(datosGuardados));
    input.value='';
    input2.value='';
    input3.value='';
  } else {
    alert('El link no es una URL válida.');
  }

  });

};
function validarLink(link){
  let pr = "https://";
  for (var i = 0; i < pr.length; i++) {
    if (pr.charAt(i)!=link.charAt(i)) {
      return false;
    }
  }
  return true;
}
