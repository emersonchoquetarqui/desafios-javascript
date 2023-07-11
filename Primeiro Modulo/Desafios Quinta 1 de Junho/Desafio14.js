// Verifique se pelo menos um valor do mapa atende a uma determinada condição usando o método some().

let desafio14 = new Map();

desafio14.set('emerson', 10);
desafio14.set('sandro', 20);
desafio14.set('sesab', 30);

let condicao = (valor) => valor > 31;
let peloMenosUmAtendeCondicao = Array.from(desafio14.values()).some(condicao);
console.log(peloMenosUmAtendeCondicao);

