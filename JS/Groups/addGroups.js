let formularioGrupo = document.getElementById('formAddG');
const addGroup = new bootstrap.Modal(document.getElementById('modalAddG'));

function showModalAdd(){
    addGroup.show();
}

formularioGrupo.addEventListener('submit', function(e){
e.preventDefault();
const datasend ={
    nombre:document.getElementById('nombreAdd').value
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
fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php",
{
    method:"POST",
    body: JSON.stringify(datasend)
})//url de peticion
.then(function (response) {
  console.log("prueba 1");
    //Manejo la respuesta de la API
    if (response.ok) {
      alert("Grupo agregado correctamente.");
      addGroup.hide(); // Oculta el modal

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