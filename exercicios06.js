//Crie um array de objetos em que cada objeto é um produto, tendo como chave (nome, preço, descrição). Crie pelo menos 3 produtos.
//Crie uma variável que irá armazenar o array com os nomes dos produtos
//Crie uma segunda variável que irá armazenar o array com os preços dos produtos
//Use o laço for ou if para exibir cada item do array da variável de nomes no console

const produtos = [
    {
        nome:"pano" ,
        preco:"7" ,
        descrição:"pano para limpeza suave" ,
    },
    {
        nome:"xarope" ,
        preco:"12" ,
        descrição:"remedio xarope para dores" ,
    },
    {
        nome:"celular roubado" ,
        preco:"230" ,
        descrição:"não encotrado" ,
    }
]

const nomeProdutos = produtos.map(produtos => produtos.nome)
const precoProdutos = produtos.map(produtos => produtos.preco)

//console.log(precoProdutos)

function sequenciaProdutos(produtos){
    for(let i = produtosInicial; i<=produtosFinal; i++){
        console.log(i)
    }
}

console.log(sequenciaProdutos)