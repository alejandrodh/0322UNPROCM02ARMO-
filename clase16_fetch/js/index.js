//Probando fetch

let url = "https://randomuser.me/api"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results[0]);
        let info = data.results[0];
        
        //Capturar html
        let name = document.querySelector('.name');
        let lastName = document.querySelector('.lastName');
        let email = document.querySelector('.email');
        let image = document.querySelector('.image');

        //Actualizar el html con info de la api y mandarla al DOM
        name.innerText += info.name.first;
        lastName.innerText += info.name.last;
        email.innerText += info.email;
        image.src= info.picture.medium;

    })
    .catch(function(error){
        console.log(error);
    })



    //Provincias
    let urlProvincias="https://apis.datos.gob.ar/georef/api/provincias"

    fetch(urlProvincias)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let info = data.provincias

        //capturar el contenedor de lista
        let lista = document.querySelector(".lista");
        let elementosDeLista = "";

        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        for(let i=0; i<info.length; i++){
            //construir un elemento de lista
            elementosDeLista += `<li>${info[i].nombre}</li>`
        }
        console.log(elementosDeLista);
        
        lista.innerHTML += elementosDeLista


    })
    .catch(function(error){
        console.log(error);
    })
