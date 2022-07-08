var args = location.search.substr(1).split('&'); // lee los argumentos de la url y los guarda en un objeto

var parts = [] // array para guardar los argumentos
for (let i = 0; i < args.length; ++i) { // recorre el array de argumentos
    parts[i] = args[i].split('='); // divide los argumentos en dos partes, el nombre y el valor
}
console.log(args) // muestra los argumentos en la consola
document.getElementById("txtId").value = parts[0][1] // muestra el id en el campo de texto
document.getElementById("txtNombre").value = decodeURI(parts[1][1]) // muestra el nombre decodificado en el campo de texto
document.getElementById("txtPrecio").value = parts[2][1] // muestra el precio en el campo de texto
document.getElementById("txtcantidad").value = parts[3][1] // muestra el cantidad en el campo de texto

function modificar() { // función para modificar un producto
    let id = document.getElementById("txtId").value // obtiene el id del campo de texto
    let n = document.getElementById("txtNombre").value // obtiene el nombre del campo de texto
    let p = parseFloat(document.getElementById("txtPrecio").value) // obtiene el precio del campo de texto
    let s = parseInt(document.getElementById("txtcantidad").value) // obtiene el cantidad del campo de texto
    let producto = { // crea un objeto para guardar los datos del producto
        nombre: n, // asigna el nombre al objeto
        precio: p, // asigna el precio al objeto
        cantidad: s // asigna el cantidad al objeto
    }
    let url = "http://localhost:5000/productos/" + id // crea la url para modificar el producto
    var options = { // crea un objeto para guardar las opciones de la petición
        body: JSON.stringify(producto), // asigna el objeto producto al cuerpo de la petición
        method: 'PUT', // asigna el método de la petición
        headers: { 'Content-Type': 'application/json' }, // asigna el tipo de contenido de la petición
        redirect: 'follow' // asigna el valor de redireccionamiento
    }
    fetch(url, options) // realiza la petición
        .then(function () { // función para manejar la respuesta de la petición
            console.log("modificado") // muestra en la consola que se modificó el producto
            alert("Registro modificado") // muestra un mensaje de alerta
            // Handle response we get from the API
        })
        .catch(err => { // función para manejar el error de la petición
            //this.errored = true
            console.error(err); // muestra en la consola el error
            alert("Error al Modificar") // muestra un mensaje de alerta
        })
}
