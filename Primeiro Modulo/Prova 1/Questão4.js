// Funções comuns e de alta ordem Implemente uma função chamada "aplicaOperacao" que recebe três parâmetros: 
// um número inteiro, uma função de soma e uma função de subtração. 
// A função deve aplicar as duas funções ao número dado e retornar o resultado.

let numero = 10;
let resultado = aplicaOperacao(numero, soma, subtracao);
function soma(a, b) {
    return a + b;
  }
function subtracao(a, b) {
    return a - b;
  }
function aplicaOperacao(numero, funcaoSoma, funcaoSubtracao) {
    let resultadoSoma = funcaoSoma(numero, 8);
    let resultadoSubtracao = funcaoSubtracao(numero, 4);
    return {
      soma: resultadoSoma,
      subtracao: resultadoSubtracao
    };
  }
console.log(resultado.soma);
console.log(resultado.subtracao);