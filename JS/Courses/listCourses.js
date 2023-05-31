var contenidoTablaResultado = document.querySelector('#resultados');

    function cargarDatos(){
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//url de peticion de datos
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
                        <td>${valor.nombre}</td>
                        <td>${valor.descripcion}</td>
                        <td>${valor.tiempo}</td>
                        <td>${valor.usuario}</td>
                        <td>
                          <a name="" id="" class="btn btn-danger" onclick="showModalDelete(
                            '${valor.id}',
                            '${valor.nombre}',
                            '${valor.descripcion}'
                            )" role="button">Eliminar</a>
                          ||
                          <a name="" id="" class="btn btn-primary" onclick="editarCurso(
                                '${valor.id}',
                                '${valor.nombre}',
                                '${valor.descripcion}',
                                '${valor.tiempo}',
                                '${valor.usuario}'
                               )" role="button">Modificar</a>
                               
                        </td>
                    </tr>`; 
    }
}



    