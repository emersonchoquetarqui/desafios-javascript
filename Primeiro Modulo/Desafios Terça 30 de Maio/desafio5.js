// Escreva um programa que itere sobre um array de objetos 
// que contém informações sobre pessoas (como nome, idade, etc.). 
// Para cada pessoa, imprima no console uma mensagem com seu nome e idade, 
// seguida de uma mensagem informando se a pessoa é maior ou menor de idade.

const pessoas = [
    {nome: "emerson", idade: 21},
    {nome: "fulanO", idade: 17},
    {nome: "sandro", idade: 22},
    {nome: "fulanA", idade: 16},
];
pessoas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    if (pessoa.idade >= 18){
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
});