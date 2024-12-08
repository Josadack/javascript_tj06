const leia = require("readline-sync");

let n1 = leia.questionInt("\nDigite o primeiro numero do intervalo: ");
let n2 = leia.questionInt("\nDigite o ultimo numero do intervalo: ");
let controle

if (n1 < n2) {
    for(controle = n1; controle <= n2; controle++){
        if(controle % 3 === 0 && controle % 5 === 0)
            console.log(`${controle} é multiplo de 3 e 5`)  
    }
} else {
  console.log("Intervalo Inválido...");
}
