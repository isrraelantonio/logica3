let listaDeNumerosSorteados = [];
let numeroLimite = 10

function exibirTextoNaTela(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;

   //Abaixo haverão duas formas de adicionar voz para leitura do texto do código


    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); 
    
    



    /*if ('speechSynthesis' in window) {
      let utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'pt-BR'; 
      utterance.rate = 1.2; 
      window.speechSynthesis.speak(utterance); 
  } else {
      console.log("Web Speech API não suportada neste navegador.");
  }*/

}


function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto.' );
  exibirTextoNaTela('p', 'escolha um número entre um e dez' );
}



exibirTextoNaTela('h1', 'Jogo do número secreto.' );
exibirTextoNaTela('p', 'escolha um número entre um e dez' );

let numero  = gerarNumerosAleatorio(); // Procure não nomear a variável da mesma forma da função podem haver bugs no código
let tentativa = 1;

function gerarNumerosAleatorio() {

 let numeroEscolhido = parseInt( Math.random() * numeroLimite + 1); // nesse caso a nossa função só ns devolve informações se adicionarmos um retorno
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
 if (quantidadeDeElementosNaLista == numeroLimite){
  listaDeNumerosSorteados = [];
 }
 if (listaDeNumerosSorteados.includes(numeroEscolhido)){
     return gerarNumerosAleatorio();
 } else{
     listaDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;

 }

}



function verificarChute() {

  let chute = document.querySelector("input").value;

  if (chute == numero){
    exibirTextoNaTela('h1',' Parabéns!! você acertou.' );

    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

    let mensagemTentativas = `Voocê descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas );

    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{

    if (chute <  numero){
      exibirTextoNaTela('p','o número secreto é maior do que o número digitado' );
    }else{
      exibirTextoNaTela('p','o número secreto é menor do que o número digitado' );

    }
    tentativa++

    limparCampo()

  }
}

function limparCampo(){

  chute = document.querySelector('input');
  chute.value = '';
}

 function reiniciarJogo(){

  numero = gerarNumerosAleatorio();
  limparCampo();
  tentativa = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);

 }