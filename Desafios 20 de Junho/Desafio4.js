// Crie um decorator chamado measureTime, que calcule e exiba o tempo de execução de uma função em milissegundos. 
// Implemente o decorator e teste-o com uma função que possui um loop grande.

function measureTime(target, property, descriptor) {
    const metodoOriginal = descriptor.value;
  
    descriptor.value = function(...args) {
      const começoTempo = performance.now();
      const resultado = metodoOriginal.apply(this, args);
      const fimTempo = performance.now();
      const tempoExecução = fimTempo - começoTempo;
  
      console.log(`Tempo de execução: ${tempoExecução} milissegundos`);
  
      return resultado;
    };
    return descriptor;
  }

  // class desafio4 {
  //   grandeLoop() {
  //     for (let i = 0; i < 1000000000; i++) {}
  //   }
  // }

  class desafio4 {
    @measureTime
    grandeLoop() {
      for (let i = 0; i < 1000000000; i++) {}
    }
  }

  const instancia = new desafio4();
  const metodoDecorado = measureTime(desafio4.prototype, 'grandeLoop', Object.getOwnPropertyDescriptor(desafio4.prototype, 'grandeLoop'));
  metodoDecorado.value.call(instancia);
  
  
//aplicamos o decorator measureTime ao método bigLoop manualmente, em vez de usar o @ syntax sugar. 
//O método measureTime é chamado passando o protótipo da classe (MyClass.prototype), o nome do método ('bigLoop') e
// a descrição do método (Object.getOwnPropertyDescriptor(MyClass.prototype, 'bigLoop')).
//Em seguida, obtemos o método decorado e o chamamos explicitamente usando decoratedMethod.value.call(instance) para garantir que
// ele seja executado no contexto correto (this).
//Dessa forma, o tempo de execução do loop grande será exibido no console. Certifique-se de executar o código em
// um ambiente que suporte a função performance.now() para medir o tempo de execução com precisão.
