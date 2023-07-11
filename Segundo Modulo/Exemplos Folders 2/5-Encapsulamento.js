// exemplo 1
function Carro() {
    let velocidade = 0;
    
    this.acelerar = function() {
      velocidade += 10;
      console.log("Velocidade atual: " + velocidade);
    };
    
    this.desacelerar = function() {
      if (velocidade > 0) {
        velocidade -= 10;
      }
      console.log("Velocidade atual: " + velocidade);
    };
  }
  
  let meuCarro = new Carro();
  meuCarro.acelerar();
  meuCarro.desacelerar();


// exemplo 2
class ContaBancaria {
  #saldo = 10;

  depositar(valor) {
    this.#saldo += valor;
    console.log("Saldo atual: " + this.#saldo);
  }

  verificarSaldo() {
    console.log("Saldo atual: " + this.#saldo);
  }
}

let minhaConta = new ContaBancaria();
minhaConta.depositar(1500);
minhaConta.verificarSaldo();
