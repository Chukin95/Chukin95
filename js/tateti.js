let turnoPlayer = 1;
nuevo(false)

function presiona(id) {
    if (!botonOcupado(id)) {
        if (buscarGanador(false)) {
            Swal.fire({
                title: 'Alguien ya ganó la partida!',
                text: "¿Deseas empezar una nueva partida?",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Reiniciar!',
                cancelButtonText: 'No, Cancelar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Reiniciando!',
                        'Has reiniciado la partida!',
                        'success')
                    nuevo(true);
                }
            })
        } else {
            if (turnoPlayer == 1) {
                let boton = document.getElementById(id);
                boton.innerHTML = "X";
                boton.setAttribute('style', 'background-color: red');
                cambioJugador();
            } else if (turnoPlayer == 2) {
                let boton = document.getElementById(id);
                boton.innerHTML = "O";
                boton.setAttribute('style', 'background-color: blue');
                cambioJugador();
            }
            buscarGanador(true);
        }
    }
    else {
        if (buscarGanador(false)) {
            Swal.fire({
                title: 'Alguien ya ganó la partida!',
                text: "¿Deseas empezar una nueva partida?",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Reiniciar!',
                cancelButtonText: 'No, Cancelar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Reiniciando!',
                        'Has reiniciado la partida!',
                        'success')
                    nuevo(true);
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ese lugar ya está ocupado!'
            });
        }
    }
}

function nuevo(conMensaje = true) {
    turnoPlayer = 1;
    botonNuevo = document.getElementById("new");
    botonNuevo.setAttribute('style', 'background-color: grey');
    botonNuevo.textContent = "Reiniciar";
    display = document.getElementById("display-tateti")
    display.innerHTML = "Turno del jugador 1";
    display.setAttribute('style', 'background-color: red');
    document.getElementById("1").innerHTML = "-";
    document.getElementById("1").setAttribute('style', 'background-color: gray');
    document.getElementById("2").innerHTML = "-";
    document.getElementById("2").setAttribute('style', 'background-color: gray');
    document.getElementById("3").innerHTML = "-";
    document.getElementById("3").setAttribute('style', 'background-color: gray');
    document.getElementById("4").innerHTML = "-";
    document.getElementById("4").setAttribute('style', 'background-color: gray');
    document.getElementById("5").innerHTML = "-";
    document.getElementById("5").setAttribute('style', 'background-color: gray');
    document.getElementById("6").innerHTML = "-";
    document.getElementById("6").setAttribute('style', 'background-color: gray');
    document.getElementById("7").innerHTML = "-";
    document.getElementById("7").setAttribute('style', 'background-color: gray');
    document.getElementById("8").innerHTML = "-";
    document.getElementById("8").setAttribute('style', 'background-color: gray');
    document.getElementById("9").innerHTML = "-";
    document.getElementById("9").setAttribute('style', 'background-color: gray');
    if (conMensaje) {
        Swal.fire({
            icon: 'success',
            title: 'Nueva partida',
            text: 'Has empezado una nueva partida!'
        });
    }
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
        display.innerHTML = "Turno del jugador 2"; 9
        display.setAttribute('style', 'background-color: blue');
    } else if (turnoPlayer == 2) {
        turnoPlayer = 1;
        display.innerHTML = "Turno del jugador 1";
        display.setAttribute('style', 'background-color: red');
    }
}
function buscarGanador(conGanador) {
    display = document.getElementById("display-tateti");
    boton1 = document.getElementById("1");
    boton2 = document.getElementById("2");
    boton3 = document.getElementById("3");
    boton4 = document.getElementById("4");
    boton5 = document.getElementById("5");
    boton6 = document.getElementById("6");
    boton7 = document.getElementById("7");
    boton8 = document.getElementById("8");
    boton9 = document.getElementById("9");
    if (boton1.textContent == "X" && boton2.textContent == "X" && boton3.textContent == "X"
        || boton4.textContent == "X" && boton5.textContent == "X" && boton6.textContent == "X"
        || boton7.textContent == "X" && boton8.textContent == "X" && boton9.textContent == "X"
        || boton1.textContent == "X" && boton4.textContent == "X" && boton7.textContent == "X"
        || boton2.textContent == "X" && boton5.textContent == "X" && boton8.textContent == "X"
        || boton3.textContent == "X" && boton6.textContent == "X" && boton9.textContent == "X"
        || boton1.textContent == "X" && boton5.textContent == "X" && boton9.textContent == "X"
        || boton3.textContent == "X" && boton5.textContent == "X" && boton7.textContent == "X") {
        if (conGanador) {
            Swal.fire({
                icon: 'info',
                title: '¡Ganó el jugador 1!'
            })
        }
        display.innerHTML = "¡Ganó el jugador 1!";
        display.setAttribute('style', 'background-color: red');
        return true;
    } else if (boton1.textContent == "O" && boton2.textContent == "O" && boton3.textContent == "O"
        || boton4.textContent == "O" && boton5.textContent == "O" && boton6.textContent == "O"
        || boton7.textContent == "O" && boton8.textContent == "O" && boton9.textContent == "O"
        || boton1.textContent == "O" && boton4.textContent == "O" && boton7.textContent == "O"
        || boton2.textContent == "O" && boton5.textContent == "O" && boton8.textContent == "O"
        || boton3.textContent == "O" && boton6.textContent == "O" && boton9.textContent == "O"
        || boton1.textContent == "O" && boton5.textContent == "O" && boton9.textContent == "O"
        || boton3.textContent == "O" && boton5.textContent == "O" && boton7.textContent == "O") {
        if (conGanador) {
            Swal.fire({
                icon: 'info',
                title: '¡Ganó el jugador 2!'
            })
        }
        display.innerHTML = "¡Ganó el jugador 2!";
        display.setAttribute('style', 'background-color: blue');
        return true;
    } else if (boton1.textContent != "-" && boton2.textContent != "-" && boton3.textContent != "-"
        && boton4.textContent != "-" && boton5.textContent != "-" && boton6.textContent != "-"
        && boton7.textContent != "-" && boton8.textContent != "-" && boton9.textContent != "-") {
        if (conGanador) {
            Swal.fire({
                icon: 'info',
                title: '¡Empate!'
            })
            display.innerHTML = "¡Empate!";
            display.setAttribute('style', 'background-color: grey');
        }
        return true;
    }
    else {
        return false;
    }
}