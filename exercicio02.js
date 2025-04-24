const produto01 = {
    nome:"Garrafa",
    preço: 20.00,
    quantidade: 3
}

const produto02 = {
    nome:"Abridor",
    preço: 5.00,
    quantidade: 2
}

const valorFinal = produto01.preço * produto01.quantidade + produto02.preço * produto02.quantidade


console.log(`O valor total dos produtos é igual ${valorFinal}`)