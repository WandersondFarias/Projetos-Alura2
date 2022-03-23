var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 2;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  var resultado = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Boaaaaaaa, acertou!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Coloque um número entre 0 e 10";
  } else if (chute > numeroSecreto && tentativa >= 1) {
    tentativa--;
    resultado.innerHTML = `Ainda está errado! Chute um número mais baixo! <br> Resta  ${tentativa} tentativa`;
  } else if (chute < numeroSecreto && tentativa >= 1) {
    tentativa--;
    resultado.innerHTML = `Ainda está errado! Chute um número maior! <br>  Resta  ${tentativa} tentativa`;
  } else if (tentativa == 0) {
    resultado.innerHTML = `Você errou todas as vezes! <br> O número secreto era ${numeroSecreto}. <br> Tente novamente!`;
  }
}

/*
APRENDIZADOS

= atribui valor para a variável
== significa igual (comparação de valor)

condicionais: if, else if, else

Sobre escopo
Como o númeroSecreto está fora da função, no carregamento da página ele é determinado e enquanto não dá refresh ele permanece o mesmo.
Se ele estivesse dentro da função, cada vez que o botão chute for pressionado, ele mudaria.

CSS: Adicionando 80 ao final da cor confere transparência a ela

Math.random() * 11 para aprsentar números aleatórios entre 0 e 10, colocando dentro do parseInt(Math.random() * 11), tira os decimais
*/
