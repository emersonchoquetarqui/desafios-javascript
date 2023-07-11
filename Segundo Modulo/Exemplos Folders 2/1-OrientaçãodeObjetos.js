// exemplo 1
// Definindo uma função construtora
function Pessoa(nome, idade) {
this.nome = nome;
this.idade = idade;
}

// Adicionando um método ao protótipo da função construtora
Pessoa.prototype.apresentar = function() {
console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
};

// Criando uma instância do objeto Pessoa
var pessoa1 = new Pessoa("João", 25);
var pessoa2 = new Pessoa("Maria", 30);

// Chamando o método apresentar para cada instância
pessoa1.apresentar();
pessoa2.apresentar();


// exemplo 2
// Definindo uma classe
class Animal {
constructor(nome) {
    this.nome = nome;
}

falar() {
    console.log(this.nome + " emite um som.");
}
}

// Herança de classe
class Cachorro extends Animal {
falar() {
    console.log(this.nome + " late.");
}
}

// Criando instâncias das classes
var animal = new Animal("Animal");
var cachorro = new Cachorro("Bob");

// Chamando os métodos das instâncias
animal.falar(); // Saída: Animal emite um som.
cachorro.falar(); // Saída: Bob late.


// exemplo 3
// Definindo uma factory function
function criarPessoa(nome, idade) {
var pessoa = {};
pessoa.nome = nome;
pessoa.idade = idade;

pessoa.apresentar = function() {
    console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
};

return pessoa;
}

// Criando objetos utilizando a factory function
var pessoa1 = criarPessoa("João", 25);
var pessoa2 = criarPessoa("Maria", 30);

// Chamando o método apresentar para cada objeto
pessoa1.apresentar();
pessoa2.apresentar();
