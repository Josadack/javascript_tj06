/**
 * O Natal traz tanta alegria que você sente vontade de gritar para o mundo: "Feliz
Nataaaal!!". Para expressar toda essa felicidade, crie um algoritmo que receba
um número inteiro I (entre 1 e 100), representando o seu índice de felicidade.
Com base nesse índice, determine quantas vezes a letra 'a' será repetida na
última palavra da frase "Feliz Natal".
 */

const leia = require('readline-sync');

let numInt = leia.questionInt('Digite quantas vezes sera repetido: ')
let letra = "";
for(let i = 1; i <= numInt; i++){
    letra += "a";
}
console.log(`Feliz Nat${letra}l`);