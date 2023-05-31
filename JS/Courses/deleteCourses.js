//Se crea el modal fuera de las funciones para apuntar a el modal a la hora de cerrarlo
const deleteCourseMod = new bootstrap.Modal(document.getElementById('modalDeleteC'));

function showModalDelete(id, nombre,descripcion) {
    deleteCourseMod.show();
  document.getElementById("idDelete").value = id;
  document.getElementById("nombreDelete").value = nombre;
  document.getElementById("descripcionDelete").value = descripcion;

}
function deleteCourse() {
  const datasend = {
    id:document.getElementById('idDelete').value,
  };
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php",
    {
      method: 'POST',
      body: JSON.stringify(datasend)
    }).then(function (response) {
      //Manejo la respuesta de la API
      if (response.ok) {
        deleteCourseMod.hide(); // Oculta el modal
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