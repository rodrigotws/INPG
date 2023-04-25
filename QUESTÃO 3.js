const prompt = require ("prompt-sync")()

let A = parseInt(prompt("Quantas moedas há na arca?"))
let N = parseInt(prompt("Quantidade de marinheiros:(*capitão não incluso*"))
let M = A/(N+2)
console.log(M*2)