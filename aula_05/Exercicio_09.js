/**Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
Todos os elementos da Diagonal Principal
Todos os elementos da Diagonal Secundária
A Soma de todos os elementos da Diagonal Principal
A Soma de todos os elementos da Diagonal Secundária
 */

const leia = require('readline-sync')

let soma1 = 0;
let soma2 = 0;

//Linhas
let matrizInt = new Array(3);

//Colunas
for(let contador = 0; contador < matrizInt.length; contador++){
    matrizInt[contador] = Array(3);
}
//Populando linha
for(let iLinha =0; iLinha < matrizInt.length; iLinha++){
    //Populando coluna
    for(let iColuna = 0; iColuna < matrizInt.length; iColuna++){
        matrizInt[iLinha] [iColuna] = leia.questionInt("Digite um numero: ")
    }
}
//Calculo da Diagonal Principal
for(let i = 0; i < matrizInt.length; i++){
    soma1 += matrizInt[i][i]
}
//Calculo da Diagonal Segundaria
for(let i =0; i < matrizInt.length; i++){
    soma2 += matrizInt[i][matrizInt.length -1 -i]
}

console.table(matrizInt)
console.log(`O cálculo da diagonal principal é: ${soma1}`)
console.log(`O cálculo da diagonal secundaria é: ${soma2}`)
  