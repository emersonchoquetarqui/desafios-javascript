// Criar uma classe base chamada Funcionario com as propriedades nome e salario. 
// Em seguida, criar duas subclasses chamadas Gerente e Programador que herdam da classe Funcionario. 
// Adicione um método calcularBonus() em cada classe que retorna um valor de bônus baseado no salário do funcionário


class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
}

class Gerente extends Funcionario {
  calcularBonus() {
    return this.salario / 10;
  }
}

class Programador extends Funcionario {
  calcularBonus() {
    return this.salario * 0.1;
  }
}

const gerente = new Gerente("fulano", "5000");
console.log(gerente.nome);
console.log(gerente.salario);
console.log(gerente.calcularBonus());

const programador = new Programador("fulana", "3000");
console.log(programador.nome);
console.log(programador.salario);
console.log(programador.calcularBonus());