// Validación de Conectarse:
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("conectarse").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  let usuario = document.getElementById('usuario').value;
  let clave = document.getElementById('clave').value;
  if (usuario.length == 0) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'No has escrito nada en el usuario!',
      showConfirmButton: false,
      timer: 1000
    });
    document.conectarse.usuario.focus()
    return;
  } else if (usuario.length <= 4) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Tu usuario es demasiado corto!',
      showConfirmButton: false,
      timer: 1000
    });
    document.conectarse.usuario.focus()
    return;
  } else if (clave.length < 8) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'La clave no es válida!',
      showConfirmButton: false,
      timer: 1000
    });
    document.conectarse.clave.focus()
    return;
  } else {
    function isValid(element) {
    return element !== '' && element !== null;
    }
  }
  this.submit();
}

/*// Se obtiene el elemento form del html
const form = document.getElementById("registro");

form.addEventListener("submit", (e) => {

  // Se obtienen todos los valores de los inputs que interesan validar
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const localidad = document.getElementById("localidad").value;
  const asunto = document.getElementById("asunto").value;
  const comentario = document.getElementById("comentario").value;
  
  // Elemento div vacío con id "error" donde se cargarán los mensajes
  const error = document.getElementById("error");
  
  // Lista de mensajes que inicia vacía y se va llenando a medida que se encuentra un error
  const MENSAJES = [];
  error.innerText = "";
  if (!isValid(nombre)) {
    MENSAJES.push("*Por favor, introduzca un nombre válido");
  }

  if (!isValid(apellido)) {
    MENSAJES.push("*Por favor, introduzca un apellido válido");
  }

  if (!isValid(correo)) {
    MENSAJES.push("*Por favor, introduzca su correo electrónico");
  }

  if (!correo.includes("@")) {
    MENSAJES.push("*La dirección de correo electrónico debe contener @");
  }

  if (correo.includes('.com')) {
      MENSAJES.push("*La dirección de correo electrónico debe pertenecer a un dominio válido (.com, .ar)");
  };

  if (!isValid(localidad)) {
    MENSAJES.push("*Por favor incluya una localidad válida");
  }

  if(!isValid(asunto)) {
      MENSAJES.push("*Por favor seleccione un asunto");
  }

  if (!isValid(comentario) || comentario.length < 10) {
    MENSAJES.push("*Su mensaje debe contener al menos 10 caracteres");
  }

  // Si la lista de mensajes tiene al menos un elemento, se ejecuta lo siguiente, caso contrario, se envía el formulario
  if (MENSAJES.length > 0) {
    e.preventDefault();
    // Se cargan todos los errores de la lista de mensajes en el elemento div unidos por "\n" que es un quiebre de linea
    error.innerText = MENSAJES.join("\n");
  }
});

// Esta funcion comprueba que los inputs no se envíen en blanco/nulos
function isValid(element) {
    return element !== '' && element !== null;
}*/