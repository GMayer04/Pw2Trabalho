const Database = require('./Database')
const Dados = require('readline-sync')

var nome = Dados.question("Seu nome ?")

//Perguntas
console.log ("MENU")
console.log (`Olá" ${nome},Que bom te ver!`)
console.log ("")
console.log ("")
console.log ("Seleção:")
console.log ("1-LISTA DOS NOSSOS LIVROS") 
console.log ("2-PESQUISA SELETIVA")

var Pesquisa = Number(Dados.question("QUAL OPÇÃO DESEJADA ?"))
if (Pesquisa == 1){
    console.table(Database)
}
else if (Pesquisa == 2){
    let nomeautor = Dados.question("Qual nome do autor ?")
    let resultado = Database.filter((Livro)=> {
        return Livro.author == nomeautor
    })
console.table(resultado)
}

