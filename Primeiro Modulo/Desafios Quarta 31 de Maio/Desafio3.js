// Crie um vetor de números inteiros e exiba a MÉDIA aritmética dos números do vetor.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for (let inteiro = 0; inteiro < numeros.length; inteiro++) {
    soma += numeros[inteiro];
}
let media = soma / numeros.length;
console.log(`a media é aritimetica: ${media}`);