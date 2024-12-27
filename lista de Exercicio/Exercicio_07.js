/**
 * Elabore um algoritmo que leia via teclado um número inteiro que representa o
DDD de uma cidade. Na sequência exiba o nome da cidade o qual o DDD
pertence. Para o exercício, considere a tabela de cidades abaixo. Caso o
DDD não seja encontrado, exiba a mensagem DDD não encontrado!
 */

const leia = require('readline-sync')

let ddd = leia.questionInt('Digite o DDD: ')

if(ddd === 11){
    console.log(`O DDD ${ddd} pertence à cidade de São Paulo `)
}else if(ddd === 21){
    console.log(`O DDD ${ddd} pertence à cidade do Rio de Janeiro `)
}else if(ddd === 27){
    console.log(`O DDD ${ddd} pertence à cidade de Vitória `)
}else if(ddd === 31){
    console.log(`O DDD ${ddd} pertence à cidade de Belo Horizonte `)
}else if(ddd === 71){
    console.log(`O DDD ${ddd} pertence à cidade de Salvador `)
}else{
    console.log("DDD não encontrado!")
}