import {geraMaiuscula,geraMinuscula,geraNumeros,geraSimbolos} from './geradores.js'

export default  function geraSenha(qtd,Maiusculas,minusculas,numeros,simbolos){
const senhaArray =[]
qtd = Number(qtd)
for(let i = 0; i< qtd; i++){
    Maiusculas && senhaArray.push(geraMaiuscula())
    minusculas && senhaArray.push(geraMinuscula())
    numeros && senhaArray.push(geraNumeros())
    simbolos && senhaArray.push(geraSimbolos())
}

return senhaArray.join('').slice(0,qtd)// Aqui estamos usando .join para definir como um string vazia ou seja não vai ter espaços  e .slice para fatiar ela na quantidade requisitada
}