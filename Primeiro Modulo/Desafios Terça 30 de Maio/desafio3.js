// Crie uma função que receba um array de números como 
// parâmetro e retorne a soma de todos eles.

const numeros = [10, 20, 30, 40, 50, 60];

function somarNumeros(somando){
    let soma = 0;
    for (let nmr = 0; nmr < somando.length; nmr++)
    {soma += somando[nmr];}
    return soma; 
}
console.log(somarNumeros(numeros));