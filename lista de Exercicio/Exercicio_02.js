/**Elabore um algoritmo para calcular e exibir a quantidade de litros de combustível
 * consumidos durante uma viagem com um automóvel que possui rendimento de 12 km/L. 
 * O cálculo do consumo de combustível deve ser feito com base em dois parâmetros que serão lidos via teclado:
Tempo gasto na viagem (em horas);
Velocidade média durante a viagem (em km/h).
Com essas informações, é possível calcular a distância percorrida e, em seguida, determinar 
a quantidade de combustível necessária. O resultado deve ser apresentado com duas casas decimais após o ponto. Veja os exemplos abaixo:
 */

const leia = require('readline-sync')

tempo = leia.questionFloat('\nDigite o tempo gasto na viagem (em horas): ')

velocidade = leia.questionFloat('\nDigite a velocidade media (em KM por horas): ')

let distancia = tempo * velocidade;
let consumoCombust = distancia / 12
console.log(` \ntotal de combustivel gasto (em litros) ${consumoCombust.toFixed(2)}`)