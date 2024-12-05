
const leia = require('readline-sync')

console.log("\n=*=*=* PERCENTUAL DO AJUSTE *=*=*=*=")
console.log("1    | GERENTE         |  10%")
console.log("2    | VENDEDOR        |   7%")
console.log("3    | SUPERVISOR      |   9%")
console.log("4    | MOTORISTA       |   6%")
console.log("5    | ESTOQUISTA      |   5%")
console.log("6    | TÉCNICO DE TI   |   8%")
console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=\n")

let nome = leia.question('Digite seu nome: ')
let cod_cargo = leia.questionInt('Digite o codigo do Cargo: ')
let salario = leia.questionFloat('informe seu salario atual: ')

switch(cod_cargo){
     case 1:
          cargo = "Gerente"
          total = salario + 0.10 * salario;
     break;
     case 2:
          cargo = "Vendedor"
          total = salario + 0.07 * salario;
     break;
     case 3:
          cargo = "Supervisor"
          total = salario + 0.09 * salario;
     break;
     case 4:
          cargo = "Motorista"
          total = salario + 0.06 * salario;
     break;
     case 5:
          cargo = "Estoquista"
          total = salario + 0.05 * salario;
     break;
     case 6:
          cargo = "Técnico de TI"
          total = salario + 0.08 * salario;
     break;
     default:
          console.log("**ERRO** Cargo não encontrado! ")
          process.exit(0)
}
console.log(`${nome} seu cargo é ${cargo} seu salário atualizado é de R$ ${total.toFixed(2)}`)
