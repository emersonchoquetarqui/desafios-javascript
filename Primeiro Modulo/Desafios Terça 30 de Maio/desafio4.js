// Crie uma função que receba um array de números como parâmetro e 
// retorne um novo array contendo apenas os números pares.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = obterNumerosPares(numeros);

function obterNumerosPares(nmr) {
  var numerosPares = [];
  for (var par = 0; par < nmr.length; par++) {
    if (nmr[par] % 2 === 0) {
      numerosPares.push(nmr[par]);
    }
  }
  return numerosPares;
}
console.log(numerosPares);

// const teste = 11111111111
// teste = 213123
// console.log(teste);