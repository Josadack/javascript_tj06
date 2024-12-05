/**
Escreva um algoritmo que leia 3 palavras (string), que definem as
 características de um tipo de animal, segundo o 
diagrama abaixo, que deve ser lido da esquerda para a direita. 
 */

const leia = require('readline-sync')

console.log("\n***** ***** **")
console.log("Jogo de Adivinhar Animais")
console.log("***** ***** **")

let palavra1 = leia.question('Digite a primeira palavra: ').toLowerCase()
let palavra2 = leia.question('Digite a segunda palavra: ').toLowerCase()
let palavra3 = leia.question('Digite a terceira palavra: ').toLowerCase()


if(palavra1 === "vertebrado" && palavra2 === "ave" && palavra3 ==="carnivoro"){
     animal = "Águia"
}else if(palavra1 === "vertebrado" && palavra2 === "ave" && palavra3 ==="onivoro"){
     animal ="Pombo"
}else if(palavra1 === "vertebrado" && palavra2 === "mamifero" && palavra3 ==="onivoro"){
     animal = "Homem"
}else if(palavra1 === "vertebrado" && palavra2 === "mamifero" && palavra3 ==="herbivoro"){
     animal = "Homem"
}else if(palavra1 === "invertebrado" && palavra2 === "inseto" && palavra3 ==="hematofago"){
      animal = "Pulga"
}else if(palavra1 === "invertebrado" && palavra2 === "inseto" && palavra3 ==="herbivoro"){
      animal = "Lagarta"
}else if(palavra1 === "invertebrado" && palavra2 === "anelideo" && palavra3 ==="hematofago"){
     animal = "Sanguessuga"
}else if(palavra1 === "invertebrado" && palavra2 === "anelideo" && palavra3 ==="onivoro"){
     animal = "Minhoca"
}else{
    console.log("\nAnimal não encontrado")
   process.exit(0)
}

console.log(`\n O animal é : ${animal}`)