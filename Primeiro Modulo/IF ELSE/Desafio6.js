// Desafio do dia da semana: Peça ao usuário um número correspondente
//  a um dia da semana (1 a 7) e exiba o nome do dia correspondente. 
// Certifique-se de lidar com entradas inválidas também.

let diaDaSemana = 7;

if (diaDaSemana >= 1 && diaDaSemana <= 7) {
  let nomeDoDia;
  if (diaDaSemana === 1) {
    nomeDoDia = "Domingo";
  } else if (diaDaSemana === 2) {
    nomeDoDia = "Segunda-feira";
  } else if (diaDaSemana === 3) {
    nomeDoDia = "Terça-feira";
  } else if (diaDaSemana === 4) {
    nomeDoDia = "Quarta-feira";
  } else if (diaDaSemana === 5) {
    nomeDoDia = "Quinta-feira";
  } else if (diaDaSemana === 6) {
    nomeDoDia = "Sexta-feira";
  } else if (diaDaSemana === 7) {
    nomeDoDia = "Sabado";
  }

  console.log(`O dia correspondente ao número ${diaDaSemana} é ${nomeDoDia}`);
} else {
  console.log("Número inválido. Informe um número de 1 a 7.");
}