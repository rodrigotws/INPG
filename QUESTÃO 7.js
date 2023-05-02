const prompt = require ("prompt-sync")({sigint: true})

function emitirAviso(fcEmRepouso, fcAtual, oxigenacao){
    if (fcAtual > (3 * fcEmRepouso) || oxigenacao < 95){
        console.log("diminuir")
    }
    else if (fcAtual < (2 * fcEmRepouso) || oxigenacao > 97){
        console.log("aumentar")
    }
    else{
        console.log("manter")
    }
}
valores = prompt ("valores: ").split(" ")

emitirAviso(valores[0], valores[1], valores[2])