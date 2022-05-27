//Probando fetch y qs
    //Gifs
    let gifTrending="https://api.giphy.com/v1/gifs/trending?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&limit=10&rating=g"

    fetch(gifTrending)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let info = data.data

        //capturar el contenedor de lista
        let section = document.querySelector(".container");
        let articles = "";

        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        for(let i=0; i<info.length; i++){
            //construir un elemento de lista
            articles += `<article>
                            <p class="name">Nombre: ${data.data[i].title}</p>
                            <img class="image" src="${data.data[i].images.original.url}" alt="">
                            <a href="detalleGif.html?id=${data.data[i].id}">ir a detalle </a>
                        </article>`
        }
        console.log(articles);
        
        section.innerHTML += articles


    })
    .catch(function(error){
        console.log(error);
    })
