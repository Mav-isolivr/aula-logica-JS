const numeros = [1,2,3,4,5]
const valoresDobrados = numeros.map(num => num * 2)

// console.log(valoresDobrados)
// console.log(numeros)

const usuarios = [
    {
        nome:"Mavi",
        idade:"18",
    },
    {
        nome:"Kurt",
        idade:"20",
    },
    {
        nome:"Ket",
        idade:"19",
    }
]



const nomesUsuario = usuarios.map(usuario => usuario.idade)
console.log("nomes de usuários",nomesUsuario)
