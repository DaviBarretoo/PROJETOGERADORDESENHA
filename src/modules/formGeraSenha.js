import gerasenha from "./gerasenha.js";
import gera from "./dados.js"


const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gera-senha-principal');


export default() => {
    gerarSenha.addEventListener('click',()=>{
        senhaGerada.innerHTML = gera()
    })
}


export{senhaGerada,qtdCaracteres,chkMaiusculas,chkMinusculas,chkNumeros,chkSimbolos}

gerasenha()