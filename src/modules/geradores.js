//Tabela ascii js

const rand = (min,max) => Math.floor(Math.random() * (max - min) + min);

//Função para gerar número aleatorio


const geraMaiuscula = ()=> String.fromCharCode(rand(65,91))

const geraMinuscula = ()=> String.fromCharCode(rand(97,123))

const geraNumeros = ()=> String.fromCharCode(rand(48,58))

 const simbolos = '.@!,#$-'

 const geraSimbolos = () => simbolos[rand(0,simbolos.length)]


export{geraMaiuscula,geraMinuscula,geraNumeros,geraSimbolos}



