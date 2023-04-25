const prompt = require ("prompt-sync")()

let idades = [];
for(let i = 3; i>0; i--){
    idades.push(prompt("Idade:"))
}

let maior = -900;
let menor = 900;
let bianca = 0;

for(let i =0; i<idades.length; i++){
    if(idades[i] > maior){
        maior=idades[i]
    }
}

for (let n = 0; n<idades.length; n++){
    if (idades[n]<menor){
        menor = idades[n]
    }
}
for (let j = 0; j<idades.length; j++){
    if((idades[j] != maior) && (idades[j] != menor)){
        bianca=idades[j]
    }
}

console.log(`A idade da Bianca é: ${bianca}`)