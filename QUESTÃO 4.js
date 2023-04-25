const prompt = require ("prompt-sync")()

let A = parseInt(prompt("digite um numero:"))
let B = parseInt(prompt("digite um numero:"))
let C = parseInt(prompt("digite um numero:"))

if((B-A) < (C-B)){
    console.log("1")
}
if((B-A) > (C-B)){
    console.log("-1")
}

if((B-A) == (C-B)){
    console.log("0")
}

while(0 > A || 0 > B || 0 > C || A > 500 || B > 500 || C > 500){
    console.log("um dos números inválidos")
A = parseInt(prompt("digite um numero:"))
B = parseInt(prompt("digite um numero:"))
C = parseInt(prompt("digite um numero:"))

}