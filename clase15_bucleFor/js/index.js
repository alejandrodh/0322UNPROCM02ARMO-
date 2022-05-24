let saldoMensual=[1201,34234,-1213,6134,934]

function saludar(){
    return 'hola';
}


for (let i=0; i<saldoMensual.length; i++){
    
    if(saldoMensual[i] < 0){
        console.log(saludar());
    }

}


//Sumando todos los números del array.


let suma = 0 //Creación de una variable.

for (let i=0; i<saldoMensual.length; i++){

    suma = saldoMensual[i] + suma //usando la variable.
}

console.log(suma);



let alumnos = [
    { 
        nombre: 'Ale',
        curso: 'Programción 1'
    },
    { 
        nombre: 'Cami',
        curso: 'Programción 1'
    },
    { 
        nombre: 'Darío',
        curso: 'Programción 1'
    },
    { 
        nombre: 'Nacho',
        curso: 'Programción 1'
    }
]
//Mostrar el nombre del alumno en la posición 0.
console.log(   alumnos[0].nombre    );
console.log(   alumnos[1].nombre    );
console.log(   alumnos[2].nombre    );
console.log(   alumnos[3].nombre    );
console.log('===================================');

for (let i=0; i<alumnos.length; i++){
    console.log( alumnos[i].nombre );
}


