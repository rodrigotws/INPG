/** crie uma função zeroOuUM(a,b,c) que aplica o jogo Zerinhou ou Um. Os jogadores Alice, Beto e Carla (a, b, c) colocam zero ou um. E a função responde quem ganhou com 'A', 'B', ou 'C'*/
function obterEscolha() {
  let escolha = parseInt(prompt("Digite 0 para Zerinho ou 1 para Um: "));
  while (escolha !== 0 && escolha !== 1) {
    escolha = parseInt(prompt("Opção inválida. Digite 0 para Zerinho ou 1 para Um: "));
  }
  return escolha;
}

// Função para determinar o vencedor
function determinarVencedor(jogador1, jogador2, jogador3) {
  if (jogador1 === jogador2 && jogador2 === jogador3) {
    return "Empate!";
  } else if ((jogador1 === 0 && jogador2 === 1 && jogador3 === 1) || (jogador1 === 1 && jogador2 === 0 && jogador3 === 0)) {
    return "Jogador 1 venceu!";
  } else if ((jogador1 === 1 && jogador2 === 0 && jogador3 === 1) || (jogador1 === 0 && jogador2 === 1 && jogador3 === 0)){
    return "Jogador 2 venceu!";
  } else if ((jogador1 === 1 && jogador2 === 1 && jogador3 === 0) || (jogador1 === 0 && jogador2 === 0 && jogador3 === 1)){
    return "Jogador 3 venceu!";
  }
}

// Função principal do jogo
function jogarZerinhoOuUm() {
  console.log("== Bem-vindo ao Zerinho ou Um! ==");

  const jogador1 = obterEscolha();
  console.log("Jogador 1 escolheu: " + jogador1);

  const jogador2 = obterEscolha();
  console.log("Jogador 2 escolheu: " + jogador2);

  const jogador3 = obterEscolha();
  console.log("jogador 3 escolheu: " + jogador3);
  const resultado = determinarVencedor(jogador1, jogador2, jogador3);
  console.log(resultado);
}

// Iniciar o jogo
jogarZerinhoOuUm();