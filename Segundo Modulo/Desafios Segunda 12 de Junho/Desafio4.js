// Criar uma classe base chamada Pessoa com as propriedades nome e idade. 
// Em seguida, criar duas subclasses chamadas Estudante e Professor que herdam da classe Pessoa. 
// Adicione um método apresentar() em cada classe que exibe uma mensagem de apresentação do estudante ou professor.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Estudante extends Pessoa {
    apresentar() {
        return `eai meu nome é ${this.nome} tenho ${this.idade} anos e sou estudante`
    }
}

class Professor extends Pessoa {
    apresentar() {
        return `eai meu nome é ${this.nome} tenho ${this.idade} anos e sou professor`
    }
}

const estudanteTeste = new Estudante("emerson", "21");
console.log(estudanteTeste.apresentar());
const professorTeste = new Professor("girafales", "100");
console.log(professorTeste.apresentar());
