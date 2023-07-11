// Criar uma classe base chamada Animal com o método mover(). 
// Em seguida, criar duas subclasses chamadas Cachorro e Peixe que herdam da classe Animal. 
// Implemente o método mover() em cada subclasse para exibir uma mensagem indicando como o animal se move.

class Animal {mover(){}}
  
  class Cachorro extends Animal {
    mover() {
        return "O cachorro se move correndo.";
    }
  }
  
  class Aguia extends Animal {
    mover() {
        return "A aguia se move voando." ;
    }
  }
  
  const cachorro = new Cachorro();
  console.log(cachorro.mover());
  
  const aguia = new Aguia();
  console.log(aguia.mover()); 
