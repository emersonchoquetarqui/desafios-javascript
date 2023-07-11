// Criar uma classe base chamada DispositivoEletronico com o método ligar() e desligar(). 
// Em seguida, criar duas subclasses chamadas Televisao e Computador que herdam da classe DispositivoEletronico. 
// Implemente os métodos ligar() e desligar() em cada subclasse para
// exibir mensagens indicando o estado atual do dispositivo.

class DispositivoEletronico {ligar(){}desligar(){}}
  
  class Televisao extends DispositivoEletronico {
    ligar() {
        return "A televisão tá ligada.";
    }
    desligar() {
        return "A televisão tá desligada.";
    }
  }
  
  class Computador extends DispositivoEletronico {
    ligar() {
        return "O computador tá ligado.";
    }
    desligar() {
        return "O computador tá desligado.";
    }
  }
  
  const televisao = new Televisao();
  console.log(televisao.ligar());
  console.log(televisao.desligar());
  
  const computador = new Computador();
  console.log(computador.ligar());
  console.log(computador.desligar());