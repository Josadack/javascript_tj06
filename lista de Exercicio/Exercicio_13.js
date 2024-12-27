/**
 * Elabore um algoritmo que leia 1 valor inteiro N, entre 1 e 1000 e a seguir, calcule
e mostre todos os números entre 1 e N (incluindo N), elevados ao quadrado
e ao cubo.
 */
const leia = require('readline-sync')
let num = leia.questionInt("Digite um numero inteiro: ")

if(num > 0){
    for(let i = 1; i <= num; i++ ){
        console.log(`[${i}² = ${i**2}]  [${i}³ = ${i**3}³]`)
    }
}