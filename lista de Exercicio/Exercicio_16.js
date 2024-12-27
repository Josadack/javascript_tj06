/**
 * Elabore um algoritmo que crie um vetor de inteiros com 20 posições e exiba os
dados do vetor na tela. Na sequência, troque o primeiro elemento com o último, o
segundo elemento com o penúltimo, o terceiro com o antepenúltimo e assim
sucessivamente, até trocar o 10º com o 11º valor. No final, mostre o vetor
modificado.
 */

let vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(`\n\nVetor original:  \n\n[${vetor}]`)
for(let i = 0; i < 10; i++){
    let contador = vetor.length -1 -i
    let s = vetor[i]
    vetor[i] = vetor[contador]
    vetor[contador] = s

}
console.log(`\n\nVetor modificado: \n\n[${vetor}]`)


