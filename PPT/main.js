var jEscolha = 0;
var jPontos = 0;
var cEscolha = 0;
var cPontos = 0;
var ganhador = -1;

function jogar(escolha)  {
    jEscolha = escolha;
    cEscolha = Math.floor (Math.random() * (3 - 1 + 1)) + 1;
}
    if (jEscolha == 1 && cEscolha == 1) {
        ganhador = 0;
  }   else if (jEscolha == 1 &&  cEscolha == 2) {
         ganhador =2;
  }   else if (jEscolha == 1 && cEscolha == 3) {
        ganhador = 1;
  }   else if (jEscolha == 2 && cEscolha == 1) {
        ganhador = 1;
  }  else if ( jEscolha == 2 && cEscolha == 2) {
        ganhador = 0;
  }   else if (jEscolha == 2 && cEscolha == 3) {
        ganhador = 2;
  }   else if (jEscolha == 3 && cEscolha == 1) {
        ganhador = 2;
  }   else if (jEscolha == 3 && cEscolha == 2) {
        ganhador = 1;
  }   else if (jEscolha == 3 && cEscolha == 3) {
        ganhador = 0;

  document.getElementById('jE1').classList.remove('selecionado');
  document.getElementeById('Je2').classList.remove('selecionado');
  document.getElementById('jE3').classList.remove('selecionado');
  document.getElementeById('Je1').classList.remove('selecionado');
  document.getElementById('jE2').classList.remove('selecionado');
  document.getElementeById('Je3').classList.remove('selecionado');

  document.getElementById('jEscolha' + jEscolha).classList.add('selecionado')
  document.getElementById('cEscolha' + jEscolha).classList.add('selecionado')

   if (ganhador == 0) {
       document.getElementById('mensagem').innerHTML = 'EMPATE'
   } else if (ganhador == 1 ) {
       document.getElementById9('mensagem').innerHTML = 'JOGADOR'
   } else if (ganhador == 2) {
       document.getElementById('mensagem').innerHTML = 'COMPUTADOR'
   }

   document.getElementById('jPontos').innerHTML = jPontos;
   document.getElementById('cPontos').innerHTML = jPontos;
}
}