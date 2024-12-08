const leia = require("readline-sync");

let idade=1, controle1=0, controle=0;

while(idade > 0){
  idade = leia.questionInt('Digite uma idade: ')

  if(idade >0 && idade <= 21){
    controle1++
  }else if(idade > 50){
    controle++
  }
}
console.log(`Total de pessoas menores de 21 anos: ${controle}`)
console.log(`Total de pessoas maiores de 50 anos: ${controle}`)



