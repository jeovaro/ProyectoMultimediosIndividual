//Se crea el modal fuera de las funciones para apuntar a el modal a la hora de cerrarlo
const deleteStudentMod = new bootstrap.Modal(document.getElementById('modalDelete'));

function showModalDelete(id, cedula,nombre,apellidopaterno,apellidomaterno) {
    deleteStudentMod.show();
  document.getElementById("idDelete").value = id;
  document.getElementById("cedulaDelete").value = cedula;
  document.getElementById("nombreDelete").value = nombre;
  document.getElementById("apellidopaternoDelete").value = apellidopaterno;
  document.getElementById("apellidomaternoDelete").value = apellidomaterno;
}
function deleteStudent() {
  const datasend = {
    id:document.getElementById('idDelete').value,
  };
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php",
    {
      method: 'POST',
      body: JSON.stringify(datasend)
    }).then(function (response) {
      //Manejo la respuesta de la API
      if (response.ok) {
        deleteStudentMod.hide(); // Oculta el modal
        contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
        cargarDatos(); // Vuelve a cargar los datos actualizados
        alert("Eliminando registro!");
      } else {
        alert("Error al enviar los datos.");
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("Error al enviar los datos Catch");
    });
}
cargarDatos();