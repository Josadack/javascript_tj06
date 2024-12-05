const leia = require('readline-sync');

let numero = leia.questionInt('Digite um numero: ');
let contador = 1

while(contador <= 10){
    console.log(`${numero} X ${contador} = ${numero * contador}`);
   // contador ++;
    }