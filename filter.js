// const numero = [1,2,3,4,5,6,7,8]
// const pares = numero.filter(num => num % 2 === 0)

// console.log("Números pares", pares)








// const produtos = [
    // {
        // nome:"Notebook",
        // preco:3000
    // },
    // {
        // nome:"Mouse",
        // preco:50
    // },
    // {
        // nome:"Monitor",
        // preco:1200
    // },
    // {
        // nome:"Teclado",
        // preco:120
    // }
// ]

// const produtosMaioresQueMil = produtos.filter(produto => produto.preco > 1000)
// console.log(produtos)





const produtos = [
    {
        nome:"Mouse",
        preço:65
    },
    {
        nome:"Mouse",
        preço:70
    },
    {
        nome:"Mouse",
        preço:73
    },
    {
        nome:"Cadeira gaymer",
        preço:1402
    },
    {
        nome:"Mouse",
        preço:25
    },
    {
        nome:"Mouse",
        preço:40
    }
]

const produtosMouses = produtos.filter(produtosRato => produtosRato.nome == "Mouse")
console.log("Listando a seguir todos mouses da casa", produtosMouses)