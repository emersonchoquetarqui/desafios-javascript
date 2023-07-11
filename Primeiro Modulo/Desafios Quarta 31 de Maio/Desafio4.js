// Crie um vetor de números inteiros e ordene os números em ordem CRESCENTE.

let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let crescente = numeros.sort(function(a,b) {return a-b;});
console.log(crescente);