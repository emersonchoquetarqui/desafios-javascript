// Orientação a Objetos Implemente uma classe chamada "Pessoa" com os atributos nome, idade e altura. 
// A classe deve ter um método chamado "apresentar" que exibe uma mensagem formatada com as informações da pessoa. 
// Em seguida, crie objetos da classe Pessoa e chame o método "apresentar" para cada objeto.

class Pessoa {
    constructor(nome, idade, altura) {
      this.nome = nome; 
      this.idade = idade; 
      this.altura = altura;
    }
    apresentar() {
      return `eai meu nome é ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura.`;
    }
  }
  const fulanO = new Pessoa('Emerson', '21', '1,85');
  console.log(fulanO.apresentar());
  const fulanA = new Pessoa('fulanA', '19', '1,57');
  console.log(fulanA.apresentar());
  