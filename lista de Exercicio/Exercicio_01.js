/**
 * Elabore um algoritmo para calcular a área de um círculo.
 *  O algoritmo deverá solicitar ao usuário, via teclado, 
 * a entrada de um número do tipo float, que representará o raio do círculo. 
 * Em seguida, o programa calculará e exibirá a área do círculo. Veja os exemplos abaixo:
 */
const leia = require('readline-sync')

area = leia.questionFloat("Digite o raio do circulo: ")

area = Math.PI * Math.pow(area, 2)

console.log(area.toFixed(2))

