let turnoPlayer = 1;
let puntosPlayer1 = 0;
let puntosPlayer2 = 0;
nuevo()

function presiona(id) {
    if (!botonOcupado(id)) {
        if (turnoPlayer == 1) {
            let boton = document.getElementById(id);
            boton.innerHTML = "X";
            boton.setAttribute('style', 'background-color: red');
            cambioJugador();
            puntosPlayer1 += parseInt(id);
        } else if (turnoPlayer == 2) {
            let boton = document.getElementById(id);
            boton.innerHTML = "O";
            boton.setAttribute('style', 'background-color: blue');
            cambioJugador();
            puntosPlayer2 += parseInt(id);
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ese lugar ya está ocupado!',
            footer: '<a href="">Por qué veo este error?</a>'
          });
    }
    buscarGanador();
}

function nuevo() {
    turnoPlayer = 1;
    puntosPlayer1 = 0;
    puntosPlayer2 = 0;
    botonNuevo = document.getElementById("new");
    botonNuevo.setAttribute('style', 'background-color: grey');
    display = document.getElementById("display-tateti")
    display.innerHTML = "Turno del jugador 1";
    display.setAttribute('style', 'background-color: red');
    document.getElementById("11").innerHTML = "-";
    document.getElementById("11").setAttribute('style', 'background-color: gray');
    document.getElementById("12").innerHTML = "-";
    document.getElementById("12").setAttribute('style', 'background-color: gray');
    document.getElementById("13").innerHTML = "-";
    document.getElementById("13").setAttribute('style', 'background-color: gray');
    document.getElementById("21").innerHTML = "-";
    document.getElementById("21").setAttribute('style', 'background-color: gray');
    document.getElementById("22").innerHTML = "-";
    document.getElementById("22").setAttribute('style', 'background-color: gray');
    document.getElementById("23").innerHTML = "-";
    document.getElementById("23").setAttribute('style', 'background-color: gray');
    document.getElementById("31").innerHTML = "-";
    document.getElementById("31").setAttribute('style', 'background-color: gray');
    document.getElementById("32").innerHTML = "-";
    document.getElementById("32").setAttribute('style', 'background-color: gray');
    document.getElementById("33").innerHTML = "-";
    document.getElementById("33").setAttribute('style', 'background-color: gray');
}

function botonOcupado(id) {
    if (document.getElementById(id).textContent != "-") {
        return true;
    } else {
        return false;
    }
}

function cambioJugador() {
display = document.getElementById("display-tateti");
    if (turnoPlayer == 1) {
        turnoPlayer = 2;
        display.innerHTML = "Turno del jugador 2";
        display.setAttribute('style', 'background-color: blue');
    } else if (turnoPlayer == 2) {
        turnoPlayer = 1;
        display.innerHTML = "Turno del jugador 1";
        display.setAttribute('style', 'background-color: red');
    }
}
function buscarGanador() {
    boton11 = document.getElementById("11");
    boton12 = document.getElementById("12");
    boton13 = document.getElementById("13");
    boton21 = document.getElementById("21");
    boton22 = document.getElementById("22");
    boton23 = document.getElementById("23");
    boton31 = document.getElementById("31");
    boton32 = document.getElementById("32");
    boton33 = document.getElementById("33");
    if (boton11.textContent == "X" && boton12.textContent == "X" && boton13.textContent == "X"
     || boton21.textContent == "X" && boton22.textContent == "X" && boton23.textContent == "X"
     || boton31.textContent == "X" && boton32.textContent == "X" && boton33.textContent == "X"
     || boton11.textContent == "X" && boton21.textContent == "X" && boton31.textContent == "X"
     || boton12.textContent == "X" && boton22.textContent == "X" && boton32.textContent == "X"
     || boton13.textContent == "X" && boton23.textContent == "X" && boton33.textContent == "X"
     || boton11.textContent == "X" && boton22.textContent == "X" && boton33.textContent == "X"
     || boton13.textContent == "X" && boton22.textContent == "X" && boton31.textContent == "X") {
        Swal.fire('Ganó el jugador 1!');
        nuevo();
    } else if (boton11.textContent == "O" && boton12.textContent == "O" && boton13.textContent == "O"
     || boton21.textContent == "O" && boton22.textContent == "O" && boton23.textContent == "O"
     || boton31.textContent == "O" && boton32.textContent == "O" && boton33.textContent == "O"
     || boton11.textContent == "O" && boton21.textContent == "O" && boton31.textContent == "O"
     || boton12.textContent == "O" && boton22.textContent == "O" && boton32.textContent == "O"
     || boton13.textContent == "O" && boton23.textContent == "O" && boton33.textContent == "O"
     || boton11.textContent == "O" && boton22.textContent == "O" && boton33.textContent == "O"
     || boton13.textContent == "O" && boton22.textContent == "O" && boton31.textContent == "O") {
        Swal.fire('Ganó el jugador 2');
        nuevo();
    }
}