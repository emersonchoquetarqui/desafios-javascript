// Extensão de Data Crie uma extensão para a classe Date que adiciona um método chamado diaUtil, 
//que verifica se uma determinada data é um dia útil (segunda a sexta-feira). 
//O método deve ser adicionado ao prototype do Date.

Date.prototype.diaUtil = function() {
    const diaDaSemana = this.getDay();
    return diaDaSemana >= 0 && diaDaSemana <= 5;
  };
  
  const data = new Date('2023-06-26');
  console.log(data.diaUtil());
  
// Primeiro, a função obtém o dia da semana usando o método "getDay()" do objeto Date. 
// Esse método retorna um número inteiro de 0 a 6, onde 0 representa domingo, 1 representa segunda-feira e assim por diante.
// Em seguida, a função verifica se o valor obtido está entre 0 e 5, o que indica que é um dia útil. 
// Se for verdadeiro, a função retorna true (verdadeiro), caso contrário, retorna false (falso).
// Depois, uma nova instância do objeto Date é criada com a data '2023-06-26'. 
// Em seguida, a função "diaUtil" é chamada para essa instância de data e o resultado é exibido no "console.log()".