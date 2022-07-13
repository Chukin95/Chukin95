if (document.getElementById("appCategoria")) {
    const app1 = new Vue({
        el: "#appCategoria",
        data: {
            datos: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'https://pc-componentes.herokuapp.com/categorias'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.datos = data;
                        this.loading = false;
                        console.log(this.datos)             
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(id) {
                const url = 'https://pc-componentes.herokuapp.com/categorias/' + id;              
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
}
