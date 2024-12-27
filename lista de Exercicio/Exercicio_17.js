/**
 *Elabore um algoritmo que crie um vetor de inteiros com 100 posições e leia um
número T inteiro entre 2 e 50. Preencha o vetor de inteiros com uma sequência
repetitiva de números de 0 até T - 1. O ciclo deve se repetir até que todas as 100
posições do vetor sejam preenchidas. Após preencher o vetor, exiba o conteúdo
na tela.
 */
const leia  = require('readline-sync');

let vetor = new Array(100);

console.log('Digite um número inteiro entre [2 e 50]:')
let num = leia.questionInt('')

if(num >= 2 && num <= 50){
  for(let i = 0; i < vetor.length; i++){
    vetor[i]  =  i % num;
    }

    for(let i = 0; i < vetor.length; i++){
        console.log(`N[${i}] = ${vetor[i]}`)
    }
}



