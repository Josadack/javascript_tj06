/**Dado um vetor contendo 10 números inteiros não ordenados e não repetidos,
 *  construa um algoritmo que consiga pesquisar dados no vetor, 
 * onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. 
 * Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. Veja os exemplos abaixo: */

const leia = require('readline-sync')

let vetorNum = [2,5,1,3,4,9,7,8,10,6];

let continua = "S"

while(continua === "S"){

    let valor = leia.questionInt('\nDigite um numero entre [1 e 10] Descubra sua posicao no Vetor: ');
    if(valor > 0 && valor <= 10){
        console.log(`O Número ${valor} está no índice ${vetorNum.indexOf(valor)}`);
        
    }else{
        console.log(`\nO número ${valor} não foi encontrado!`)
    }

    continua = leia.question("\nDeseja continuar [S/N]: ").toUpperCase();

}
  