let formularioCurso = document.getElementById('formAddC');
const addCourse = new bootstrap.Modal(document.getElementById('modalAddC'));

function showModalAdd(){
  addCourse.show();
}

formularioCurso.addEventListener('submit', function(e){
e.preventDefault();
const datasend ={
    nombre:document.getElementById('nombreAdd').value,
    descripcion:document.getElementById('descripcionAdd').value,
    tiempo:document.getElementById('tiempoAdd').value,
    usuario: 'Jeremy'
};
console.log(datasend);
 if (Object.entries(datasend).some(([key, value]) => value === "") == true) {
     console.log("datos");
     alert("Datos Vacios");
     return;
   } else {
     console.log("aprobado");
   }
console.log(datasend);
fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
{
    method:"POST",
    body: JSON.stringify(datasend)
})//url de peticion
.then(function (response) {
  console.log("prueba 1");
    //Manejo la respuesta de la API
    if (response.ok) {
      alert("Curso agregado correctamente.");
      addCourse.hide(); // Oculta el modal
      
      contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
      cargarDatos(); // Vuelve a cargar los datos actualizados

    } else {
      alert("Error al enviar los datos.");
    }
  })
  .catch(function (error) {
    console.log(error);
    alert("Error al enviar los datos Catch");
  });
});