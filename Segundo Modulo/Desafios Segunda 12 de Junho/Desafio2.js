// Criar uma classe base chamada Veiculo com as propriedades marca e modelo. 
// Em seguida, criar duas subclasses chamadas Carro e Moto que herdam da classe Veiculo. 
// Adicione um método acelerar() em cada classe que exibe uma mensagem informando a aceleração do veículo.

class Veiculo {
    constructor(marca, modelo) {
        this.marca =marca;
        this.modelo =modelo;
    }
}

class Carro extends Veiculo {
    acelerar() {
        return `o carro da ${this.marca} do modelo ${this.modelo} tá acelerando`;
    }
}

class Moto extends Veiculo {
    acelerar() {
        return `a moto da ${this.marca} do modelo ${this.modelo} tá acelerando`;
    }
}

const carroExemplo = new Carro("chevrolet", "onix");
console.log(carroExemplo.acelerar());
const motoExemplo = new Moto("Honda", "Cg 160");
console.log(motoExemplo.acelerar());