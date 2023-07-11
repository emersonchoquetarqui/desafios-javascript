// Implemente um decorator chamado log, que registre a chamada de uma função no console, exibindo o nome da função e seus argumentos. 
// Em seguida, teste o decorator aplicando-o a uma função qualquer.

const decorator = (log) => {
    return (...params) => {
      console.log('antes da função')
      const resultado = log.call(this, ...params)
      console.log('depois da função')
      return resultado
    }
  }
  
  const func = (nome) => console.log(`e ai ${nome}`)
  const decorada = decorator(func)
  decorada('emerson') 

  //temos a definição da função decorator, que recebe um parâmetro chamado log. 
  //Essa função decorator retorna uma nova função, que será a função decorada.
  //A função decorada é definida como uma função anônima que utiliza o 
  //operador spread (...params) para receber um número variável de parâmetros. 
  //Dentro da função decorada, temos a adição de um log antes e depois da chamada da função original.
  //Antes da chamada da função original, é exibida a mensagem "antes da função" utilizando console.log().
  //Em seguida, a função original é invocada utilizando log.call(this, ...params), passando os parâmetros recebidos. 
  //Aqui, log se refere à função original que foi passada como argumento para o decorador. 
  //A chamada call(this, ...params) garante que a função seja executada no contexto correto e com os parâmetros adequados.
  //Após a chamada da função original, é exibida a mensagem "depois da função" utilizando console.log(). 
  //Em seguida, o resultado da função original é retornado.
  //No exemplo final, a função func é definida para exibir uma mensagem com o nome fornecido como parâmetro. 
  //Em seguida, a função decorator é chamada passando func como argumento, e o resultado é atribuído à variável decorada. 
  //Por fim, a função decorada é chamada passando o valor "emerson" como argumento.
  //Dessa forma, ao executar o código, será exibido o log "antes da função", 
  //em seguida a mensagem "e ai emerson" (resultado da função func), e finalmente o log "depois da função".