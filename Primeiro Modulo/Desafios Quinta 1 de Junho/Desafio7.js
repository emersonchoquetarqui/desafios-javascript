// Itere sobre todos os valores do mapa usando o método values() e exiba-os no console

let desafio7 = new Map();

desafio7.set('emerson', 'itapua');
desafio7.set('stephanie', 'cidade nova');
desafio7.set('luan', 'ipitanga');
desafio7.set('sesab', 'cab');

for (let bairros of desafio7.values()) {
  console.log(bairros);
}