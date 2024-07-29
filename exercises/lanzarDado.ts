let dado1: number;
let dado2: number;

function tirarDado():number{
    return Math.floor(Math.random()*6)+1;
}

dado1=tirarDado();
dado2=tirarDado();
let sum=dado1+dado2;
console.log(`El valor del primer dado es ${dado1}`);
console.log(`El valor del segundo dado es ${dado2}`);
console.log(`La suma de los valores de los dados es: ${sum}`);


