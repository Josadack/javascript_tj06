/**
 * Elabore um algoritmo que leia um vetor de inteiros com 10 posições. No final,
mostre todas as posições do vetor que armazenam um valor menor ou igual a 10
e o valor armazenado em cada uma das posições.
 */
const leia  = require('readline-sync');

let vetor = new Array(10);
let posicoes = [];

for(let i = 0 ; i < vetor.length; i++){
    console.log(`Digite o ${i + 1}º número intero: `)
    vetor[i] = leia.questionInt('')

    if (vetor[i] <= 10){
        
        posicoes.push(i)
}  
}
for(let i = 0; i< posicoes.length;  i++){
    console.log(`Vetor [${posicoes[i]}] =  ${vetor[posicoes[i]]}`)
}

