// // decorator básico
// function decorator(alvo) {
//     alvo.propriedadeCustomizada = 'Valor Personalizado';
//   }
  
//   @decorator
//   class MinhaClasse {}
  
//   console.log(MinhaClasse.propriedadeCustomizada);

  
// // decorator de função
// function logExecucao(alvo, nome, descritor) {
//     const metodoOriginal = descritor.value;
    
//     descritor.value = function (...args) {
//       console.log(`Executando o método ${nome} com os argumentos ${args}`);
//       return metodoOriginal.apply(this, args);
//     };
    
//     return descritor;
//   }
  
//   class MinhaClasse {
//     @logExecucao
//     meuMetodo(arg) {
//       console.log(`Executando meuMetodo com o argumento ${arg}`);
//     }
//   }
  
//   const instancia1 = new MinhaClasse();
//   instancia1.meuMetodo('Olá');


// decorator de propriedade
// function somenteLeitura(alvo, nome, descritor) {
//     descritor.writable = false;
//     return descritor;
//   }
  
//   class MinhaClasse {
//     @somenteLeitura
//     minhaPropriedade = 'Valor Inicial';
//   }
  
//   const instancia2 = new MinhaClasse();
//   instancia2.minhaPropriedade = 'Novo Valor';


// // decorator de parâmetro  
function validarTamanhoString(alvo, nome, descritor) {
    const metodoOriginal = descritor.value;
    
    descritor.value = function (arg) {
      if (typeof arg !== 'string' || arg.length < 5) {
        throw new Error('Argumento inválido');
      }
      return metodoOriginal.call(this, arg);
    };
    
    return descritor;
  }
  
  class MinhaClasse {
    @validarTamanhoString
    meuMetodo(arg) {
      console.log(`Executando meuMetodo com o argumento ${arg}`);
    }
  }
  
  const instancia3 = new MinhaClasse();
  instancia3.meuMetodo('Olá');
  instancia3.meuMetodo('Oi');


// decorator simples 1
// function logDecorator(func) {
//     return function(...args) {
//       console.log('Chamando função:', func.name);
//       console.log('Argumentos:', args);
//       const result = func.apply(this, args);
//       console.log('Resultado:', result);
//       return result;
//     };
//   }
  
//   // Função de exemplo
//   function soma(a, b) {
//     return a + b;
//   }
  
//   // Aplicando o decorator
//   const somaComLog = logDecorator(soma);
  
//   // Chamando a função decorada
//   const resultado1 = somaComLog(2, 4);
//   console.log('Resultado final:', resultado1);


// // decorator simples 2
// function loggerDecorator(func) {
//     return function(...args) {
//       console.log('Antes de executar a função');
//       const result = func.apply(this, args);
//       console.log('Depois de executar a função');
//       console.log('Resultado:', result);
//       return result;
//     };
//   }
  
//   // Exemplo de função
//   function soma(a, b) {
//     return a + b;
//   }
  
//   // Aplicando o decorator
//   const somaDecorada = loggerDecorator(soma);
  
//   // Chamando a função decorada
//   const resultado2 = somaDecorada(2, 8);
//   console.log(resultado2);


// // decorator simples 3
// function logDecorator(fn) {
//     return function (...args) {
//       console.log('Antes do log');
//       const result = fn.apply(this, args);
//       console.log('Depois do log');
//       return result;
//     };
//   }
  
//   // Exemplo de função decorada
//   function sum(a, b) {
//     return a + b;
//   }
  
//   // Aplicando o decorator à função
//   const decoratedSum = logDecorator(sum);
  
//   // Chamando a função decorada
//   const result = decoratedSum(2, 3);
//   console.log(result);


