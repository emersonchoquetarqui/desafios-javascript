// Remova um par chave-valor específico do mapa usando o método delete().

let desafio9 = new Map();

desafio9.set('emerson', 'itapua');
desafio9.set('stephanie', 'cidade nova');
desafio9.set('luan', 'ipitanga');
desafio9.set('sesab', 'cab');

console.log('mapa antes da remoção:', desafio9);

desafio9.delete('sesab');

console.log('mapa depois da remoção:', desafio9);