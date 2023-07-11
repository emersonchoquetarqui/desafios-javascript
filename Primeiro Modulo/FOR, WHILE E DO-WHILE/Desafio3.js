// Desafio do "do while" com validação: Crie um loop "do while" 
// que solicite ao usuário um número entre 1 e 10. O loop deve continuar 
// a pedir um número até que a entrada esteja dentro do intervalo especificado.

let numero;

do {
  numero = parseInt(prompt("Digite um número entre 1 e 10:"));
} while (numero < 1 || numero > 10);

console.log("O número digitado está dentro do intervalo especificado.");