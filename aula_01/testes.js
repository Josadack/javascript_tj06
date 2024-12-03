const leia = require('readline-sync')
let n1 , n2, soma ;

n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segudo numeor: ")
soma = n1 + n2
console.log(n1)
console.log(n2)
console.log("A Soma das valores", n1 + n2)
console.log("A Subtração das valores", n1 - n2)
console.log("A Divisão das valores", n1 / n2)
console.log("A Multiplicação das valores", n1 * n2)
console.log("A potenciação de n1 ^ n2 ", Math.pow(n1, n2))
console.log("A raizquadrada de n1 ", Math.sqrt(n1))