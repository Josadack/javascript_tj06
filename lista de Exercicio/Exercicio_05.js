/**Elabore um algoritmo que leia 3 valores inteiros e ordene-os tanto em ordem 
 * crescente quanto em ordem decrescente. 
 * No final, o programa deve exibir os valores na seguinte sequência:
Na sequência original;
Em ordem crescente;
Em ordem decrescente.
 * 
 */
const leia = require('readline-sync')

num1 = leia.questionInt('\nDigite o primeiro numero inteiro: ')
console.log('')
num2 = leia.questionInt('Digite o segundo numero inteiro: ')
console.log('')
num3 = leia.questionInt('Digite o terceiro numero inteiro: ')
console.log('')

console.log(`Sequência original: ${num1} ${num2} ${num3} `)

let maior, meio, menor;  

// Determinar o maior, meio e menor  
if (num1 >= num2 && num1 >= num3) {  
    maior = num1;  
    if (num2 >= num3) {  
        meio = num2;  
        menor = num3;  
    } else {  
        meio = num3;  
        menor = num2;  
    }  
} else if (num2 >= num1 && num2 >= num3) {  
    maior = num2;  
    if (num1 >= num3) {  
        meio = num1;  
        menor = num3;  
    } else {  
        meio = num3;  
        menor = num1;  
    }  
} else {  
    maior = num3;  
    if (num1 >= num2) {  
        meio = num1;  
        menor = num2;  
    } else {  
        meio = num2;  
        menor = num1;  
    }  
}  


console.log(`Ordem crescente: ${menor} ${meio} ${maior}`);  

console.log(`Ordem decrescente: ${maior} ${meio} ${menor}`);  