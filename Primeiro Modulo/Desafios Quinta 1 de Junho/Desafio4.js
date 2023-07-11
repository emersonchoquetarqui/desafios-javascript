// Verifique se uma determinada chave existe no mapa usando o método has().

let desafio4 = new Map();

desafio4.set('emerson', 'itapua');
desafio4.set('stephanie', 'cidade nova');
desafio4.set('luan', 'ipitanga');

if(desafio4.has('emerson')){
    console.log("existe nas chaves");
} else {
    console.log("não existe nas chaves");
};

if(desafio4.has('sandro')){
    console.log("existe nas chaves");
} else {
    console.log("não existe nas chaves");
}