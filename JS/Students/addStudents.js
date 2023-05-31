let formularioEstudiante = document.getElementById('formAdd');
const addStudent = new bootstrap.Modal(document.getElementById('modalAdd'));

function showModalAdd(){
    addStudent.show();
}

formularioEstudiante.addEventListener('submit', function(e){
e.preventDefault();
const datasend ={
    cedula:document.getElementById('cedulaAdd').value,
    correoelectronico:document.getElementById('correoelectronicoAdd').value,
    telefono:document.getElementById('telefonoAdd').value,
    telefonocelular:document.getElementById('telefonocelularAdd') .value,
    fechanacimiento:document.getElementById('fechanacimientoAdd').value,
    sexo:document.getElementById('sexoAdd').value,
    direccion:document.getElementById('direccionAdd').value,
    nombre:document.getElementById('nombreAdd').value, 
    apellidopaterno:document.getElementById('apellidopaternoAdd').value,
    apellidomaterno:document.getElementById('apellidomaternoAdd').value,
    nacionalidad:document.getElementById('nacionalidadAdd').value,
    idCarreras:document.getElementById('idCarrerasAdd').value,
    usuario:"Jeremy"
    
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
fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php",
{
    method:"POST",
    body: JSON.stringify(datasend)
})//url de peticion
.then(function (response) {
  console.log("prueba 1");
    //Manejo la respuesta de la API
    if (response.ok) {
      alert("Datos Agregados correctamente.");
      addStudent.hide(); // Oculta el modal
     
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