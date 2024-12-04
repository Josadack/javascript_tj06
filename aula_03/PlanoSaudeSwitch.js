const leia = require('readline-sync')

let nome = leia.question('Digite seu nome: ')

console.log(" \n****** Faixas Etárias *****")
console.log("\n1 - Idade entre 0 e 10 anos")
console.log("\n2 - Idade entre 11 e 29 anos")
console.log("\n3 - Idade entre 30 e 45 anos")
console.log("\n4 - Idade entre 46 e 59 anos")
console.log("\n5 - Idade entre 60 e 65 anos")
console.log("\n6 - Idade acima de 66 anos")

let faixaEtaria = leia.questionInt('Digite a sua Faixa Etaria: ')
switch(faixaEtaria){
    case 1:
        valor = 100.00;
        break;
    case 2:
        valor = 200.00;
         break;
    case 3: 
        valor = 300.00;
        break;
    case 4:
        valor = 500.00;
        break;
    case 5:
        valor = 600.00;
        break;
    case 6:
        valor = 1000.00;
        break;
    default:
        console.log("\nFaixa Etária Invalida!")
        process.exit(0)
}

console.log(`O valor do plano de saúde do(a) ${nome} é de R$ ${valor.toFixed(2)}`)