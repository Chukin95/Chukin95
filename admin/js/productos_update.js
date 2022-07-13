var id = location.search.substring(4).split('&');
// lee los argumentos pasados a este formulario

const app = new Vue({
    el: "#app",
    data: {
        productos: [],
        categorias:{},
        errored: false,
        loading: true
    },
    created() {
        var url = 'https://pc-componentes.herokuapp.com/productos/'+id  //localhost:5000/produtos/2
        var urlCategoria = 'https://pc-componentes.herokuapp.com/categorias/'
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
        
    }
})
