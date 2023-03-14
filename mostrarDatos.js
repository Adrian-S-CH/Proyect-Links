window.onload = function() {
  // Obtenemos los datos guardados en Local Storage
  var datosGuardados = JSON.parse(localStorage.getItem('datos'));
  console.log(datosGuardados);
  
  // Si hay datos guardados, los mostramos en la tabla
  if (Array.isArray(datosGuardados)) {
    var tabla = document.getElementById('datos');
    for (var i = 0; i < datosGuardados.length; i++) {
      var fila = tabla.insertRow();
      var linkCell = fila.insertCell(0);
      var tituloCell = fila.insertCell(1);
      var descCell = fila.insertCell(2);
      linkCell.innerHTML = "<a href='" + datosGuardados[i].link + "'>" + "Enlace" + "</a>";
      tituloCell.innerHTML = datosGuardados[i].titulo;
      descCell.innerHTML = datosGuardados[i].descripción;
    }
  }

};
