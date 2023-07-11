// Map e Reduce Implemente uma função chamada "dobroSoma" que recebe um vetor de números inteiros como parâmetro. 
// A função deve dobrar cada valor do vetor e, em seguida, retornar a soma de todos os valores resultantes.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = dobroSoma(numeros);
function dobroSoma(vetor) {
    const dobrado = vetor.map(numero => numero * 2);
    const soma = dobrado.reduce((acumulador, numero) => acumulador + numero);
    return soma;
}
console.log(resultado);