// As quatro estações do ano variam de acordo com as datas:

// Primavera: 21 setembro até 20 dezembro
// Verão: 21 dezembro até 20 março
// Outono: 21 março até 20 junho
// Inverno: 21 junho até 20 setembro

// Escreva uma função chamada EstacaoAno que receba como entrada um dia e um mês e retorne o nome da estação correspondente.

// Formato de entrada

// Dois valores inteiros, representando o dia e o mês nessa sequência

// Formato de saída

// Um String em letras maiúsculas

// Obs: Não use acento em VERAO

// Exemplos de:

// Entrada
// 1
// 8

// Saída
// INVERNO
const prompt = require("prompt-sync")()

//assumindo que o mês tem 30 dias
function estacaoAno(dia, mes){
    if (mes == 9 && dia >= 21 && dia <= 30 || mes == 10 && dia >=1 && dia <= 30 || mes == 11 && dia >=1 && dia <= 30 || mes == 12 && dia <= 20 && dia <= 30){//mes <= 12 && dia <= 21 && dia >= 20){
        console.log("PRIMAVERA")
    }
    else if (mes == 12 && dia >= 21 && dia <= 30 || mes == 1 && dia >=1 && dia <= 30 || mes == 2 && dia >=1 && dia <= 30 || mes == 3 && dia <= 20 && dia <= 30){
        console.log("VERAO")
    }
    else if (mes == 3 && dia >= 21 && dia <= 30 || mes == 4 && dia >=1 && dia <= 30 || mes == 5 && dia >=1 && dia <= 30 || mes == 6 && dia <= 20 && dia <= 30){
        console.log("OUTONO")
    }
    else if (mes == 6 && dia >= 21 && dia <= 30 || mes == 7 && dia >=1 && dia <= 30 || mes == 8 && dia >=1 && dia <= 30 || mes == 9 && dia <= 20 && dia <= 30){
        console.log("INVERNO")
    }else{
        console.log("DATA INVALIDA")
    }
}

const [dia, mes] = prompt ("Qual o dia e mês? (dd/mm) ").split('/'); 
estacaoAno (dia, mes)