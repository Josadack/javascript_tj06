/**
 * Escreva um algoritmo que leia um número inteiro N entre 0 e 100, representando
a ordem de uma matriz quadrada M, e construa a matriz seguindo o padrão
descrito abaixo:
Para cada valor N lido (exceto o 0), imprima a matriz correspondente com as
seguintes regras de formatação:
● Cada elemento da matriz deve ocupar um campo de tamanho 3, alinhado à
direita e separado por um espaço.
● Não devem existir espaços extras ao final de cada linha da matriz.
 */
const leia = require('readline-sync')

//definido o quadrado da Matriz
let matriz = leia.questionInt('Digite a ordem da matriz: ')

if(matriz > 0){
    //Inicializando o Matriz
    matriz =  matrizInt = new Array(matriz);

    //Definido as colunas
    for(let indice = 0; indice < matrizInt.length; indice++ ){
        matrizInt[indice] = Array(matriz);
    }

    //Preenchendo colunas e linhas
    for(let indiceL = 0; indiceL < matrizInt.length; indiceL++){
        for(let indeceC =0; indeceC < matrizInt.length; indeceC++){
            let valor = leia.question('Popular Linhas e Colunas: ').trim(); // Limpa a entrada
            matrizInt[indiceL][indeceC] = parseInt(valor); // Converte a string para inteiro
        }
    }
    for (let indiceL = 0; indiceL < matrizInt.length; indiceL++) {  
        let linha = '';  
        for (let indiceC = 0; indiceC < matrizInt[indiceL].length; indiceC++) {  
            linha += matrizInt[indiceL][indiceC].toString().padStart(3, ' ') + ' '; // Formata com espaços  
        }  
    
        console.log(linha); // Imprime a linha formatada  
    }  
}else{
    console.log("O Valor deve maior que ZERO[0]")
}