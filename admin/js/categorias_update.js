var id = location.search.substring(4).split('&');
// lee el argumento id pasados a este formulario

const app = new Vue({
    el: "#appCategoria",
    data: {
        datos: [],
        errored: false,
        loading: true
    },
    created() {
        var url = 'https://pc-componentes.herokuapp.com/categorias/'+id  //localhost:5000/categorias/2
    
        this.fetchData(url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.datos = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },        
    }
})
