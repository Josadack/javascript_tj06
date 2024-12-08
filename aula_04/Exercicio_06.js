/**
 * Escreva um algoritmo, que leia números inteiros 
 * via teclado, até que o número zero seja digitado. 
 * Ao final, mostre na tela a média de todos os números
 *  digitados, que sejam múltiplos de 3
 */

const leia = require("readline-sync");

let numero, soma=0, media = 0, contador = 0;
console.log('\nDigite [0] se desejar para o programa!');
do{
    numero = leia.questionInt('\nDigite um numero: ');
    if(numero % 3 === 0)
       soma += numero
       contador++
        console.log(contador)
}while(numero != 0);
media = soma  / contador;
console.log(` A média de todos os números mutiplos de 3 é: ${media.toFixed(2)}`);




