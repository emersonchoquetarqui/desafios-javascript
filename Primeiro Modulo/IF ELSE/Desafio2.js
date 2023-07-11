// Desafio dos números pares: Crie um programa que solicite ao usuário 
// um número e verifique se ele é par. Em seguida, 
// exiba uma mensagem indicando se o número é par ou não.

var numero = 7;
verificaPar(numero);

function verificaPar(numero) {
    if (numero % 2 === 0) {
      console.log("O número é par.");
    } else {
      console.log("O número não é par.");
    }
  }