const editGroup = new bootstrap.Modal(document.getElementById('modalEditG'))


function editarGrupo(id, nombre) {
    editGroup.show();
    document.getElementById("idEdit").value = id;
    document.getElementById("nombreEdit").value = nombre;
  }

  let formularioEditar = document.getElementById('formEditG'); 
  formularioEditar.addEventListener('submit', function(e){
    e.preventDefault();
    // Obtener los valores de los campos de entrada
    let id = document.getElementById("idEdit").value;
    let nombre = document.getElementById("nombreEdit").value;


    var datasend = {
      id:id,
      nombre: nombre,
    };
    console.log(datasend);
     if (Object.entries(datasend).some(([key, value]) => value === "") == true) {
      
         alert("Datos Vacios");
         return;
       } else {
         console.log("aprobado");
         
       }
  
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php",
    {
        method:"POST",
        body: JSON.stringify(datasend)
    })//url de peticion
    .then(function (response) {
  
        //Manejo la respuesta de la API
        if (response.ok) {
          alert("Datos del grupo modificados correctamente.");
          
          editGroup.hide(); // Oculta el modal
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