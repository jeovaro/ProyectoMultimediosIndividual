const editStudent = new bootstrap.Modal(document.getElementById('modalId'))


function editarEstudiante(id, cedula, correoelectronico, telefono, telefonocelular,fechanacimiento,sexo,
    direccion,nombre,apellidopaterno,apellidomaterno,nacionalidad,idCarreras, usuario) {
    editStudent.show();
    document.getElementById("idEdit").value = id;
    document.getElementById("cedulaEdit").value = cedula;
    document.getElementById("correoelectronicoEdit").value = correoelectronico;
    document.getElementById("telefonoEdit").value = telefono;
    document.getElementById("telefonocelularEdit").value = telefonocelular;
    document.getElementById("fechanacimientoEdit").value = fechanacimiento;
    document.getElementById("sexoEdit").value = sexo;
    document.getElementById("direccionEdit").value = direccion;
    document.getElementById("nombreEdit").value = nombre;
    document.getElementById("apellidopaternoEdit").value = apellidopaterno;
    document.getElementById("apellidomaternoEdit").value = apellidomaterno;
    document.getElementById("nacionalidadEdit").value = nacionalidad;
    document.getElementById("idCarrerasEdit").value = idCarreras;
    document.getElementById("usuarioEdit").value = usuario;
  }

  let formularioEditar = document.getElementById('editForm'); 
  formularioEditar.addEventListener('submit', function(e){
    e.preventDefault();
    // Obtener los valores de los campos de entrada
    let id = document.getElementById("idEdit").value;
    let cedula = document.getElementById("cedulaEdit").value;
    let correoelectronico = document.getElementById("correoelectronicoEdit").value;
    let telefono = document.getElementById("telefonoEdit").value;
    let telefonocelular = document.getElementById("telefonocelularEdit").value;
    let fechanacimiento = document.getElementById("fechanacimientoEdit").value;
    let sexo = document.getElementById("sexoEdit").value;
    let direccion = document.getElementById("direccionEdit").value;
    let nombre = document.getElementById("nombreEdit").value;
    let apellidopaterno = document.getElementById("apellidopaternoEdit").value;
    let apellidomaterno = document.getElementById("apellidomaternoEdit").value;
    let nacionalidad = document.getElementById("nacionalidadEdit").value;
    let idCarreras = document.getElementById("idCarrerasEdit").value;
    let usuario = document.getElementById("usuarioEdit").value;

    var datasend = {
      id:id,
      cedula: cedula,
      correoelectronico: correoelectronico,
      telefono: telefono,
      telefonocelular: telefonocelular,
      fechanacimiento:fechanacimiento,
      sexo:sexo,
      direccion:direccion,
      nombre:nombre,
      apellidopaterno:apellidopaterno,
      apellidomaterno:apellidomaterno,
      nacionalidad:nacionalidad,
      idCarreras:idCarreras,
      usuario:usuario
    };
    console.log(datasend);
     if (Object.entries(datasend).some(([key, value]) => value === "") == true) {
      
         alert("Datos Vacios");
         return;
       } else {
         console.log("aprobado");
         
       }
  
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php",
    {
        method:"POST",
        body: JSON.stringify(datasend)
    })//url de peticion
    .then(function (response) {
  
        //Manejo la respuesta de la API
        if (response.ok) {
          alert("Datos Modificados correctamente.");
          
          editStudent.hide(); // Oculta el modal
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