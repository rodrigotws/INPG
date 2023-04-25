const prompt = require ("prompt-sync")()

let x = Number(prompt("Quota"))
let n = Number(prompt("Quantidade de meses"))
let meses = []
let consumo = 0
let quotaTotal = 0
for (let i = 0; i < n; i++){
    meses.push(Number(prompt("mes")))
    consumo += meses[i]
    quotaTotal += x
}
console.log(quotaTotal - consumo + 10)