// Atividade: Criar uma classe base chamada Animal com as propriedades nome e idade. 
// Em seguida, criar duas subclasses chamadas Cachorro e Gato que herdam da classe Animal. 
// Adicione um método fazerBarulho() em cada classe que retorna o som característico de um cachorro ou gato.

class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
} 

class Cachorro extends Animal {
    fazerBarulho () {
        return "latidos";
    }
}

class Gato extends Animal {
    fazerBarulho () {
        return "Miado";
    }
}

const cachorro = new Cachorro ("bahia", "2");
console.log(cachorro.nome);
console.log(cachorro.idade);
console.log(cachorro.fazerBarulho());

const gato = new Gato ("vitoria", "0"); 
console.log(gato.nome); 
console.log(gato.idade);
console.log(gato.fazerBarulho());
