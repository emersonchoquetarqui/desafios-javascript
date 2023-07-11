// Itere sobre todos os pares chave-valor do mapa usando o método entries() e exiba-os no console.

let desafio8 = new Map();

desafio8.set('emerson', 'itapua');
desafio8.set('stephanie', 'cidade nova');
desafio8.set('luan', 'ipitanga');
desafio8.set('sesab', 'cab');

for (let [chave, valor] of desafio8.entries()) {
  console.log(`Chave: ${chave}, Valor: ${valor}`);
}