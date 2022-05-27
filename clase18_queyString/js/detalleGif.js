//Detalle de un gif
let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idGif = qsToObject.get('id'); //obtengo el id del gif



let urlDetalle = `https://api.giphy.com/v1/gifs/${idGif}?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T`

fetch(urlDetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let title = document.querySelector('.title');
        let image = document.querySelector('img');

        title.innerText = data.data.title;
        image.src= data.data.images.original.url

    })
    .catch(function(error){
        console.log(error)
    })