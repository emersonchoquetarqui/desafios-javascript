// Contagem de Palavras Crie uma função chamada contarPalavras que conta o número de palavras em uma string.
//A função deve ser adicionada ao prototype da classe String.

String.prototype.contarPalavras = function() {
    const texto = this.trim();
    if (texto === '') {
      return 0;
    }
    const palavras = texto.split(/\s+/);
    return palavras.length;
  };
  
  const frase = 'mais um desafio depois de são joão';
  console.log(frase.contarPalavras());

// A função começa removendo os espaços em branco extras no início e no final da string usando o método trim().
// Em seguida, ela verifica se a string está vazia. Se estiver vazia, significa que não há palavras, então a função retorna 0.
// Se a string não estiver vazia, ela é dividida em palavras usando o método split() com uma expressão regular /\s+/. 
// Essa expressão regular divide a string em palavras com base em um ou mais espaços em branco.
// Finalmente, a função retorna o comprimento desse array, que representa o número de palavras encontradas na string.