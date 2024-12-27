/**Elabore um algoritmo que leia via teclado um número inteiro que representa um 
 * valor em Reais (R$). Na sequência exiba o menor número de notas (Cédulas de dinheiro), 
 * do qual este valor pode ser decomposto. Para o exercício, considere as 
 * notas de R$ 200.00, R$ 100.00, R$ 50.00, R$ 20.00, R$ 10.00, R$ 5.00, R$ 2.00 e R$ 1.00.
 * 
 */
const leia = require('readline-sync')

let valor = leia.questionInt('Digite um valor em Reais (sem os centavos): R$ ')

let valorRestante = valor;

let nota200 = Math.floor(valorRestante / 200)
valorRestante %= 200; 

let nota100 = Math.floor(valorRestante / 100)
valorRestante %= 100; 

let nota50 = Math.floor(valorRestante / 50)
valorRestante %= 50;

let nota20 = Math.floor(valorRestante / 20)
valorRestante %= 20; 

let nota10 = Math.floor(valorRestante / 10)
valorRestante %= 10; 

let nota5 = Math.floor(valorRestante / 5)
valorRestante %= 5;

let nota2 = Math.floor(valorRestante / 2)
valorRestante %= 2;

let nota1 = Math.floor(valorRestante / 1)
valorRestante %= 1; 

console.log(`${nota200} nota(s) de R$ 200,00`);  
console.log(`${nota100} nota(s) de R$ 100,00`); 
console.log(`${nota50} nota(s) de R$ 50,00`);  
console.log(`${nota20} nota(s) de R$ 20,00`);  
console.log(`${nota10} nota(s) de R$ 10,00`);  
console.log(`${nota5} nota(s) de R$ 5,00`); 
console.log(`${nota2} nota(s) de R$ 2,00`);  
console.log(`${nota1} nota(s) de R$ 1,00`); 