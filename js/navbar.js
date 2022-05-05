// let navbar = document.createElement('nav');
// let navbar_content = document.createTextNode("This is the navbar");
let navbar_HTML = `<button class="botonMenu" onclick="accion()">MENÚ</button>
<a class="elementoDeNavegacion desaparece" href="index.html">INICIO</a>
<a class="elementoDeNavegacion desaparece" href="productos.html">PRODUCTOS</a>
<a class="elementoDeNavegacion desaparece" href="sucursales.html">SUCURSALES</a>
<a class="elementoDeNavegacion desaparece" href="contacto.html">CONTACTO</a>
<a class="elementoDeNavegacion desaparece" href="registro.html">REGISTRO</a>`;

// navbar.appendChild(navbar_content);
// document.body.appendChild(navbar);

document.getElementById("idnavbar").innerHTML = navbar_HTML;
// $("nav").addClass("BarraDeNavegacion");
// $("nav").addClass("animate__animated");
// $("nav").addClass("animate__faster");
//const element = document.querySelector('nav');
// navbar.classList.add("BarraDeNavegacion", "animate__animated", "animate__faster");

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