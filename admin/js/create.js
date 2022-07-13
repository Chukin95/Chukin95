function guardar() { // función para guardar un producto

    let n = document.getElementById("txtNombre").value // obtiene el nombre del campo de texto
    let d = document.getElementById("txtDescripcion").value // obtiene la descripción del campo de texto
    let i = document.getElementById("txtImagen").value // obtiene la url de la imagen del campo de texto
    let p = parseFloat(document.getElementById("txtPrecio").value) // obtiene el precio del campo de texto
    let s = parseInt(document.getElementById("txtcantidad").value) // obtiene el cantidad del campo de texto
    let ds = parseInt(document.getElementById("txtDescuento").value) // obtiene el descuento del campo de texto

    let producto = { // crea un objeto para guardar los datos del producto
        nombre: n, // asigna el nombre al objeto
        descripcion: d, // asigna la descripción al objeto
        imagen: i, // asigna la url de la imagen al objeto
        precio: p, // asigna el precio al objeto
        cantidad: s, // asigna el cantidad al objeto
        descuento: ds // asigna el descuento al objeto
    }
    let url = "https://pc-componentes.herokuapp.com/productos" // crea la url para guardar el producto
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


// Document Object Model
let header_content = `<!-- LOGO A LA IZQUIERDA y NOMBRE DE EMPRESA CON LETRA GRANDE Y PERSONALIZADA -->
<span class="animate__animated animate__backInLeft logo-img">
</span>
<span class="animate__animated animate__bounceInRight logo-text-box">
</span>`;
let navbar_content = `<button class="botonMenu" onclick="accion()">MENÚ</button>
<a class="elementoDeNavegacion desaparece" href="../index.html">Inicio</a>
<a class="elementoDeNavegacion desaparece" href="../productos.html">Productos</a>
<a class="elementoDeNavegacion desaparece" href="../sucursales.html">Sucursales</a>
<a class="elementoDeNavegacion desaparece" href="../contacto.html">Contacto</a>
<a class="elementoDeNavegacion desaparece" href="../conectarse.html">Conectarse</a>
<a class="elementoDeNavegacion desaparece" href="../tateti.html">Tateti</a>`;
let footer_content = `<nav>
<br><br>
<a href="https://www.facebook.com/Braianobregonnn" target="_blank"><img src="../img/iconos/facebook.png" alt="facebook" title="Facebook" width="30px" height="30px"></a>
<a href="https://www.youtube.com" target="_blank"><img src="../img/iconos/youtube.png" alt="youtube" title="Youtube" width="30px" height="30px"></a>
<a href="https://www.twitter.com" target="_blank"><img src="../img/iconos/twitter.png" alt="twitter" title="Twitter" width="30px" height="30px"></a>
<a href="https://www.instagram.com/cebra_phone" target="_blank"><img src="../img/iconos/instagram.png" alt="instagram" title="Instagram" width="30px" height="30px"></a>
<a href="https://www.linkedin.com/in/cristian-javier-gomez-448218215/" target="_blank"><img src="../img/iconos/linkedin.png" alt="linkedin" title="Linkedin" width="30px" height="30px"></a>
<a href="https://www.github.com/Chukin95" target="_blank"><img src="../img/iconos/github.png" alt="github" title="Github" width="30px" height="30px"></a>
<a href="https://wa.me/543624068392?text=Quiero%20más%20información" target="_blank"><img src="../img/iconos/whatsapp.png" alt="whatsapp" title="Whatsapp" width="30px" height="31px"></a>
</nav>
<br>
<p>Copyright © 2022-2025 All Rights Reserved. By <a href="../acerca_de.html">Cristian Gómez</a>.</p>
<br><br>`;

document.getElementById("idheader").innerHTML = header_content;
document.getElementById("idnavbar").innerHTML = navbar_content;
document.getElementById("idfooter").innerHTML = footer_content;

// DOM PARA WHATSAPP FIXED
let whatsapp_div = document.createElement('div');
whatsapp_div.setAttribute('id', 'whatsapp_div');
whatsapp_div.classList.add('whatsapp_container');
let whatsapp_contact = document.createElement('a');
whatsapp_contact.classList.add('whatsapp_contact');
whatsapp_contact.setAttribute('target', '_blank');
whatsapp_contact.setAttribute('href', 'https://web.whatsapp.com/send?phone=5493624068392&amp;text=Hola, tengo una consulta');
let whatsapp_logo = document.createElement('img');
whatsapp_logo.classList.add('whatsapp_logo');
whatsapp_logo.setAttribute('src', '../img/iconos/whatsapp.png');
whatsapp_logo.setAttribute('alt', 'whatsapp');
whatsapp_logo.setAttribute('title', 'Whatsapp');
whatsapp_contact.appendChild(whatsapp_logo);
whatsapp_div.appendChild(whatsapp_contact);
// <i class="fa-solid fa-circle-xmark"></i>
let whatsapp_close = document.createElement('i');
whatsapp_close.classList.add('fa-solid');
whatsapp_close.classList.add('fa-circle-xmark');
whatsapp_close.classList.add('fa-xs');
//whatsapp_close.addEventListener('click', cerrar_whatsapp);
whatsapp_close.classList.add('whatsapp_close');
whatsapp_close.setAttribute('onclick', 'cerrar_whatsapp()');
whatsapp_div.appendChild(whatsapp_close);
document.body.appendChild(whatsapp_div);

function cerrar_whatsapp() {
    document.getElementById("whatsapp_div").style.display = "none";;
}

// SCRIPT PARA EL MENÚ
function accion() {
    let menuElemento = document.getElementsByClassName('elementoDeNavegacion');
    for (let i = 0; i < menuElemento.length; i++) {
        menuElemento[i].classList.toggle('desaparece');
    }
}
let altura = $('.barraDeNavegacion').offset().top;
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > altura) {
            $(".barraDeNavegacion").addClass("barraDeNavegacionfixed");
            $("main").addClass("mainfixed");
            $(".barraDeNavegacion").addClass("animate__fadeInDown");
            $(".barraDeNavegacion").removeClass("animate__fadeInUp");
        }
        else {
            $(".barraDeNavegacion").removeClass("barraDeNavegacionfixed");
            $("main").removeClass("mainfixed");
            $(".barraDeNavegacion").removeClass("animate__fadeInDown");
            $(".barraDeNavegacion").addClass("animate__fadeInUp");
        }
    }
);

// SCRIPT PARA BAJAR EL VOLUMEN INICIAL DE LOS AUDIOS
var audio = document.getElementById("playAudio");
audio.volume = 0.1;