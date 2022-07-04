if (document.getElementById("app")) { // si existe el elemento con id app
    const app = new Vue({ // crea una instancia de Vue
        el: "#app", // selecciona el elemento con id app
        data: { // crea un objeto para guardar los datos
            productos: [], // crea un array para guardar los productos
            errored: false, // crea una variable para controlar si hay un error
            loading: true // crea una variable para controlar si se está cargando
        },
        created() { // función para crear el componente
            var url = 'http://localhost:5000/productos' // crea la url para obtener los productos
            this.fetchData(url) // realiza la petición
        },
        methods: { // crea un objeto para guardar los métodos
            fetchData(url) { // función para obtener los productos
                fetch(url) // realiza la petición
                    .then(response => response.json()) // función para manejar la respuesta de la petición
                    .then(data => { // función para manejar los datos de la respuesta
                        this.productos = data; // asigna los datos al array productos
                        this.loading = false; // cambia el valor de la variable loading a false
                    })
                    .catch(err => { // función para manejar el error de la petición
                        this.errored = true // cambia el valor de la variable errored a true
                    })
            },
            eliminar(producto) { // función para eliminar un producto
                const url = 'http://localhost:5000/producto/' + producto; // crea la url para eliminar el producto
                var options = { // crea un objeto para guardar las opciones de la petición
                    method: 'DELETE', // asigna el método de la petición
                }
                fetch(url, options) // realiza la petición
                    .then(res => res.text()) // función para manejar la respuesta de la petición o res.json() para obtener los datos en formato json
                    .then(res => { // función para manejar los datos de la respuesta
                        location.reload(); // recarga la página
                    })
            }
        }
    })
}
