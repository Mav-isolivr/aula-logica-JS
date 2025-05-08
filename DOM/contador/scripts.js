let contador = 0

const resultado = document.querySelector("#resultado")
const btnIncrementaValor = document.querySelector("#btnIncrementar")

btnIncrementaValor.addEventListener("click", ()=>{
    contador++
    resultado.textContent = `Contador: ${contador}`
})



btnDescrementarValor = document.querySelector("#btnDescrementar")

btnDescrementarValor.addEventListener("click", ()=>{
    if(contador>0){
    contador--
    resultado.textContent = `Contador: ${contador}`
}
})
// if usado pra não mais que 0