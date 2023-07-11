// Crie um decorator chamado debounce, que impeça que uma função seja executada várias vezes seguidas em um intervalo de tempo curto. 
// O decorator deve aguardar um certo período de tempo antes de permitir a próxima execução da função. 
// Implemente o decorator e teste-o com uma função que realiza uma chamada AJAX simulada.

function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function simulaChamadaAjax(data) {
  console.log('simulando testes ajax', data);
}

const teste = debounce(simulaChamadaAjax, 5000);

teste('Primeira chamada');
teste('Segunda chamada');
teste('Terceira chamada');

// A função debounce recebe dois parâmetros: func, que representa a função a ser chamada, e delay, que define o tempo mínimo entre as chamadas.
//Ao chamar debounce com uma função, ele retorna outra função. Quando essa função retornada é chamada, ela cancela qualquer 
//temporizador anteriormente definido e define um novo temporizador usando setTimeout. 
//O temporizador aguarda o tempo especificado em delay antes de executar a função func passando os argumentos fornecidos.
//No exemplo fornecido, a função simulaChamadaAjax é usada como argumento para debounce com um atraso de 5000 milissegundos (5 segundos). 
//Em seguida, a função retornada é atribuída à constante teste.
//Quando teste é chamado com diferentes argumentos, ele irá aguardar 5 segundos após a última chamada
// antes de executar a função simulaChamadaAjax com os argumentos fornecidos. 
//Isso garante que apenas a última chamada dentro do período de 5 segundos seja executada, ignorando as chamadas intermediárias.
//No exemplo fornecido, após a execução do código, você verá a mensagem "simulando testes ajax Terceira chamada" impressa no console, 
//já que essa foi a última chamada após o atraso de 5 segundos.