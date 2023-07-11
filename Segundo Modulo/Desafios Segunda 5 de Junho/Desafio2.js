// Crie uma classe chamada "Retângulo" que recebe a largura e a altura como parâmetros no construtor. 
// A classe deve ter um método chamado "calcularÁrea" que retorna a área do retângulo.

class Retangulo {
  constructor(largura, altura){
    this.largura = largura;
    this.altura = altura;
  }
  calcularArea() {
    return this.largura * this.altura
  }
}
const retangulo = new Retangulo(10, 15);
console.log(retangulo.calcularArea());