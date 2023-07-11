// Criar uma classe base chamada InstrumentoMusical com os métodos tocar() e afinar(). 
// Em seguida, criar duas subclasses chamadas Violao e Piano que herdam da classe InstrumentoMusical. 
// Implemente os métodos tocar() e afinar() em cada subclasse de acordo com as características específicas de cada instrumento.

class InstrumentoMusical {tocar(){}afinar(){}}
  
  class Violao extends InstrumentoMusical {
    tocar() {
      return "Tocando o violão.";
    }
  
    afinar() {
      return "Afinando o violão.";
    }
  }
  
  class Piano extends InstrumentoMusical {
    tocar() {
      return "Tocando o piano.";
    }
  
    afinar() {
      return "Afinando o piano.";
    }
  }

const violao = new Violao();
console.log(violao.tocar());
console.log(violao.afinar());

const piano = new Piano();
console.log(piano.tocar());
console.log(piano.afinar());
