const prompt = require ("prompt-sync")({sigint: true})

    let N = parseInt(prompt("Número de premiados: "))
    let Ti = prompt("Tamanhos: ").split(" ")
    
    let P = parseInt(prompt("Quantidade de camisas P: "))
    let M = parseInt(prompt("Quantidade de camisas M: "))

while(N <= 1000 && N >= 1 && P <= 1000 && P >= 0 && M <= 1000 && M >= 0 && N <=(P+M) && Ti.length != N ){
    let N = parseInt(prompt("Número de premiados: "))
    let Ti = prompt("Tamanhos: ").split(" ")
    
    let P = parseInt(prompt("Quantidade de camisas P: "))
    let M = parseInt(prompt("Quantidade de camisas M: "))
}

function verifica_recebimento(){
p = []

}
