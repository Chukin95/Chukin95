let header = document.createElement('header');
let header_content = document.createTextNode("This is the header");

header.appendChild(header_content);
document.body.appendChild(header);


header.innerHTML = `<!-- LOGO A LA IZQUIERDA y NOMBRE DE EMPRESA CON LETRA GRANDE Y PERSONALIZADA -->
<span class="animate__animated animate__backInLeft logo-img">
</span>
<span class="animate__animated animate__bounceInRight logo-text-box">
</span>`;
