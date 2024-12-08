const leia = require('readline-sync')

//Criação das linhas
let matrizInteiros = new Array(2);

//Criação de Das colunas
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}
//Preenchendo os valores Linha e colunha
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for (let indicecoluna = 0; indicecoluna < matrizInteiros[indiceLinha].length; indicecoluna++){
        matrizInteiros[indiceLinha] [indicecoluna] = leia.questionInt("Digite um numero: ")
}
}
console.table(matrizInteiros)
