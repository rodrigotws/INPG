const prompt = require ("prompt-sync")()

let x = parseInt(prompt("Quota: "))
let n = parseInt(prompt("Quantidade de meses: "))
let mega_usado
let saldo = x
let mes = 1

while (mes <= n){
  mega_usado = parseInt(prompt("Quantidade de mb usados: "))
  saldo = x + (saldo - mega_usado)
  console.log(`saldo: ${saldo}`)
  mes++
}
