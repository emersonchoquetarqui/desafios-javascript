// Escreva um programa que itere de 0 a 100. 
// Para cada número, se o número for divisível por 3, 
// imprima "Fizz"; se for divisível por 5, imprima "Buzz"; 
// se for divisível por 3 e 5, imprima "FizzBuzz"; 
// caso contrário, imprima o próprio número.

for (let desafio = 0; desafio <= 100; desafio++) {
    if (desafio % 3 === 0 && desafio % 5 === 0) {
      console.log("FizzBuzz");
    } else if (desafio % 3 === 0) {
      console.log("Fizz");
    } else if (desafio % 5 === 0) {
      console.log("Buzz"); 
    } else {
      console.log(desafio);
    }
  }