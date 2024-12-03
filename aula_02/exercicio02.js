const leia = require("readline-sync");
let nota1, nota2, nota3, nota4, media, mr;

console.log("***********************************");
console.log(
  "Este programa calcula a média aritmética de quatro notas.\nPor favor, insira cada nota quando solicitado:"
);
nota1 = leia.questionFloat("Informe o valor da primeira: ");

nota2 = leia.questionFloat("Informe o valor da segunda: ");

nota3 = leia.questionFloat("Informe o valor da terceira: ");

nota4 = leia.questionFloat("Informe o valor da quarta: ");

media = (nota1 + nota2 + nota3 + nota4) / 4;

mr = media.toFixed(2);

console.log(`\nA media final é: ${mr}`);
