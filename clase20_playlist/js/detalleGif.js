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


        //Guaradar favoritos
        let favoritos = [];

        //chequear si hay algo en favoritos
        let recuperoStorage = localStorage.getItem("favoritos");

        if(recuperoStorage){ //null o undefined => false //tiene una variable => true
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }

        let link= document.querySelector("a");

        if(favoritos.includes(idGif)){
            //cambiarle el mensaje al usuario.
            link.innerText = "Sacar de favoritos"
        }

        //Definir un evento para el link
        link.addEventListener("click", function(evento){
            //evitar default del link
            evento.preventDefault()

            if(favoritos.includes(idGif)){
                //Sacar el id del array
                let gifASacar = favoritos.indexOf(idGif)
                favoritos.splice(gifASacar, 1);
                link.innerText="Agregar a favoritos"

            } else {
                //Agregar un data al array
                favoritos.push(idGif);
                link.innerText = "Sacar de favoritos"

            }
        
            //Agregar el array a localStorage. Antes hay que pasarlo a string
            let gifFavoritosToString = JSON.stringify(favoritos);
            localStorage.setItem('favoritos', gifFavoritosToString)


            console.log(localStorage.getItem("favoritos"));

        })
       

    })
    .catch(function(error){
        console.log(error)
    })


  



