const prompt = require ("prompt-sync")()
function primeiraLetra(nome){
    return nome[0]
}

function montarSigla(nome){
    let palavras = nome.toLowerCase().split("")
    let sigla = ""
    for (let i=0; i<palavras.length;i++)
    sigla += primeiraLetra(palavras[i])
return sigla +"@aluno.ifal.edu.br"
}
function email(nome){
    palavras = nome.toLowerCase().split(" ")
    console.log(palavras)
    let sigla = montarSiglaEmail(palavras)
    console.log(sigla)
}
siglas = []
usuarioSigla={}
let alunos = ["Rodrigo Jacinto Lopes", "Rodolfo Aquino Silva", "Rafael da Silva Ferreira"]
for (i = 0; i < alunos.length; i++){
    s = montarSigla(nome);
    if (usuarioSigla[s]==undefined) usuarioSigla[s] = 0;
    usuarioSigla[s]+=1;
};
console.log(usuarioSigla)