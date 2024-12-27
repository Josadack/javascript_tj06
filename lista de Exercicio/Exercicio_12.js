/**
 * Elabore um algoritmo que leia 1 valor inteiro N, entre 5 e 2000 e a seguir, calcule
e mostre todos os números pares entre 1 e N (incluindo N), elevados ao
quadrado.
 */

const leia = require('readline-sync');

let numero = leia.questionInt("Digite um numero inteiro: ");

if(numero > 0){
 for(let i = 1; i <= numero; i++){
     if(i % 2 === 0){
          console.log(`${i}^2 = ${i**2}`)
        }
    }
}