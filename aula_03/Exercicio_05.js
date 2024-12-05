
const leia = require('readline-sync')

console.log("\n=*=*=*=*=*=*= MENU *=*=*=*=*=*=*=*=")
console.log("1  | CACHORRO QUENTE   |  R$ 10.00")
console.log("2  | X-SALADA          |  R$ 15.00")
console.log("3  | X-BACON           |  R$ 18.00")
console.log("4  | BAURU             |  R$ 12.00")
console.log("5  | REFRIGERANRE      |  R$ 8.00")
console.log("6  | SUCO DE LARANJA   |  R$ 13.00")
console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=\n")

let cod_prod = leia.questionInt('Digite o codigo do produto: ')
let quant = leia.questionInt('Informe a quantidade desejada: ')


switch(cod_prod){
     case 1:
          lanche = "Cachorro Quente"
          total = quant * 10.00;
     break;
     case 2:
          lanche = "X-Salada"
          total = quant * 15.00;
     break;
     case 3:
          lanche = "X-Bacon"
          total = quant * 18.00;
     break;
     case 4:
          lanche = "Bauru"
          total = quant * 12.00;
     break;
     case 5:
          lanche = "Refrigerante"
          total = quant * 8.00;
     break;
     case 6:
          lanche = "Suco de Laranja"
          total = quant * 13.00;
     break;
     default:
          console.log("**ERRO** Esse produto não está no catalago! ")
          process.exit(0)
}
console.log(`Você pediu ${quant} ${lanche} e o valor total é de R$${total.toFixed(2)}`)
