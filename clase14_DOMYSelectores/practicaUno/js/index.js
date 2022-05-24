console.log("practica uno");

alert("Bienvenido a mi sitio");
let respuesta = confirm("Estás seguro de avanzar?"); //true o false

if(respuesta == true){
    document.querySelector("h2").innerText = "Qué alegría que quieras continuar"

    let nombre = prompt("cuál es tu nombre?")
    let titulo = document.querySelector("h1");
    titulo.innerText = "Bienvenido " + nombre;

    let edad = prompt("¿Cuántos años tenés?");

    //Si es menor de edad hay que ocultar cosas y terminar el programa.
    if(edad<18){
        document.querySelector(".container-general").style.display = "none";
        document.querySelector("#accesoDenegado").style.display = "block"
    }

    let programacion = confirm("Te gusta programar?");
    if(programacion == true){
        document.querySelector(".background-img").style.backgroundImage = "url(./img/programmer.jpeg)"
    } else {
        document.querySelector(".background-img").style.backgroundImage = "url(./img/gatito.jpeg)"

    }













} else {
    document.querySelector("h2").innerText = "Qué pena..."
}