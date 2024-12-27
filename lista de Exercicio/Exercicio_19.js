/***Crie um algoritmo que leia os seguintes valores via teclado:
● Um número inteiro N (entre 0 e 11), representando uma linha específica de
uma matriz onde será realizada uma determinada operação matemática.
● Um caractere maiúsculo O ('S' ou 'M'), indicando a operação matemática que
será executada:
○ 'S': Soma dos elementos.
○ 'M': Média dos elementos.
Em seguida, faça o seguinte:
● Crie uma matriz M[12][12], preenchida com números inteiros aleatórios.
● Identifique os elementos da área verde da matriz (correspondente à linha N)
e, conforme a operação indicada ('S' ou 'M'), calcule e exiba o resultado.
A figura abaixo ilustra um exemplo em que o valor N = 2 é informado, destacando os
elementos da área verde que serão considerados na operação.
 */
const leia = require("readline-sync")

let num, operacao

//criando indice da matriz
let matrizAleat = new Array(12);

//Gerando Colunas
for(let indice = 0; indice < matrizAleat.length; indice++){
    matrizAleat[indice] = Array(12)
}

//Populando Linha e Colunas
for(let indiceLinha = 0; indiceLinha < matrizAleat.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizAleat.length; indiceColuna++){
        matrizAleat[indiceLinha][indiceColuna] = Math.floor(Math.random() * 10) + 1
    }
}
console.table(matrizAleat)

console.log("\nEscolha a linha da Matriz entre [0 e 11]:")
num = leia.questionInt('')

if(num >= 0 && num <= 11){
    do{
        console.log("Digite a Operação [S para soma / M para media]")
        operacao = leia.question('').toLowerCase();
        if(operacao === "s"){
            let soma = 0;
            for(let linha = 0; linha < matrizAleat[num].length; linha++){
                soma += matrizAleat[num][linha]
            }
            console.log(`\nA soma de todos os elementos da linha ${num} é: ${soma}`);

        }else if(operacao === 'm'){
            let soma =0;
            for(linha = 0; linha < matrizAleat[num].length; linha++){
                soma += matrizAleat[num][linha];
            }
            let media = soma / matrizAleat[num].length;
            console.log(`\nA média de todos os elementos da linha ${num} é: ${media}`);

        } else if (operacao !== 's' && operacao !== 'm') {  
            console.log("\nOperação inválida. Por favor, digite 'S' para soma ou 'M' para média.");  
        } 

        console.log("\nDeseja continuar? [S/N]")  
        continuar = leia.question('').toLowerCase();  
        if(continuar !== 's'){  
            break;  
        }  
       
    }while(true)

} else {  
    console.log("Linha inválida.");  
} 