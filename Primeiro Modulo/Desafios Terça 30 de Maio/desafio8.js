// Crie uma função que receba um número como parâmetro e retorne um array
// contendo todos os números inteiros positivos menores ou iguais ao número.

const numero = 12;
const numeros = numerosInteirosPositivosAte();

function numerosInteirosPositivosAte(){
    const resultado = [];
    for (let nmr = 1; nmr <= numero; nmr++){
        resultado.push(nmr);
    }
    return resultado;
}
console.log(numeros);