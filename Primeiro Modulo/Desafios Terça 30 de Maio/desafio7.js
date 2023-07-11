// Escreva um programa que itere sobre um array de números
// e retorne a média dos valores.

const numeros = [20, 40, 60, 80, 100];
const mediaNumeros = calcularMedia(numeros);

function calcularMedia(numeros) {
    let soma = 0;
    for (let media = 0; media < numeros.length; media++) {
        soma += numeros[media];
    }
    const media = soma / numeros.length;
    return media;
}
console.log("a mdeia dos numeros é:" + mediaNumeros);