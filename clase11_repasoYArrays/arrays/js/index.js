//Probando arrays.

let nombres = ['Ale', 'Cami', 'Mateo', 'Sol', 'María'];
console.log(nombres[0]); 
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);
console.log(nombres[10]);
console.log(nombres);

nombres.push(4568);

console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.push('Nacho');
console.log(nombres);

let hombres= [ nombres[0], nombres[2] ];
let mujeres= [ nombres[1], nombres[3], nombres[4] ];

console.log(mujeres);
console.log(hombres);