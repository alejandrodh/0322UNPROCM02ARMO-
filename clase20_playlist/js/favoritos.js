//Recuperar el array del storage
let recuperoStorage = localStorage.getItem("favoritos");
recuperoStorageToArray = JSON.parse(recuperoStorage);

//capturar la sección para completar con datos
let section= document.querySelector(".favoritos")
let contenidoSection = ""

//pedir a la api los datos de todos los ids
for(let i=0; i<recuperoStorageToArray.length; i++){
    //fetch
    let url = `https://api.giphy.com/v1/gifs/${recuperoStorageToArray[i]}?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T`
    
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);
           //trabajo con los datos 
            contenidoSection += `<article>
                                    <p class="name">Nombre: ${data.data.title}</p>
                                    <img class="image" src="${data.data.images.original.url}" alt="">
                                    <a href="detalleGif.html?id=${data.data.id}">ir a detalle </a>
                            </article>`

                            section.innerHTML = contenidoSection

        })
        .catch(function(error){
            console.log(error);
        })

}

