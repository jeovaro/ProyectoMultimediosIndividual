var contenidoTablaResultado = document.querySelector('#resultados');

    function cargarDatos(){
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php")//url de peticion de datos
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
                        <td>${valor.idCarreras}</td>
                        <td>${valor.usuario}</td>
                        <td>${valor.nacionalidad}</td>
                        <td>
                          <a name="" id="" class="btn btn-danger" onclick="showModalDelete(
                            '${valor.id}',
                            '${valor.cedula}',
                            '${valor.nombre}',
                            '${valor.apellidopaterno}',
                            '${valor.apellidomaterno}'
                            )" role="button">Eliminar</a>
                          ||
                          <a name="" id="" class="btn btn-primary" onclick="editarProfesor(
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
                                '${valor.idCarreras}',
                                '${valor.usuario}',
                                '${valor.nacionalidad}'
                               )" role="button">Modificar</a>
                               
                        </td>
                    </tr>`; 
    }
}



    