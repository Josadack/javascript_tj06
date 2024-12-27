/**
 * Desenvolva um algoritmo para determinar todos os divisores de um número
inteiro. O algoritmo deverá solicitar ao usuário a entrada via teclado de um
número inteiro e, em seguida, calcular e exibir todos os divisores inteiros que o
dividem exatamente (resto da divisão igual a zero).
 */
const leia = require('readline-sync')

let numero = leia.questionInt('Digite um numero inteiro: ')

for(let i = 1;  i <= numero; i++){
   if(numero % i == 0)
     console.log(i)
}