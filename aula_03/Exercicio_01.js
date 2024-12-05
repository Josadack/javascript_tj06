/** 
Desenvolva um algoritmo que leia 3 valores inteiros A, B e C 
e imprima na tela se a soma de A + B é maior, menor ou igual a C.
*/
const leia = require('readline-sync')

let A = leia.questionInt("Digite o valor de A: ")
let B = leia.questionInt("Digite o valor de B: ")
let C = leia.questionInt("Digite o valor de C: ")

if(A + B > C){
    console.log(`\n ${A} + ${B} = ${A+B} > ${C} `)
    console.log(`A soma de A + B é Maior que C`)
}else if(A + B < C){
    console.log(`\n ${A} + ${B} = ${A+B} < ${C} `)
    console.log(`A soma de A + B é Menor que C`)
}else{
    console.log(`\n ${A} + ${B} = ${A+B} = ${C} `)
    console.log(`A soma de A + B é igual a C`)
}