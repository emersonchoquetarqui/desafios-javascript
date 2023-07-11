// exemplo 1
    class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    acelerar() {
      console.log(`O ${this.modelo} está acelerando...`);
    }
  
    frear() {
      console.log(`O ${this.modelo} está freando...`);
    }
  }
  
  // Uso da classe Carro
  const meuCarro = new Carro('Ford', 'Mustang', 2022);
  meuCarro.acelerar(); // Saída: O Mustang está acelerando...
  meuCarro.frear(); // Saída: O Mustang está freando...

  

// exemplo 2
  class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Uso da classe Pessoa
const pessoa1 = new Pessoa('João', 30);
pessoa1.saudacao(); // Saída: Olá, meu nome é João e tenho 30 anos.
