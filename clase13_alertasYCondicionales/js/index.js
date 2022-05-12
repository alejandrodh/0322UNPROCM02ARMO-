console.log('alertas y condicionales');

// Agua para el mate o el café

let temperatura = prompt('temperatura del agua');

function apagarPavaElectrica(numero){
    let mensaje = ''

    if (numero >70 && numero < 100){
        //Apagar y avisar que el agua está lista para el mate
        mensaje = 'Agua lista para el mate'

    } else if (numero >= 100){
        //Apagar y avisar que el agua está lista para café
        mensaje = 'Agua lista para el café'
    }

    return mensaje

}

alert(apagarPavaElectrica(temperatura));

//Desafío para los que llegaron hasta acá. Modificar el código de la función para que muestre un mensaje cuando el agua todavía está fría.
Lucas te llamamos y no apareciste. Ausente
