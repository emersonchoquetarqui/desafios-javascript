// Crie uma classe chamada "Círculo" que recebe o raio como parâmetro no construtor. 
// A classe deve ter um método chamado "calcularÁrea" que retorna a área do círculo.

class Circulo { //aqio tenho a classe circulo onde dentro do escopo dela crio o constructor que é usado para para receber a classe a ser instanciada
  constructor(raio) { // dentro do constructor crio o parametro raio defino a propriedade dele como "raio"
    this.raio = raio;
  }
  calcularArea() { // aqui coloco os metodos math.PI e math.pow 
    return Math.PI * Math.pow(this.raio, 1); // o math.PI representa a proporção entre a circunferencia de um circulo com o seu diametro
  } // o math.pow retorna a base elevada ao expoente // dentro do metodo math.pow defino o raio como "1"
  calcularArea2() {
    return this.raio * this.raio
  }
}
const circulo = new Circulo(10); // nessa constante defino o valor do circulo como "2"
const area = circulo.calcularArea(); // aqui é aonde é realizado o calculo atraves do parametro em calcularArea
const area2 = circulo.calcularArea2(10, 10);
console.log(area); // aqui temos o resultado onde é elevado a 2 e mostra a sua área.
console.log(area2);
// o constructor é um metodo para criar e inicializar um objeto criado a partir de uma classe executado no momento
// em que a classe é instanciada e os atributos da classe são definidos dentro desse metodo