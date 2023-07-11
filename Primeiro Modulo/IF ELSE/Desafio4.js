// Desafio do maior número: Solicite ao usuário três números 
// e determine qual deles é o maior. 
// Exiba uma mensagem indicando o número mais alto.

let numero1 = 24;
let numero2 = 24;
let numero3 = 24;

if (numero1 > numero2 && numero1 > numero3) {

  console.log("O primeiro número é o maior: " + numero1);

} else if (numero2 > numero1 && numero2 > numero3) {

  console.log("O segundo número é o maior: " + numero2);

} else if (numero3 > numero1 && numero3 > numero2) {

  console.log("O terceiro número é o maior: " + numero3);

} else {

  console.log("Os números são iguais ou inválidos.");
  
}