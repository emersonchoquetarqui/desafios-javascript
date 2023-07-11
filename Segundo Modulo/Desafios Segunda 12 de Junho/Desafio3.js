// Criar uma classe base chamada Forma com o método calcularArea(). 
// Em seguida, criar duas subclasses chamadas Retangulo e Circulo que herdam da classe Forma. 
// Implemente o método calcularArea() em cada subclasse para retornar a área correspondente.

class Forma {calcularArea(){}}

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2)
    }
}

const retangulo = new Retangulo("8", "4");
console.log(retangulo.calcularArea());
const circulo = new Circulo("4");
console.log(circulo.calcularArea());
