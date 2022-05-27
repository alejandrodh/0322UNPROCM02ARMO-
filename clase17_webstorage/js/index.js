//Repaso fetch

let url = 'https://rickandmortyapi.com/api/character'

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        //Acá adnetro escribimos nuestro código.
        console.log(data);
        let results = data.results

        //Obtener los nombres de todos los presonajes.access
        let personajes = []

        for(let i=0; i<results.length; i++){
            //Agregar en personajes y cada name del array de resultados.
            personajes.push(results[i].name)
        }
        console.log(personajes);

        //Webstorage
        //1 transformar los datos en string
        let personajesToString = JSON.stringify(personajes);
        //2 guardarlo en storage
        localStorage.setItem('rickAndMorty', personajesToString);

        //3 Recuperar Storage
        let recuperoStorage = localStorage.getItem('rickAndMorty')
        let recuperoToArray = JSON.parse(recuperoStorage);

        console.log(recuperoToArray);

    })
    .catch(function(error){
        console.log(error)
    })




