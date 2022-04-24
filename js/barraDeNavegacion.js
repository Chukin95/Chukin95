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