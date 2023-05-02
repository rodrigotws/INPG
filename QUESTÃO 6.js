const prompt = require ("prompt-sync")({sigint: true})

let N = parseInt(prompt("Número de premiados: "))
let Ti = prompt("Tamanhos: ").split(" ")

let P = parseInt(prompt("Quantidade de camisas P: "))
let M = parseInt(prompt("Quantidade de camisas M: "))

function verifica_recebimento(Ti, P, M){
    let count_m = 0
    let count_p = 0
    for (i=0; i<Ti.length; i++){
        if (Ti[i] == '1'){
            count_p++
        }else{
            count_m++
        }
    }
    if (count_m <= M && count_p <= P){
        return "S"
    } else {
        return "N"
    }

}
console.log(verifica_recebimento(Ti, P, M))
