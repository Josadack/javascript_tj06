const leia = require('readline-sync')

//Dados do Usarios
const usuario = 'user@email.com.br';
const senha = 'user1234';
const isAdim = false;
const isGerente = true;
const isBlock = false;

console.log("\Tel ade login")

let usuarioLogin = leia.question('Digite o seu usuario: ')

let senhaLogin = leia.question('Digite a sua senha: ', {hideEchoBack: true})

if(usuarioLogin === usuario && senhaLogin === senha){
    var mensagem = "Seja bem vindo! Usuario autenticado com sucesso"
}else{
    var mensagem = "Acesso Negado"
}

console.log(mensagem)

if(!isBlock){
    console.log("O Usuario está ativo!")
}else{
    console.log("O Usuario está invativo! Contate o Adminstrador!")
    process.exit(0)
}

if(isAdim || isGerente){
    console.log("Acesso ao painel Administrativo Liberado!")
}else{
    console.log("Acesso ao painel Administrativo Negado!")
}

