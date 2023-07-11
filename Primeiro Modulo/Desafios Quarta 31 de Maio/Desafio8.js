// Crie um vetor de strings e exiba apenas as strings que possuem mais de 5 CARACTERES.

let numeros = ['um', 'dois', 'tres', 'quatro', 'cinco'];
let MaisDeCincoCaracteres = numeros.filter(numero => numero.length > 5);
console.log(MaisDeCincoCaracteres);