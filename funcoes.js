//function saudacao(){
//    console.log("Bom dia! :D")
//}

//arrow function com parâmetros
//const saudacao = (turno,nome="Mel")=>{
//    console.log(`${turno} ${nome}`)
//}
//
//saudacao("Bom dia","MaviO.o")
//saudacao("Boa noite")

//const soma = (x,y)=>{
//    return x+y
//}


const soma = (x,y)=> x+y
const subtraocao = (x,y,) => x-y
const multiplicacao = (x,y) => x*y
const divisao = (x,y) => x/y


//função retornando o calculo de duas funções
//const calculo = (x,y,z,a)=>{
//    return soma (y,x) - divisao(z,a)
//}
//
//const resultadoDoCalculo = calculo(22,23,2,4)
//console.log("Resultado do cálculo ",resultadoDoCalculo)



//retornar o valor de várias funções em um return dentro de um objeto

//const calculo = (x,y) => {
//    return {
//        soma: soma(x,y),
//        subtraocao: subtraocao(x,y),
//        multiplicacao: multiplicacao(x,y),
//        divisao: divisao(x,y)
//    }
//}

//const resultadoFinalDoCalculo = calculo(20,10)
//console.log("Resultado final",resultadoFinalDoCalculo)


//escopo global e local (de bloco ou função)
const escopoGlobal = "Escopo Global"
function chamaEscopo(){
    const escopoLocal = "Espoco Local"
    console.log("escoo local",escopoGlobal)
}

console.log(escopoGlobal)






