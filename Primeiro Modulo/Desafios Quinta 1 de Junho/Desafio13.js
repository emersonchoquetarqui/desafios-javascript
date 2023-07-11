// Verifique se todos os valores do mapa atendem a uma determinada condição usando o método every().

let desafio13 = new Map();

desafio13.set('emerson', 22);
desafio13.set('stephanie', 19);
desafio13.set('fulano', 30);

let todosAtendemCondicao = Array.from(desafio13.values()).every(valor => valor > 18);
console.log(todosAtendemCondicao);