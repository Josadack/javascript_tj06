/**
 * Escreva um algoritmo que leia um número inteiro via teclado e mostre na 
 * tela uma mensagem indicando se este número é par ou ímpar
 *  e se o número é positivo ou negativo. Veja os exemplos abaixo:
 */

const leia = require('readline-sync')

let numero = leia.questionInt('Digite um numero: ')

if(numero % 2 == 0 && numero > 0){
    console.log(`O Número ${numero} é par e positivo`)
}else if(numero % 2 == 0 && numero < 0){
    console.log(`O Número ${numero} é par e Negativo`)
}else if(numero % 2 == 1 && numero > 0){
    console.log(`O Número ${numero} é ímpar e Positivo`)
}else{
    console.log(`O Número ${numero} é ímpar e Negativo`)
}