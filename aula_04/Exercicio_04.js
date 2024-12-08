/**
 * Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores
 *  da área de Desenvolvimento e precisam de um sistema para analisar os dados.
 *  Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:
 */
const leia = require('readline-sync')

let idade,
    identidadeDeGenero,
    pessoa,
    mulherCis = 0,
    homemCis = 0,
    naoBinario = 0,
    mulherTrans = 0,
    homemTrans = 0,
    backend = 0,
    contador = 0;
    soma = 0
    continua = 'S'
    media = 0

while(continua === 'S'){

        idade = leia.questionInt('\nInforme sua idade: ')
        console.log('\n******** ID Gênero ******')
        console.log('1 - Mulher Cis')
        console.log('2 - Homem Cis')
        console.log('3 - Não Binário')
        console.log('4 - Mulher Trans')
        console.log('5 - Homem Trans')
        console.log('6 - Outros')
        console.log('****************************')
        identidadeDeGenero = leia.questionInt('Qual seu ID Genero?: ')
        
        if(identidadeDeGenero < 1 || identidadeDeGenero > 6){
            console.log('Por favor escolha uma das opções de 1 - 6')

       }else if(identidadeDeGenero > 0 || identidadeDeGenero < 6 ){
            console.log('\n1 - Backend')
            console.log('2 - Frontend')
            console.log('3 - Mobile')
            console.log('4 - FullStack')            
            pessoa = leia.questionInt('\nVoce e uma pessoa desenvolvedora: ')
            contador++ 
            soma += idade
        }

        if(pessoa === 1)
            backend++

        if(pessoa === 2 && identidadeDeGenero === 1 )
            mulherCis++
       
        if(pessoa === 2 && identidadeDeGenero === 4 )
           mulherTrans++

        if(pessoa === 3 && identidadeDeGenero == 2 && idade > 40)
            homemCis++

        if(pessoa ===3 && identidadeDeGenero === 5 && idade > 40)
          homemTrans++
           
        if(pessoa === 4 && identidadeDeGenero === 3 && idade < 30)
            naoBinario++
        
        media = (soma/contador).toFixed(2)
        continua = leia.question('Deseja continuar [S/N]: ').toUpperCase();
    }
    console.log(`\nO número de pessoas desenvolvedoras Backend: ${backend}`)
    console.log(`O número de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulherCis+mulherTrans}`)
    console.log(`O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homemCis + homemTrans}`)
    console.log(`O número de Não Binários desenvolvedores FullStack menores de 30 anos: ${naoBinario}`)
    console.log(`O número total de pessoas que responderam à pesquisa: ${contador}`)
    console.log(`A média de idade das pessoas que responderam à pesquisa: ${media}`)