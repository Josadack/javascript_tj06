
const leia = require('readline-sync')

console.log("\n=*=*=* BANCO JFSS *=*=*=*=")
console.log("1    | SALDO     ")
console.log("2    | SAQUE     ")
console.log("3    | DEPÓSITO  ")
console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=\n")

let saldo = 1000
let opr = leia.questionFloat('Escolha a Operacao: ')

switch(opr){
     case 1:
          console.log(`Operação Saldo \nSeu saldo R$ ${saldo.toFixed(2)} `);
     break;
     case 2:
          saque = leia.questionFloat('Qual o valor do saque R$: ')  
          if(saque > saldo)
          console.log(`Operação Saque \nSaldo insuficiente! `);
     break;
     case 3:
          desposito = leia.questionFloat('Qual o valor a ser deposito R$: ')
          console.log("Operação Despósito \nNovo Saldo",
               new Intl.NumberFormat("pt-BR", 
               { style: "currency", 
               currency: "BRL" }).format( saldo + desposito));
     break;
     default:
          console.log("**ERRO** Operação Inválida! ")
          process.exit(0)
}