// Extensão de Array Crie uma extensão para a classe Array que adiciona um método chamado shuffle, 
// que embaralha os elementos do array. 
// O método deve ser adicionado ao prototype do Array.

let palavras = ['maçã', 'banana', 'laranja', 'morango', 'uva'];
Array.prototype.shuffle = function() {
  for (let array1 = this.length - 1; array1 > 0; array1--) {
    const teste = Math.floor(Math.random() * (array1 + 1));
    [this[array1], this[teste]] = [this[teste], this[array1]];
  }
};
palavras.shuffle()
console.log(palavras);

// A função shuffle é definida e adicionada ao protótipo do objeto Array, o que significa que
// todas as instâncias de arrays terão essa função disponível.
// Dentro da função shuffle, há um loop que percorre o array começando do último elemento e indo até o primeiro.
// Dentro do loop, é gerado um número aleatório, chamado teste, usando Math.random() e Math.floor(). 
// Esse número aleatório será usado para trocar o elemento atual com outro elemento aleatório do array.
// A troca é feita usando uma técnica chamada "destructuring assignment". 
// Através dessa técnica, os elementos array1 e teste são trocados de posição no array this, 
// que é o array que está sendo embaralhado.
// Após o loop terminar, o array palavras está embaralhado, e o resultado é exibido no console usando console.log().