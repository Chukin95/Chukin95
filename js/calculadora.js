function sumar() {
    let a = parseInt(document.getElementById("Num1").value);
    let b = parseInt(document.getElementById("Num2").value);
    document.getElementById("resultado-calc").innerHTML = a + b;
}
function restar() {
    let a = parseInt(document.getElementById("Num1").value);
    let b = parseInt(document.getElementById("Num2").value);
    document.getElementById("resultado-calc").innerHTML = a - b;
}
function multiplicar() {
    let a = parseInt(document.getElementById("Num1").value);
    let b = parseInt(document.getElementById("Num2").value);
    document.getElementById("resultado-calc").innerHTML = a * b;
}
function dividir() {
    let a = parseInt(document.getElementById("Num1").value);
    let b = parseInt(document.getElementById("Num2").value);
    document.getElementById("resultado-calc").innerHTML = a / b;
}
function borrar() {
    document.getElementById("Num1").value = "";
    document.getElementById("Num2").value = "";
    document.getElementById("resultado-calc").innerHTML = " 00 ";
}