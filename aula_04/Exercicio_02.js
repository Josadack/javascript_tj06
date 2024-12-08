const leia = require("readline-sync");

let n1, controle, impar=0, par=0;

for(controle = 1; controle <=10; controle++){
  n1 = leia.questionInt(`Digite o ${controle} numero: `)
  if(n1 % 2 == 0){
    par++
  }else{
    impar++
  }
}
console.log(`\nTotal de números pares: ${par}`)
console.log(`\nTotal de números ímpares: ${impar}`)



