/**
 * Elabore um algoritmo que leia via teclado um número inteiro que
 * representa um intervalo de tempo em segundos. 
 * Na sequência exiba este tempo na tela expresso em horas:minutos:segundos.
 */
const leia = require('readline-sync')

let tempo = leia.questionInt('Digite o tempo: ')

let horas = Math.floor(tempo / 3600);
let minutos = Math.floor((tempo % 3600) / 60)
let segundos = tempo % 60

console.log(`Tempo expresso em (hh:mm:ss): ${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`);