//Declaración de función
function saludar(milanesa){
    let otraCosa = milanesa
    console.log(otraCosa);
    return 'Hola ' + otraCosa
}
//console.log(otraCosa);
//Ejecucución de función dentro de un console.log únicamente para que se vea en consola. 
console.log(saludar('Ale'));
console.log(saludar('Cami'));
console.log(saludar('Bauti'));

//Declaración de función
function rectangulo (base, altura){
    return base * altura
}
//Ejecucución de función dentro de un console.log únicamente para que se vea en consola. 
console.log(rectangulo(90, 20))

//Declaración
function largoDelArray(unArrayCualquiera){
    return unArrayCualquiera.length
}

// let numeros = [1,2,3,5,6,78];
let nombres = ['Ale', 'Cami', 'Bauti'];

//Ejecucución de función dentro de un console.log únicamente para que se vea en consola. 
console.log(largoDelArray([1,2,3,5,6,78]));
console.log(largoDelArray(nombres));

function dolarHoy(pesos){
    return pesos/200
}

console.log(dolarHoy(1000));