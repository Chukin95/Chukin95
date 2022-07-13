// Document Object Model
let header_content = `<!-- LOGO A LA IZQUIERDA y NOMBRE DE EMPRESA CON LETRA GRANDE Y PERSONALIZADA -->
<span class="animate__animated animate__backInLeft logo-img">
</span>
<span class="animate__animated animate__bounceInRight logo-text-box">
</span>`;
let navbar_content = `<button class="botonMenu" onclick="accion()">MENÚ</button>
<a class="elementoDeNavegacion desaparece" href="index.html">Inicio</a>
<a class="elementoDeNavegacion desaparece" href="productos.html">Productos</a>
<a class="elementoDeNavegacion desaparece" href="sucursales.html">Sucursales</a>
<a class="elementoDeNavegacion desaparece" href="contacto.html">Contacto</a>
<a class="elementoDeNavegacion desaparece" href="conectarse.html">Conectarse</a>
<a class="elementoDeNavegacion desaparece" href="tateti.html">Tateti</a>`;

// <a class="elementoDeNavegacion desaparece" href="contacto.html">CONTACTO</a>
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

let whatsapp_content = `<div class="wa__btn_popup">
<div class="wa__btn_popup_txt">Necesitas ayuda? <strong>Chatea ahora</strong></div>
<div class="wa__btn_popup_icon"></div>
</div>
<div class="wa__popup_chat_box">
<div class="wa__popup_heading">
    <div class="wa__popup_title">Resuelve tu consulta</div>
    <div class="wa__popup_intro">Hola! puedes consultarnos directamente por <strong>Whatsapp</strong></a></div>
</div>
<!-- /.wa__popup_heading -->
<div class="wa__popup_content wa__popup_content_left">
    <div class="wa__popup_notice">Solemos responder en unos minutos</div>


    <div class="wa__popup_content_list">
        <div class="wa__popup_content_item ">
            <a target="_blank" href="https://web.whatsapp.com/send?phone=543624068392"
                class="wa__stt wa__stt_online">
                <div class="wa__popup_avatar nta-default-avt">
                    <svg width="48px" height="48px" class="nta-whatsapp-default-avatar" version="1.1"
                        id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <path style="fill:#EDEDED;" d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0
S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z" />
                        <path style="fill:#55CD6C;" d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662
c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234
c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z" />
                        <path style="fill:#FEFEFE;"
                            d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297
c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048
c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359
c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248
c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062
l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945" />
                    </svg>
                </div>

                <div class="wa__popup_txt">
                    <div class="wa__member_name">Tienda PC Componentes</div>
                    <!-- /.wa__member_name -->
                    <div class="wa__member_duty">Ventas</div>
                    <!-- /.wa__member_duty -->
                </div>
                <!-- /.wa__popup_txt -->
            </a>
        </div>

    </div>
    <!-- /.wa__popup_content_list -->
</div>
<!-- /.wa__popup_content -->
</div>`;

document.getElementById("idheader").innerHTML = header_content;
document.getElementById("idnavbar").innerHTML = navbar_content;
document.getElementById("idfooter").innerHTML = footer_content;
document.getElementById("idwhatsapp").innerHTML = whatsapp_content;

// prueba
let whatsapp_logo = document.getElementById("idwhatsapp")
whatsapp_logo.onmouseover = function () {
    whatsapp_logo.classList.add('animate__rubberBand');
    whatsapp_logo.classList.remove('animate__headShake');
}
whatsapp_logo.onmouseout = function () {
    whatsapp_logo.classList.remove('animate__rubberBand');
    whatsapp_logo.classList.add('animate__headShake');
}
/*
// SCRIPT PARA WHATSAPP FIXED
let whatsapp_div = document.createElement('div');
whatsapp_div.setAttribute('id', 'whatsapp_div');
whatsapp_div.classList.add('whatsapp_container');
let whatsapp_contact = document.createElement('a');
whatsapp_contact.classList.add('whatsapp_contact');
whatsapp_contact.setAttribute('target', '_blank');
whatsapp_contact.setAttribute('href', 'https://web.whatsapp.com/send?phone=5493624068392&amp;text=Hola, tengo una consulta');
let whatsapp_logo = document.createElement('img');
whatsapp_logo.classList.add('whatsapp_logo');
whatsapp_logo.classList.add('animate__animated');
whatsapp_logo.classList.add('animate__faster');
whatsapp_logo.setAttribute('src', './img/iconos/whatsapp.png');
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

// on mouse over whatsapp logo anim
whatsapp_logo.onmouseover = function () {
    whatsapp_logo.classList.add('animate__rubberBand');
    whatsapp_logo.classList.remove('animate__headShake');
}
whatsapp_logo.onmouseout = function () {
    whatsapp_logo.classList.remove('animate__rubberBand');
    whatsapp_logo.classList.add('animate__headShake');
}
*/
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
