class Fecha {
    constructor(dia, mes, anio) {
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
    }

    getFechaString() {
        return `${this.dia}/${this.mes}/${this.anio}`;
    }

    getDia() {
        return this.dia;
    }

    getMes() {
        return this.mes;
    }

    getAnio() {
        return this.anio;
    }

    anioBisiesto() {
        if (this.anio % 400 == 0) {
            return true;
        } else {
            if (this.anio % 100 == 0) {
                return false;
            } else {
                if (this.anio % 4 == 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    diasMes() {
        if (this.mes == 2) {
            if (this.anioBisiesto()) {
                return 29;
            } else {
                return 28;
            }
        } else if (this.mes == 4 || this.mes == 6 || this.mes == 9 || this.mes == 11) {
            return 30;
        } else {
            return 31;
        }
    }

    primerDiaMes() {
        return new Fecha(1, this.mes, this.anio);
    }

    ultimoDiaMes() {
        return new Fecha(this.diasMes(), this.mes, this.anio);
    }

    diaSiguiente() {
        if (this.mes == 12 && this.dia == this.diasMes()) {
            return new Fecha(1, 1, this.anio + 1);
        } else if (this.dia == this.diasMes()) {
            return new Fecha(1, this.mes + 1, this.anio);
        } else {
            return new Fecha(this.dia + 1, this.mes, this.anio);
        }
    }

    diaAnterior() {
        let fecha = this;
        let mesNuevo = new Fecha(fecha.dia, fecha.mes-1, fecha.anio);
        if (this.mes == 1 && this.dia == 1) {
            return new Fecha(this.diasMes(), 12, this.anio - 1);
        } else if (this.dia == 1) {
            return new Fecha(mesNuevo.diasMes(), this.mes - 1, this.anio);
        } else {
            return new Fecha(this.dia - 1, this.mes, this.anio);
        }
    }

    diasHasta(fecha2) {
        let dias = 0;
        let fechaActual = this;
        while (fechaActual.getFechaString() != fecha2.getFechaString()) {
            dias++;
            fechaActual = fechaActual.diaSiguiente();
        }
        return dias;
    }

}
// test
let fecha = new Fecha(1, 3, 2012);
let fecha1 = new Fecha(1, 1, 1900); // fecha desde la que se quiere calcular los dias
let fecha2 = new Fecha(1, 1, 1901); // fecha1.diasHasta(fecha2) resultado: 365 días
let fecha3 = new Fecha(6, 5, 2022); // fecha1.diasHasta(fecha3) resultado: 44685 días
let fecha4 = new Fecha(5, 3, 2021); // fecha1.diasHasta(fecha4) resultado: 44258 días
let fecha5 = new Fecha(31, 12, 2021); // fecha1.diasHasta(fecha5) resultado: 44559 días
let fecha6 = new Fecha(1, 3, 2000); // fecha1.diasHasta(fecha6) resultado: 44258 días
console.log(`El string de la fecha es: ${fecha.getFechaString()}`);
console.log(`El día es: ${fecha.getDia()}`);
console.log(`El mes es: ${fecha.getMes()}`);
console.log(`El año es: ${fecha.getAnio()}`);
console.log(`El año ${fecha.getAnio()} es bisiesto: ${fecha.anioBisiesto()}`);
console.log(`La cantidad de días del mes es: ${fecha.diasMes()}`);
console.log(`El primer día del mes es: ${fecha.primerDiaMes().getFechaString()}`);
console.log(`El último día del mes es: ${fecha.ultimoDiaMes().getFechaString()}`);

console.log(`El día anterior es: ${fecha.diaAnterior().getFechaString()}`);
console.log(`El día anterior es: ${fecha1.diaAnterior().getFechaString()}`);
console.log(`El día anterior es: ${fecha2.diaAnterior().getFechaString()}`);
console.log(`El día anterior es: ${fecha3.diaAnterior().getFechaString()}`);
console.log(`El día anterior es: ${fecha4.diaAnterior().getFechaString()}`);
console.log(`El día anterior es: ${fecha5.diaAnterior().getFechaString()}`);
console.log(`El día anterior es: ${fecha6.diaAnterior().getFechaString()}`);

console.log(`El día siguiente es: ${fecha.diaSiguiente().getFechaString()}`);

console.log(`El día siguiente es: ${fecha1.diaSiguiente().getFechaString()}`);
console.log(`El día siguiente es: ${fecha2.diaSiguiente().getFechaString()}`);
console.log(`El día siguiente es: ${fecha3.diaSiguiente().getFechaString()}`);
console.log(`El día siguiente es: ${fecha4.diaSiguiente().getFechaString()}`);
console.log(`El día siguiente es: ${fecha5.diaSiguiente().getFechaString()}`);
console.log(`El día siguiente es: ${fecha6.diaSiguiente().getFechaString()}`);

console.log(`La cantidad de días hasta la fecha es: ${fecha1.diasHasta(fecha2)}`);
console.log(`La cantidad de días hasta la fecha es: ${fecha1.diasHasta(fecha3)}`);
console.log(`La cantidad de días hasta la fecha es: ${fecha1.diasHasta(fecha4)}`);
console.log(`La cantidad de días hasta la fecha es: ${fecha1.diasHasta(fecha5)}`);