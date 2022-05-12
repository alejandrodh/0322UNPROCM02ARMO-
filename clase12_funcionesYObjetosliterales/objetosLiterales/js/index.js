let tenista = {
    nombre: 'Rogger',
    apellido: 'Federer',
    saludar: function(){
        return 'Hola soy ' + this.nombre
    }
}
let tenista2 = {
    nombre: 'Juan Martín',
    apellido: 'Delpo',
    saludar: function(){
        return 'Hola soy ' + this.nombre
    }
}

let equipoCopa = [
    {
        nombre: 'Peque',
        apellido: 'S',
        saludar: function(){
            return 'Hola soy ' + this.nombre
        }
    }
    ,
    {
        nombre: 'Novak',
        apellido: 'D',
        saludar: function(){
            return 'Hola soy ' + this.nombre
        }
    }
]

console.log(equipoCopa[0].saludar())




console.log(tenista.apellido)
console.log(tenista.nombre + ' ' + tenista.apellido)
console.log(tenista.saludar())
console.log(tenista2.saludar())