function cargarDatosEstudiante(){
    alert('Cargue datos');
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")//url de peticion de datos
    .then(respuesta => respuesta.json())//recibe los datos en formato json
   .then((datosrepuesta) => {
        steTabla(datosrepuesta.data)//lo envio para la funcion para darle tratamiento
   // console.log('Datos',datosrepuesta.data)//Muestra el resultado de la peticion
   })
   .catch(console.log)//muestra errores
}


function steTabla(datos){
    console.log('dato.........s', datos);
    contenidoTablaResultado.innerHTML = 'test';
    for (const valor of datos) {
        contenidoTablaResultado.innerHTML += `
                    <tr class="table-primary" >
                        <td scope="row">${valor.id}</td>
                        <td>${valor.cedula}</td>
                        <td>${valor.correoelectronico}</td>
                        <td>${valor.telefono}</td>
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
                          <a name="" id="" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.nombre}', '${valor.descripcion}', '${valor.tiempo}')" role="button">Editar</a>
                        </td>
                    </tr>`; 
    }
}