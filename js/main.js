var altura = $('.barraDeNavegacion').offset().top;
alert(altura);
$(window).on("scroll", function ()
{
    if ($(window).scrollTop() > altura)
    {
        $(".barraDeNavegacion").addClass("barraDeNavegacionfixed");
    } 
    else
    {
        $(".barraDeNavegacion").removeClass("barraDeNavegacionfixed");
    }
});