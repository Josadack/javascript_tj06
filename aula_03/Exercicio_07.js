
const leia = require('readline-sync')

console.log("\n=*=*=* TABUADA SIMPLES *=*=*=*=")
console.log("1    | SOMA          |  + ")
console.log("2    | SUBTRAÇÃO     |  - ")
console.log("3    | MULTPLICAÇÃO  |  * ")
console.log("4    | DIVISÃO       |  / ")
console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=\n")

let num1 = leia.questionInt('Digite O primeiro numero: ')
let num2 = leia.questionInt('Digite o segundo numero: ')
let opr = leia.questionFloat('Escolha a Operacao: ')

switch(opr){
     case 1:
          console.log(`${num1} + ${num2} = ${num1+num2} `);
     break;
     case 2:
          console.log(`${num1} - ${num2} = ${num1-num2} `);
     break;
     case 3:
          console.log(`${num1} * ${num2} = ${num1*num2} `);
     break;
     case 4:
          console.log(`${num1} / ${num2} = ${num1/num2} `);
     break;
     default:
          console.log("**ERRO** Operação Inválida! ")
          process.exit(0)
}