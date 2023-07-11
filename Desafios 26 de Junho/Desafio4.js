// Conversão para Moeda Crie uma função chamada paraMoeda que converte um número para uma
//string no formato de moeda, com separadores de milhares e símbolo do Real (R$). 
//Adicione essa função ao prototype da classe Number.

Number.prototype.paraMoeda = function() {
    return "R$ " + this.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/, "1.");
  };

  let numero1 = 123456;
  console.log(numero1.paraMoeda());
  let numero2 = 7890;
  console.log(numero2.paraMoeda());

// O método paraMoeda() converte um número em uma representação monetária no formato de moeda brasileira. 
// Ele adiciona o símbolo "R$" no início da string retornada. 
// Em seguida, utiliza o método toFixed(2) para fixar o número em duas casas decimais, 
// o que garante que a representação terá sempre duas casas decimais, mesmo que o número original não as tenha.
// A seguir, são realizadas duas substituições na string retornada. 
// A primeira substituição troca o ponto decimal por uma vírgula, para seguir o padrão de representação da moeda brasileira.
// A segunda substituição insere um ponto a cada três dígitos antes da vírgula, usando uma expressão regular. 
// Isso ajuda a separar os milhares, tornando a representação mais legível.