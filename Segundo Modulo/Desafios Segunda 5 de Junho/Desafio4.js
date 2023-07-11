// Crie uma classe chamada "Pessoa" que recebe o nome, a idade
// e o gênero como  parâmetros no construtor. A classe deve
// ter um método chamado "apresentar" que retorna uma string com a apresentação da pessoa.

class Pessoa {
  constructor(nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
  }
  apresentar() {
    return `eai, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do genero ${this.genero}.`;
  }
}
const pessoa1 = new Pessoa('Emerson', '21', 'masculino');
console.log(pessoa1.apresentar());

const pessoa2 = new Pessoa('Stephanie', '19', 'feminino');
console.log(pessoa2.apresentar());