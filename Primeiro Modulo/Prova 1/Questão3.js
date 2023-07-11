// Vetores Implemente uma função chamada "mediaVetor" que recebe um vetor de
// números inteiros como parâmetro e retorna a média dos valores contidos no vetor.

const meuVetor = [1, 2, 3, 4, 5];
function mediaVetor(vetor) {
    let soma = 0;

    for (let questao3 = 0; questao3 < vetor.length; questao3++)
    {
        soma += vetor[questao3];
    }
    const media = soma / vetor.length;
    return media;
}
console.log(mediaVetor(meuVetor));