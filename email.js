function primeiraLetra(nome){
return nome[0]
}
function montarSiglaEmail(palavras){
let sigla = ""
for (let i=0;i<palavras.length;i++)
sigla+= primeiraLetra(palavras[i])
    return sigla+"@aluno.ifal.edu.br"
}
function email(nome){
palavras = nome.toLowerCase().split(" ")
console.log(palavras)
let sigla = montarSiglaEmail(palavras)
console.log(sigla)
}
sigla = []
email("Rodrigo Jacinto Lopes")