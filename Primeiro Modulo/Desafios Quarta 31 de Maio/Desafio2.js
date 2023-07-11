// Crie um vetor de números inteiros e exiba o MENOR número do vetor.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let menor = numeros[0];

for (let numero = 1; numero < numeros.length; numero++) {
  if (numeros[numero] < menor) {
    menor = numeros[numero];
  }
}
console.log(`o menor numero do vetor é: ${menor}`);