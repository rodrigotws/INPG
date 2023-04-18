const prompt = require ("prompt-sync")()

function contarDigitos(){
    textoAno = "" + ano
    return textoAno.length
  }
  
  function ehBissexto(ano){
  return( (ano % 4 == 0 && ano % 100 != 0)|| ano % 400 == 0)
  }
  
  function mensagem(ano) {
    let anoAtual = 2023;
    if (contarDigitos(ano) != 4){
      console.log('Ano invalido.');
    }else{
      if (!ehBissexto(ano)){
        console.log(`O ano${ano} NÃO é bissexto`);
      }else{ 
      if (ano < anoAtual) console.log(`O ano ${ano} foi bissexto`);
      else console.log(`O ano ${ano} será bissexto`);
      }
  }
  }
  
  let ano = Number (prompt ("Ano:"))
  mensagem(ano);