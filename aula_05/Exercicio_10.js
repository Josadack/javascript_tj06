
const leia = require('readline-sync')

//Linhas
let matrizInt = new Array(10);

//Colunas
for(let contador = 0; contador < matrizInt.length; contador++){
    matrizInt[contador] = Array(4);
}
//Populando linha
for(let iLinha =0; iLinha < matrizInt.length; iLinha++){
    //Populando coluna
    for(let iColuna = 0; iColuna < matrizInt[iLinha].length; iColuna++){
        matrizInt[iLinha] [iColuna] = leia.questionFloat("Digite um numero: ")
        //console.table(matrizInt) //verificando populamento da matriz
    }

}
//calcular media 
let mediaAluno =[]
let media =0;
for(let linha = 0; linha < matrizInt.length; linha++){
    let soma = 0
    for(let coluna = 0; coluna < matrizInt[linha].length; coluna++ ){
        soma += matrizInt[linha][coluna]// Soma os elementos da linha
    }
    media = soma / matrizInt[linha].length //Calcula a média
    mediaAluno[linha]  = media.toFixed(2);
}
console.table(" ")
console.table("  Médias dos alunos: ")
for(let i =0; i < mediaAluno.length; i++){
    console.log(`A Média do ${i+1}º Aluno é: ${mediaAluno[i ]}`)
}

