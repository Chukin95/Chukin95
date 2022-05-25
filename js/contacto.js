var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
    direccion: {    
        calle: "Calle falsa 123",
        ciudad: "Ciudad falsa",
        pais: "Pais falso"
    },
    dni: "12345678",
    telefono: "12345678",
    email: "correofalso@homtail.com",
    estadoCivil: "soltero",
    profesion: "desarrollador web",
    hobbies: ["futbol", "natacion", "cine"],
    musica: ["rock", "pop", "reggae"],
    peliculas: ["El señor de los anillos", "El hobbit", "El padrino"],
    libros: ["El señor de los anillos", "El hobbit", "El padrino"],
    deportes: ["futbol", "natacion", "ciclismo"],
    nombreCompleto: function () { return this.nombre + " " + this.apellido; }
};

console.log(persona);

if (typeof(Storage) !== "undefined") {
    localStorage.setItem("Persona", JSON.stringify(persona));
    localStorage.setItem("Nombre", persona.nombre);
    localStorage.setItem("Apellido", persona.apellido);
    localStorage.setItem("Edad", persona.edad);
    localStorage.setItem("Direccion", persona.direccion.calle);
    localStorage.setItem("Ciudad", persona.direccion.ciudad);
    localStorage.setItem("Pais", persona.direccion.pais);
    localStorage.setItem("DNI", persona.dni);
    localStorage.setItem("Telefono", persona.telefono);
    localStorage.setItem("Email", persona.email);
    localStorage.setItem("EstadoCivil", persona.estadoCivil);
    localStorage.setItem("Profesion", persona.profesion);
    localStorage.setItem("Hobbies", persona.hobbies);
    localStorage.setItem("Musica", persona.musica);
    localStorage.setItem("Peliculas", persona.peliculas);
    localStorage.setItem("Libros", persona.libros);
    localStorage.setItem("Deportes", persona.deportes);
    console.log(localStorage.getItem("Nombre"));
    console.log(localStorage.getItem("Apellido"));
    console.log(localStorage.getItem("Edad"));
    console.log(localStorage.getItem("Direccion"));
    console.log(localStorage.getItem("Ciudad"));
    console.log(localStorage.getItem("Pais"));
    console.log(localStorage.getItem("DNI"));
    console.log(localStorage.getItem("Telefono"));
    console.log(localStorage.getItem("Email"));
    console.log(localStorage.getItem("EstadoCivil"));
    console.log(localStorage.getItem("Profesion"));
    console.log(localStorage.getItem("Hobbies"));
    console.log(localStorage.getItem("Musica"));
    console.log(localStorage.getItem("Peliculas"));
    console.log(localStorage.getItem("Libros"));
    console.log(localStorage.getItem("Deportes"));
    console.log(localStorage.getItem("Persona"));
} else {
    console.log("No soporta local storage");
}