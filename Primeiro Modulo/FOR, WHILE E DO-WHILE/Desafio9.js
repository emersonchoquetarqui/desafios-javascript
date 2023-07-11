// Desafio do "do while" com interrupção condicional: 
// Crie um loop "do while" que solicite ao usuário um número. 
// O loop deve continuar até que o usuário insira um número negativo.

let numero;

do {
  numero = parseInt(prompt("Digite um número:"));
} while (numero >= 0);

console.log("Você digitou um número negativo. O loop foi interrompido.");