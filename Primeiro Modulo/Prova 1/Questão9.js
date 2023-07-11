// Tratamento de Exceções Escreva um programa que solicite ao usuário dois números inteiros 
// e realize a divisão do primeiro número pelo segundo. 
// Certifique-se de tratar as possíveis exceções que podem ocorrer durante a divisão, como divisão por zero ou entrada inválida.

realizarDivisao();
function realizarDivisao() {
    let numero1 = 8;
    let numero2 = 2;
    if (numero2 === 0) {
      console.log("divisão por zero nao é permitida");
      return;
    }
    let resultado = numero1 / numero2;
    console.log(`o resultado da divisão é: ${resultado}`);
  }
