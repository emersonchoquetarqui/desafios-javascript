const numbers = [1, 2, 3, 4, 5];
const multiplied = numbers.map(num => num * 2);

console.log(multiplied); [2, 4, 6, 8, 10]

const nomes = ['sandro', 'sesab', 'choquetarqui'];
const letras = nomes.map(word => word.length);

console.log(letras);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const paresNumeros = numeros.filter(num => num % 2 === 0).map(num => num * 2);

console.log(paresNumeros);


