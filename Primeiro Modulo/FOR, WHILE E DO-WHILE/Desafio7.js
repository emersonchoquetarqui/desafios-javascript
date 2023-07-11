// Desafio do "for" com controle de iteração: 
// Crie um loop "for" que itere sobre os números de 1 a 20. No entanto, 
// o loop deve parar de executar quando encontrar um número divisível por 7.

for (let desafio = 1; desafio <= 20; desafio++) {
    if (desafio % 7 === 0) {
      break; // Para a execução do loop quando encontra um número divisível por 7
    }
    console.log(desafio); // Exibe o número atual
  }