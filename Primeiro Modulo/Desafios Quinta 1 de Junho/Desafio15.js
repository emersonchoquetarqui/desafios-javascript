// Converta as chaves do mapa em um array usando o método Array.from().

let desafio15 = new Map();

desafio15.set('emerson', 'itapua');
desafio15.set('stephanie', 'cidade nova');
desafio15.set('luan', 'ipitanga');
desafio15.set('sesab', 'cab');

let chavesArray = Array.from(desafio15.keys());
console.log(chavesArray);