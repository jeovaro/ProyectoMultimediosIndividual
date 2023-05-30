var contenidoTablaResultado = document.querySelector('#resultados');

    function cargarDatos(){
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")//url de peticion de datos
    .then(respuesta => respuesta.json())//recibe los datos en formato json
   .then((datosrepuesta) => {
        steTabla(datosrepuesta.data)//lo envio para la funcion para darle tratamiento
   // console.log('Datos',datosrepuesta.data)//Muestra el resultado de la peticion
   })
   .catch(console.log)//muestra errores
}


function steTabla(datos){
    for (const valor of datos) {
        contenidoTablaResultado.innerHTML += `
                    <tr class="table-primary" >
                        <td scope="row">${valor.id}</td>
                        <td>${valor.cedula}</td>
                        <td>${valor.correoelectronico}</td>
                        <td>${valor.telefono}</td>
                        <td>${valor.telefonocelular}</td>
                        <td>${valor.fechanacimiento}</td>
                        <td>${valor.sexo}</td>
                        <td>${valor.direccion}</td>
                        <td>${valor.nombre}</td>
                        <td>${valor.apellidopaterno}</td>
                        <td>${valor.apellidomaterno}</td>
                        <td>${valor.nacionalidad}</td>
                        <td>${valor.idCarreras}</td>
                        <td>${valor.usuario}</td>
                        <td>
                          <a name="" id="" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                          ||
                          <a name="" id="" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#editStudent" 
                          onclick="editarEstudiante(
                                '${valor.id}', 
                                '${valor.cedula}',                      
                                '${valor.correoelectronico}',
                                '${valor.telefono}', 
                                '${valor.telefonocelular}',
                                '${valor.fechanacimiento}',                  
                                '${valor.sexo}', 
                                '${valor.direccion}', 
                                '${valor.nombre}', 
                                '${valor.apellidopaterno}', 
                                '${valor.apellidomaterno}',
                                '${valor.nacionalidad}', 
                                '${valor.idCarreras}', 
                                '${valor.usuario}')" role="button">Editar</a>
                        </td>
                    </tr>`; 
    }
}


   



    let formularioEstudiante = document.getElementById('formularioEstudiante');

    formularioEstudiante.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Agregando');


    const datasend ={
        id:document.getElementById('id').value,
        cedula:document.getElementById('cedula').value,
        correoelectronico:document.getElementById('correoelectronico').value,
        telefono:document.getElementById('telefono').value,
        telefonocelular:document.getElementById('telefonocelular') .value,
        fechanacimiento:document.getElementById('fechanacimiento').value,
        sexo:document.getElementById('sexo').value,
        direccion:document.getElementById('direccion').value,
        nombre:document.getElementById('nombre').value, 
        apellidopaterno:document.getElementById('apellidopaterno').value,
        apellidomaterno:document.getElementById('apellidomaterno').value,
        nacionalidad:document.getElementById('nacionalidad').value,
        idCarreras:document.getElementById('idCarreras').value,
        usuario:"Jeremy"

  
    };
    console.log(datasend);
    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php",
    {
        method:"POST",
        body: JSON.stringify(datasend)
    })//url de peticion
    .then(answer => answer.json())//recibe y envia en json
    .then((answerdata) => {
        console.log(answerdata)//muestra el resultado 

    })
    .catch(console.log);
    });



    function editarEstudiante(id, cedula, correoelectronico, telefono, telefonocelular,fechanacimiento,sexo,
        direccion,nombre,apellidopaterno,apellidomaterno,nacionalidad,idCarreras, usuario) {
     
        document.getElementById("id").value = id;
        document.getElementById("cedula").value = cedula;
        document.getElementById("correoelectronico").value = correoelectronico;
        document.getElementById("telefono").value = telefono;
        document.getElementById("telefonocelular").value = telefonocelular;
        document.getElementById("fechanacimiento").value = fechanacimiento;
        document.getElementById("sexo").value = sexo;
        document.getElementById("direccion").value = direccion;
        document.getElementById("nombre").value = nombre;
        document.getElementById("apellidopaterno").value = apellidopaterno;
        document.getElementById("apellidomaterno").value = apellidomaterno;
        document.getElementById("nacionalidad").value = nacionalidad;
        document.getElementById("idCarreras").value = idCarreras;
        document.getElementById("usuario").value = usuario;
        console.log(id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nacionalidad,nombre,apellidomaterno,apellidopaterno,usuario,idCarreras);


      }

    cargarDatos();