// exemplo 1
var elemento = document.getElementById('idDoElemento');

// exemplo 2
var elementos = document.getElementsByClassName('nomeDaClasse');

// exemplo 3
var elementos = document.getElementsByTagName('nomeDaTag');

// exemplo 4
var elementos = document.querySelectorAll('seletorCSS');

// exemplo 5
var elementos = document.getElementsByName('nomeDoAtributo');

// exemplo 6
var elemento = document.querySelector('seletorCSS');

// exemplo 7
var elementosFilhos = elementoPai.childNodes;

// exemplo 8
var elementoPai = elementoFilho.parentNode;

// exemplo 9 Acesso aos elementos descendentes de um elemento pai:
var elementosDescendentes = elementoPai.querySelectorAll('.classeDescendente');

// exemplo 10 Acesso ao primeiro elemento filho de um elemento pai:
var primeiroFilho = elementoPai.firstElementChild;

// exemplo 11 Acesso ao último elemento filho de um elemento pai:
var ultimoFilho = elementoPai.lastElementChild;

// exemplo 12 Acesso ao próximo elemento irmão de um elemento:
var proximoIrmao = elemento.nextSibling;

// exemplo 13 Acesso ao elemento irmão anterior de um elemento:
var irmaoAnterior = elemento.previousSibling;

// exemplo 14 Acesso aos elementos irmãos de um elemento (excluindo o próprio elemento):
var irmaos = Array.from(elemento.parentNode.children).filter(function(child) {
    return child !== elemento;
  });
  
// exemplo 15 Acesso ao elemento pai mais próximo que corresponda a um seletor CSS:
var elementoPaiMaisProximo = elemento.closest('seletorCSS');

// exemplo 16 Acesso a todos os elementos com determinado atributo:
var elementosComAtributo = document.querySelectorAll('[nomeDoAtributo]');
