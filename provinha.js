/** Crie uma funçao pH(valor) que classifique o pH da água de acordo com o valor
A escala de pH varia de 0 a 14. Um pH de 7 é neutro. um pH inferior a 7 é ácido e acima de 7 é basico*/


function pH(valor){//função pH com parametro valor
  if (valor < 0 || valor > 14){
    return "O valor do pH deve estar entre 0 e 14.";
  }else if(valor < 7){
    return "A água é ácida."
  }else if(valor === 7){
    return "A água é neutra."
  }else{
    return "A água é alcalina"
  }
  }

  let valor_do_ph = 8
  let resultado = pH(valor_do_ph)
  console.log (resultado)
function media(notas){//criada a função
  soma = 0
  for (let i=0; i < notas.length; i++) {//criando um loop que percorre o array (as notas)
    soma = soma + notas[i]
  }
  let media = soma / notas.length
  return media 
}
  
// usando a função media
console.log( media([10,20,30]) )
var lista = [10, 20, 30, 40, 50];
var contador = 0;
for (var i = 0; i < lista.length; i++) {
  contador++;
}
console.log("Número de elementos: " + contador);
