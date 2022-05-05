let header_content = `<!-- LOGO A LA IZQUIERDA y NOMBRE DE EMPRESA CON LETRA GRANDE Y PERSONALIZADA -->
<span class="animate__animated animate__backInLeft logo-img">
</span>
<span class="animate__animated animate__bounceInRight logo-text-box">
</span>`;
let navbar_content = `<button class="botonMenu" onclick="accion()">MENÚ</button>
<a class="elementoDeNavegacion desaparece" href="index.html">INICIO</a>
<a class="elementoDeNavegacion desaparece" href="productos.html">PRODUCTOS</a>
<a class="elementoDeNavegacion desaparece" href="sucursales.html">SUCURSALES</a>
<a class="elementoDeNavegacion desaparece" href="contacto.html">CONTACTO</a>
<a class="elementoDeNavegacion desaparece" href="registro.html">REGISTRO</a>`;
let footer_content = `<nav>
<a href="https://www.facebook.com/Braianobregonnn" target="_blank"><img src="./img/iconos/facebook.png" alt="facebook" title="Facebook" width="30px" height="30px"></a>
<a href="https://www.youtube.com" target="_blank"><img src="./img/iconos/youtube.png" alt="youtube" title="Youtube" width="30px" height="30px"></a>
<a href="https://www.twitter.com" target="_blank"><img src="./img/iconos/twitter.png" alt="twitter" title="Twitter" width="30px" height="30px"></a>
<a href="https://www.instagram.com/cebra_phone" target="_blank"><img src="./img/iconos/instagram.png" alt="instagram" title="Instagram" width="30px" height="30px"></a>
<a href="https://www.linkedin.com/in/cristian-javier-gomez-448218215/" target="_blank"><img src="./img/iconos/linkedin.png" alt="linkedin" title="Linkedin" width="30px" height="30px"></a>
<a href="https://www.github.com/Chukin95" target="_blank"><img src="./img/iconos/github.png" alt="github" title="Github" width="30px" height="30px"></a>
<a href="https://wa.me/543624068392?text=Quiero%20más%20información" target="_blank"><img src="./img/iconos/whatsapp.png" alt="whatsapp" title="Whatsapp" width="30px" height="31px"></a>
</nav>
<p id="idcopyright">Copyright © 2022-2025 All Rights Reserved. By <a href="./acerca_de.html">Cristian Gómez</a>.</p>`;

document.getElementById("idheader").innerHTML = header_content;
document.getElementById("idnavbar").innerHTML = navbar_content;
document.getElementById("idfooter").innerHTML = footer_content;

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