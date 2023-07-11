// Criar uma classe base chamada FiguraGeometrica com o método desenhar(). 
// Em seguida, criar duas subclasses chamadas Quadrado e Circulo que herdam da classe FiguraGeometrica. 
// Implemente o método desenhar() em cada subclasse para exibir uma representação visual da figura.

class FiguraGeometrica {desenhar(){}}
  
  class Quadrado extends FiguraGeometrica {
    desenhar() {
      return "Desenhando Quadrado";
    }
  }
  
  class Circulo extends FiguraGeometrica {
    desenhar() {
        return "Desenhando Circulo";
    }
  }
  
  const quadrado = new Quadrado();
  console.log(quadrado.desenhar());
  
  const circulo = new Circulo();
  console.log(circulo.desenhar());
