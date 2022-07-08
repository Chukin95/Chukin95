function guardar() { // función para guardar un producto

    let n = document.getElementById("txtNombre").value // obtiene el nombre del campo de texto
    let i = document.getElementById("txtImagen_url").value // obtiene la url de imagen del campo de texto
    let p = parseFloat(document.getElementById("txtPrecio").value) // obtiene el precio del campo de texto
    let s = parseInt(document.getElementById("txtcantidad").value) // obtiene el cantidad del campo de texto

    let producto = { // crea un objeto para guardar los datos del producto
        nombre: n, // asigna el nombre al objeto
        imagen_url: i, // asigna la url de imagen al objeto
        precio: p, // asigna el precio al objeto
        cantidad: s // asigna el cantidad al objeto
    }
    let url = "http://localhost:5000/productos" // crea la url para guardar el producto
    var options = { // crea un objeto para guardar las opciones de la petición
        body: JSON.stringify(producto), // asigna el objeto producto al cuerpo de la petición
        method: 'POST', // asigna el método de la petición
        headers: { 'Content-Type': 'application/json' }, // asigna el tipo de contenido de la petición
        // redirect: 'follow'
    }
    fetch(url, options) // realiza la petición
        .then(function () { // función para manejar la respuesta de la petición
            console.log("creado") // muestra en la consola que se creó el producto
            alert("Agregado Correctamente!") // muestra un mensaje de alerta

            // Handle response we get from the API
        })
        .catch(err => { // función para manejar el error de la petición
            //this.errored = true
            alert("Error al intentar agregar") // muestra un mensaje de alerta
            console.error(err); // muestra en la consola el error
        })
}
