const valor01 = 50
const valor02 = 20

// &&=> Operador de conjunção (e)
// ||=> Operador de disjunção (ou)
// !=> Negação

//console.log(`${valor01>20 || valor02>=30}`)



//Faça um algoritimo para verificar se o candidato pode dirigir. Para isso ele precisa;
//1- ter idade >=18
//2- ter carteira


const temCarteira = false
const idade = 11

const VerificadorDeIdade = idade >= 18 
const VerificadorDeSIMouNao = VerificadorDeIdade && temCarteira == true

console.log(`O candidato ${VerificadorDeSIMouNao ? "Pode dirigir" : "Não pode dirigir"} `)

//const resultadoDoTeste = idade>=18 && temCarteira
//console.log(`O candidato ${resultadoDoTeste ? "Pode dirigir" : "Não pode dirigir"}`)



