const leia = require("readline-sync");
const horasp = 5
let salarioBruto, adicionalNoturno, horasExtras, descontos;

console.log("******************************")
console.log("Este programa calcula seu salário líquido.  \nPor favor, informe os valores a seguir:");  

salarioBruto = leia.questionFloat('Salario bruto: ');
adicionalNoturno = leia.questionFloat('Informe o Adicional Noturno: ');
horasExtras = leia.questionFloat('Informe as horas Extras: ');
descontos = leia.questionFloat('Informe o Desconto: ');

console.log("\nO Salário líquido é de :", new Intl.NumberFormat("pt-BR",
  {style: "currency", currency: "BRL"}).format
  (salarioBruto + adicionalNoturno + (horasExtras * horasp) - descontos));
