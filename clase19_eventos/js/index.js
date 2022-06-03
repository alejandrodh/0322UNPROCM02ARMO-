console.log('hola');

//Paso 1 capturar el elemento
let parrafo = document.querySelector('p');

//Agregar el eventListener sobre el elemento
parrafo.addEventListener('click', function(event){
    
    console.log('me clickearon');
    console.log(event);

})

//detector tipeo
window.addEventListener('keypress', function(event){
    console.log(event.key);
})


//Detener un comportamiento por default
let hipervinculo = document.querySelector('a');

hipervinculo.addEventListener('click', function(evento){
    evento.preventDefault();
    console.log('deteniendo el click');
})


//Dispara una acción al 3er click

//Dentro de la función del eventListener hay que contar los clicks. Si los clicks llegaron a 3 entonces ejecutás una acción.
