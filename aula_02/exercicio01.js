const leia = require("readline-sync");

let salario;
let abono;

salario = leia.questionFloat("Informe o valor do salario: ");
abono = leia.questionFloat("Informe o valor do abono: ");

//Salário Atual
console.log("\nSaláro atual é de: ",  new Intl.NumberFormat("pt-BR", {style: "currency"
    , currency : "BRL"}).format(salario))

//Abono
console.log("\n O valor do seu abono é de: ",abono, "%")
    
//Salário mais abono
console.log(
  "\nSalário mais abono",
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    salario + abono * salario
  )
);
