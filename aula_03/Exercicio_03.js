/**
 * Para doar sangue é necessário ter entre 18 e 69 anos. 
 * Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. 
 * Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro)
 *  do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de 
 * sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue. 
 */

const leia = require('readline-sync')
console.log(" \n *********** MENU ***********")
console.log("\nCaros pacientes, para agilizar o atendimento ",
            "\npor favor informe seus dados conforme a solicitação.:\n ")

let nome = leia.question('Por gentileza, digite seu nome: ')
let idade = leia.questionInt('Informe sua idade: ')
let doacao = leia.question('Primeira doacao de sangue? Digite "s" ou "n": ').toLowerCase();  
let apto = false;


if (idade >= 18 && idade <= 69) {  
    if (idade >= 60 && idade <= 69) {  
        apto = !doacao; // Só apto se não for a primeira doação  
    } else {  
        apto = true; // Apto se tiver entre 18 e 59 anos  
    }  
}  

if (apto) {  
    console.log(`${nome} está apto(a) para doar sangue`);  
} else {  
    console.log(`${nome} não está apto(a) para doar sangue`);  
}  