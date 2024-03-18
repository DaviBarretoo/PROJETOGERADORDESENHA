import geraSenha from "./gerasenha.js";
import func1 from  "./formGeraSenha.js"
import {qtdCaracteres,chkMaiusculas,chkMinusculas,chkNumeros,chkSimbolos} from "./formGeraSenha.js"

export default  function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
        )
        return senha || "Nada Selecionado"
}

func1()