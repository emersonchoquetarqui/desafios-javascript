// Crie uma classe chamada "Livro" que recebe o título e o autor como parâmetros no construtor. 
// A classe deve ter um método chamado "detalhes" que retorna uma string com os detalhes do livro.

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  detalhes() {
    return `Livro: ${this.titulo}, Autor: ${this.autor}`;
  }
}
const livro1 = new Livro('Matematica', 'alguem');
console.log(livro1.detalhes());

const livro2 = new Livro('Fisica', 'alguem');
console.log(livro2.detalhes());