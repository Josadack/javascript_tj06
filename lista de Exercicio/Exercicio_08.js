/**
 * A empresa Portugol TI resolveu conceder um aumento de salários a seus
funcionários conforme a tabela abaixo:
SALÁRIO PERCENTUAL DE REAJUSTE
R$ 1412,00 15%
R$ 1412,01 a R$ 2824,00 12%
R$ 2824,01 a R$ 4236,00 10%
R$ 4236,01 a R$ 5648,00 7%
Acima de R$ 5648,00 5%
Elabora um algoritmo que leia via teclado o salário do funcionário (numero float) e
calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice
percentual do reajuste.
 */
const leia = require("readline-sync");

console.log("Digite o Valor do salário: ");
let salaioAtual = leia.questionFloat(`R$ `);

if (salaioAtual > 0 && salaioAtual <= 1412) {
  let reajuste = (salaioAtual * 15) / 100;
  let novoSalario = salaioAtual + reajuste;
  console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
  console.log(`Valor do reajuste: R$${reajuste.toFixed(2)}`);
  console.log("Percentual do aumento: 15% ");
} else if (salaioAtual > 1412 && salaioAtual <= 2824) {
  let reajuste = (salaioAtual * 12) / 100;
  let novoSalario = salaioAtual + reajuste;
  console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
  console.log(`Valor do reajuste: R$${reajuste.toFixed(2)}`);
  console.log("Percentual do aumento: 12% ");
} else if (salaioAtual > 2824 && salaioAtual <= 4236) {
  let reajuste = (salaioAtual * 10) / 100;
  let novoSalario = salaioAtual + reajuste;
  console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
  console.log(`Valor do reajuste: R$${reajuste.toFixed(2)}`);
  console.log("Percentual do aumento: 10% ");
} else if (salaioAtual > 4236 && salaioAtual <= 5648) {
  let reajuste = (salaioAtual * 7) / 100;
  let novoSalario = salaioAtual + reajuste;
  console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
  console.log(`Valor do reajuste: R$${reajuste.toFixed(2)}`);
  console.log("Percentual do aumento: 7% ");
} else if (salaioAtual > 5648) {
  let reajuste = (salaioAtual * 5) / 100;
  let novoSalario = salaioAtual + reajuste;
  console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
  console.log(`Valor do reajuste: R$${reajuste.toFixed(2)}`);
  console.log("Percentual do aumento: 5% ");
} else {
  console.log("Valores iguais a ou menor que zero[0] não são permitidos! .");
}
