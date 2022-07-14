// var id = location.search.substring(4).split('&');
// // lee los argumentos pasados a este formulario

// const app = new Vue({
//     el: "#appCategoria",
//     data: {
//         categorias:[], // o {} 
//         errored: false,
//         loading: true
//     },
//     created() { 
//         var urlCategoria = 'https://pc-componentes.herokuapp.com/categorias'+id
//         this.fetchData(urlCategoria)
//     },
//     methods: {
//         fetchData(urlCategoria) {
//             fetch(urlCategoria)
//                 .then(response => response.json())
//                 .then(data => {
//                     this.categorias = data;
//                     this.loading = false;
//                 })
//                 .catch(err => {
//                     this.errored = true
//                 })
//         },
        
//     }
// })

var id = location.search.substring(4).split('&');
// lee los argumentos pasados a este formulario

const appCategoria = new Vue({
    el: "#appCategoria",
    data: {
        productos: [],
        categorias:{},
        errored: false,
        loading: true
    },
    created() {
        var url = 'https://pc-componentes.herokuapp.com/productos'+id  //localhost:5000/produtos/2
        var urlCategoria = 'https://pc-componentes.herokuapp.com/categorias'
        this.fetchData(url,urlCategoria)
    },
    methods: {
        fetchData(url,urlCategoria) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
             //       this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
            fetch(urlCategoria)
                .then(response => response.json())
                .then(data => {
                    this.categorias = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
            },
            eliminar(id) {
                const url = 'https://pc-componentes.herokuapp.com/productos/' + id;
               
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
    }
})
