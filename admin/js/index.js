function guardarCategoria() {

  let d = document.getElementById("txtDescripcion").value
  
  let producto = {
      descripcion:d,
  }
  let url = "https://pc-componentes.herokuapp.com/categorias"

  var options = {
      body: JSON.stringify(producto),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  }
  fetch(url, options)
      .then(function () {
          console.log("creado")
          alert("Grabado")

          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          alert("Error al grabar" )

          console.error(err);
      })
}
function guardarProducto() {

  let n = document.getElementById("txtNombre").value
  let d = document.getElementById("txtDescripcion").value
  let su = parseInt(document.getElementById("txtCategoria").value)
  let p = parseFloat(document.getElementById("txtPrecio").value)
  let s = parseInt(document.getElementById("txtStock").value)
  let f = document.getElementById("txtImagen").value
  let ds = parseInt(document.getElementById("txtDescuento").value)
  
  let producto = {
      nombre: n,
      descripcion:d,
      categoria:su,
      precio: p,
      stock: s,
      imagen:f,
      descuento:ds
  }
  let url = "https://pc-componentes.herokuapp.com/productos"

  var options = {
  body: JSON.stringify(producto),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     // redirect: 'follow'
  }
  fetch(url, options)
      .then(function () {
          console.log("creado")
          alert("Grabado")

          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          alert("Error al grabar" )

          console.error(err);
      })
}



 
function modificarProductos() {
  let id = document.getElementById("txtId").value
  let n = document.getElementById("txtNombre").value
  let d = document.getElementById("txtDescripcion").value
  let su = parseInt(document.getElementById("txtCategoria").value)
  let p = parseFloat(document.getElementById("txtPrecio").value)
  let s = parseInt(document.getElementById("txtStock").value)
  let f =document.getElementById("txtImagen").value
  let ds = parseInt(document.getElementById("txtDescuento").value)
  
  
  let producto = {
      nombre: n,
      descripcion:d,
      categoria:su,
      precio: p,
      stock: s,
      imagen:f,
      descuento:ds
  }
 // let url = "http://192.168.1.115:8080/productos/"+id
  let url = "http://localhost:5000/productos/"+id
  var options = {
      body: JSON.stringify(producto),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      //redirect: 'follow'
  }
  fetch(url, options)
      .then(function () {
          console.log("modificado")
          alert("Registro modificado")
          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          console.error(err);
          alert("Error al Modificar")
      })      
}
 
function modificarCategoria() {
  let id = document.getElementById("txtId").value
  let d = document.getElementById("txtDescripcion").value
  
  
  let categoria = {
      descripcion:d
  }
  let url = "http://localhost:5000/categorias/"+id
  var options = {
      body: JSON.stringify(categoria),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      //redirect: 'follow'
  }
  fetch(url, options)
      .then(function () {
          console.log("modificado")
          alert("Registro modificado")
          // Handle response we get from the API
      })
      .catch(err => {
          //this.errored = true
          console.error(err);
          alert("Error al Modificar")
      })      
}

