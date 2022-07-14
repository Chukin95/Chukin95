var id = location.search.substring(4).split('&');
// lee los argumentos pasados a este formulario

const app = new Vue({
    el: "#appCategoria",
    data: {
        categorias:[], // o {} 
        errored: false,
        loading: true
    },
    created() { 
        var urlCategoria = 'https://pc-componentes.herokuapp.com/categorias/'+id
        this.fetchData(urlCategoria)
    },
    methods: {
        fetchData(urlCategoria) {
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

