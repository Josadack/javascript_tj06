let nome = "josadaque";
let profissao = "estudante tech";
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("\nNome: ", nome);
console.log("\nProfissão: ", profissao);
//coverção de moedas
console.log(
  "Salário liquido: ",
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    salarioBruto + bonus * salarioBruto
  )
);
//Interpolação
console.log(`O salário Bruto do colaborador ${nome} é ${salarioBruto}`);
//console.log("\ntipo da variavel: ", typeof nome)
