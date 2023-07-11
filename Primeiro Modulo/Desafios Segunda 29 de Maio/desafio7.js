// Transformar um array de objetos em um único objeto.

const arrayDeObjetos = [
    {chave1: 'valor1'},
    {chave2: 'valor2'},
    {chave3: 'valor3'},
];

const unicoObjeto = arrayDeObjetos.reduce((chave, valor) => {return {...chave, ...valor};},{});
console.log(unicoObjeto);

// usei os 3 pontos "..." como usei no codigo anterior em que peguei de exemplo para colocar no return
// sem os 3 pontos"..." ele não iria retornar em um unico objeto, retornaria de forma contraria
// os 3 pontos servem para permitir que mostre o conteudo de arrays quando se espera multiplos elementos

// const originalArray = [1, 2, 3]; 

// const copiedArray = [...originalArray]
// console.log(copiedArray)