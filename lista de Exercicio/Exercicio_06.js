/**
 Leia três valores de ponto flutuante A, B e C, que representam os lados de um
triângulo. Em seguida, determine o tipo de triângulo que esses três lados formam,
com base nas condições abaixo, exibindo a mensagem correspondente:
● Se A ≥ B + C, o programa deve exibir: NÃO FORMA TRIÂNGULO.
● Se todos os lados forem iguais, o programa deve exibir: TRIÂNGULO
EQUILÁTERO.
● Se apenas dois lados forem iguais, o programa deve exibir: TRIÂNGULO
ISÓSCELES.
● Se todos os lados forem diferentes e formarem um triângulo, o programa
deve exibir: TRIÂNGULO ESCALENO.
 */
const leia = require('readline-sync')

let A = leia.questionFloat('Digite o tamanho do Lado A: ')
let B = leia.questionFloat('Digite o tamanho do Lado B: ')
let C = leia.questionFloat('Digite o tamanho do Lado C: ')


if(A > B + C || B > A + C || C > A + B){
    console.log("NÃO FORMA TRIÂNGULO")
}
else if(A === B && B === C){
    console.log("TRIANGULO EQUILÁTERIO ")
}
else if(A === B || A === C || B === C){
    console.log("TRIÂNGULO ISÓSCELES")

}else{
    console.log("TRIÂNGULO ESCALENO")
}
