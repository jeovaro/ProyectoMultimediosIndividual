const editCourse = new bootstrap.Modal(document.getElementById('modalEditC'))


function editarCurso(id, nombre, descripcion, tiempo, usuario) {
    editCourse.show();
    document.getElementById("idEdit").value = id;
    document.getElementById("nombreEdit").value = nombre;
    document.getElementById("descripcionEdit").value = descripcion;
    document.getElementById("tiempoEdit").value = tiempo;
    document.getElementById("usuarioEdit").value = usuario;
  }

  let formularioEditar = document.getElementById('formEditC'); 
  formularioEditar.addEventListener('submit', function(e){
    e.preventDefault();
    // Obtener los valores de los campos de entrada
    let id = document.getElementById("idEdit").value;
    let nombre = document.getElementById("nombreEdit").value;
    let descripcion = document.getElementById("descripcionEdit").value;
    let tiempo = document.getElementById("tiempoEdit").value;
    let usuario = document.getElementById("usuarioEdit").value;

    var datasend = {
      id:id,
      nombre: nombre,
      descripcion: descripcion,
      tiempo: tiempo,
      usuario: usuario
    };
    console.log(datasend);
     if (Object.entries(datasend).some(([key, value]) => value === "") == true) {
      
         alert("Datos Vacios");
         return;
       } else {
         console.log("aprobado");
         
       }
  
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
    {
        method:"POST",
        body: JSON.stringify(datasend)
    })//url de peticion
    .then(function (response) {
  
        //Manejo la respuesta de la API
        if (response.ok) {
          alert("Datos del curso modificados correctamente.");
          
          editCourse.hide(); // Oculta el modal
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