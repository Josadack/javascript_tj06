/**
 * Elabore um algoritmo que leia 2 valores inteiros X e Y. A seguir, calcule e mostre
a soma de todos os números impares entre eles.
 */
const leia = require('readline-sync')

let x = leia.questionInt('Digite o primeiro numero inteiro: ')

let y = leia.questionInt('Digite o segundo numero inteiro: ')
let num = 0;

if( x < y){
    for(let i = x; i <= y; i++){
        
        if(i % 2 == 1){
            num += i 
        }
    }
    //Se o valor de X for maior que o de Y, devemos trocar os valores
}else if( x > y){
    n = x
    x = y
    y = n
    for(let i = x; i <=  y; i++){
        if(i % 2 == 1){
            num += i 
        }
    }
    console.log('\nVocê digitou os número na ordem errada.')
    console.log('\nO correto é o valor menor primeiro, e depois o maior!')
    console.log('\nMas vou ajustar para você!')
}
console.log(num)