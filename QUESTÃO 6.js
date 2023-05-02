const prompt = require ("prompt-sync")({sigint: true})

let N = parseInt(prompt("Número de premiados: "))//recebe numero de premiados
let Ti = prompt("Tamanhos: ").split(" ")// recebe os tamanhos com (" ") para espaçar

let P = parseInt(prompt("Quantidade de camisas P: "))//recebe a quantidade de camisas pequenas
let M = parseInt(prompt("Quantidade de camisas M: "))//recebe a quantidade de camisas medias

function verifica_recebimento(Ti, P, M){//função para verificar se a quant prod e == ou diferente a quant solicitada
    let count_m = 0//contador de cms m
    let count_p = 0//contador de cms p
    for (i=0; i<Ti.length; i++){
        if (Ti[i] == '1'){
            count_p++
        }else{
            count_m++
        }
    }
    //verifica se o número de produção corresponde aos tamanhos requisitados
    if (count_m <= M && count_p <= P){
        return "S"
    } else {
        return "N"
    }

}
console.log(verifica_recebimento(Ti, P, M))
