// Escreva um programa que itere sobre um array de objetos que contém informações 
// sobre produtos (como nome, preço, etc.). Para cada produto, 
// imprima no console uma mensagem informando se o
// produto está em promoção (preço menor que R$50) ou não.

const produtos = [
    { nome: 'SHAMPPO', preco: 30 },
    { nome: 'CAMISETA', preco: 60 },
    { nome: 'BARBEADOR', preco: 20 },
    { nome: 'CERVEJA', preco: 70 }
  ];
  for (let teste = 0; teste < produtos.length; teste++) {
    const produto = produtos[teste];
    if (produto.preco < 50) {
      console.log(`${produto.nome} está em promoção!`);
    } else {
      console.log(`${produto.nome} não está em promoção.`);
    }
  }