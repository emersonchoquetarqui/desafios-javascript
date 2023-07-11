// Itere sobre todas as chaves do mapa usando o método keys() e exiba-as no console.

let desafio6 = new Map();

desafio6.set('emerson', 'itapua');
desafio6.set('stephanie', 'cidade nova');
desafio6.set('luan', 'ipitanga');
desafio6.set('sesab', 'cab');

for (let nomes of desafio6.keys()) {
  console.log(nomes);
}

