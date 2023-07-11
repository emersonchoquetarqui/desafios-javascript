// Crie um vetor de números inteiros e exiba o MAIOR número do vetor.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maior = numeros[0];

for (let numero = 1; numero < numeros.length; numero++) {
  if (numeros[numero] > maior) {
    maior = numeros[numero];
  }
}
console.log(`o maior numero do vetor é: ${maior}`);