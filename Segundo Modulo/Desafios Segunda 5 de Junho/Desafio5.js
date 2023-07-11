// Crie uma classe chamada "Carro" que recebe a marca, o modelo e o 
// ano como parâmetros no construtor. A classe deve ter um método 
// chamado "informações" que retorna uma string com as informações do carro.

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  informações() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  }
}
const meuCarro = new Carro('Chevrolet', 'Onix', '2023');
console.log(meuCarro.informações());