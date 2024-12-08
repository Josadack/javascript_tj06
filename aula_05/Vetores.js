const leia = require('readline-sync')

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

let vetotInteiros =  new Array(5);

let vetorNumero = [7,5,1,9,10,6,4,2,3]

/*for(let contador =0; contador < vetorStrings.length; contador++){
      console.log(vetorStrings[contador ]);
}*/
console.log(`O tamanho do Vetor ${vetorStrings.length }`)

/*for(let contador =0; contador < vetotInteiros.length; contador++){
    vetotInteiros[contador] = leia.questionInt('Digite um numero: ')
}*/

console.table(vetotInteiros)

//Para colocar os numeros em ordem crescente
console.table(vetorNumero.sort((a,b)=> a - b))