if (document.getElementById("app")) { // si existe el elemento con id app
    const app = new Vue({ // crea una instancia de Vue
        el: "#app", // selecciona el elemento con id app
        data: { // crea un objeto para guardar los datos
            productos: [], // crea un array para guardar los productos
            errored: false, // crea una variable para controlar si hay un error
            loading: true // crea una variable para controlar si se está cargando
        },
        created() { // función para crear el componente
            var url = 'https://pc-componentes.herokuapp.com/productos' // crea la url para obtener los productos
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
                const url = 'https://pc-componentes.herokuapp.com/producto/' + producto; // crea la url para eliminar el producto
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