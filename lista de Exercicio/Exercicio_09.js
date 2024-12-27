/**
 * A fabricação de presentes para o Natal é um processo desafiador. Muitas vezes,
os duendes trabalham até tarde para garantir que tudo esteja pronto a tempo e
com perfeição. Para organizar melhor suas tarefas, os duendes calcularam o
tempo necessário, em minutos, para fabricar cada presente.
Agora, com o expediente chegando ao fim, o duende Ed precisa de sua ajuda! Ele
ainda tem dois presentes para fabricar e faltam N minutos para o término do
expediente. Sua missão é ajudá-lo a descobrir se ele conseguirá finalizar os dois
presentes hoje ou se precisará adiar o trabalho para amanhã.
Elabore um algoritmo que:
● Leia um número inteiro N (entre 0 e 100), indicando os minutos restantes
no expediente.
● Leia dois números inteiros A e B (entre 0 e 100), representando o tempo
necessário para fabricar cada um dos dois presentes.
Calcule se o tempo restante é suficiente para concluir ambos os presentes e exiba:
● "Farei hoje!" se for possível fabricar os dois presentes dentro do tempo
disponível.
● "Deixa para amanhã!" caso contrário.
 */

const leia = require('readline-sync')

let minutos = leia.questionInt("Tempo Restante (min): ")

console.log("\nTempo de fabricação do presente 01(min): ")
let A = leia.questionInt("")

console.log("\nTempo de fabricação do presente 01(min): ")
let B = leia.questionInt("")

if(minutos > A + B ){
    console.log("\nFarei Hoje! ")
}else{
    console.log("\nDeixa para amanhã! ")
}