// Crie um vetor de números inteiros e ordene os números em ordem DECRESCENTE.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let decrescente = numeros.sort(function(a,b) {return b-a;});
console.log(decrescente);