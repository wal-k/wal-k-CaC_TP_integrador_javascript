     /*
     const eliminarOrador = (id) => {
            const respuesta = fetch(`http://localhost:8080/web-app/api/orador?id=${id}`,{
                method: 'DELETE'
            });

            //2 intento reosolver la promesa
            respuesta
                .then(response => response)
                .then(respuesta => {
                    //actualizar el div del html con la informacion
                    alert(`Se ha elikminado el orador id: ${id}`);
                })
                .catch(error => console.log(error))     
        }

        const nuevoOrador =  () => {
            debugger;
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const mail = document.getElementById('mail').value;
            const tema = document.getElementById('tema').value;

            const orador = {
                nombre,
                apellido,
                mail,
                tema
            };

            //post al servidor
            //1 preparo la peticion
            const respuesta = fetch('http://localhost:8080/web-app/api/orador',{
                method: 'POST',
                body: JSON.stringify(orador)
            });

            //2 intento reosolver la promesa
            respuesta
                .then(response => response.json())
                .then(respuesta => {
                    //actualizar el div del html con la informacion
                    alert(`Se ha dado de alta el orador id: ${respuesta.id}`);
                })
                .catch(error => console.log(error))        
        }

        function listarOradores () {

            //1 preparo la peticion
            const respuesta = fetch('http://localhost:8080/web-app/api/orador');

            //2 intento reosolver la promesa
            respuesta
                .then(response => response.json())
                .then(users => {
                    //actualizar el div del html con la informacion
                    dibujarTabla(users)
                })
                .catch(error => console.log(error))
        }

        function dibujarTabla(data) {
            const rows = dibujarFilas(data);    
            document.getElementById('usersRows').innerHTML = rows;
        }    
        function dibujarFilas(oradores) {
            let rows = ``;
            for(let orador of oradores) {//ctrl+d ctr+f2
                //console.log(user)
                rows += `
                <tr>
                    <th scope="row">${orador.id}</th>
                    <td>${orador.nombre}</td>
                    <td>${orador.apellido}</td>
                    <td>${orador.tema}</td>
                    <td>
                        <button onClick="eliminarOrador(${orador.id})">Eliminar</button>
                    </td>
                </tr>
                `
            }
            return rows;
        }
        document.getElementById('btnListado').addEventListener('click',listarOradores);

        document.getElementById('btnGrabar').addEventListener('click',nuevoOrador);
*/