// Crie uma função que receba um array de strings como parâmetro e 
// retorne um novo array contendo apenas as strings que possuem mais de 5 caracteres.

var animais = ["cachorro", "gato", "aguia", "leao", "rinoceronte"]
var filtrando = maisDeCinco(animais);

function maisDeCinco(animais) {
  var arrayVazio = [];
  for (var qtd = 0; qtd < animais.length; qtd++) {
    if (animais[qtd].length > 5) {
      arrayVazio.push(animais[qtd]);
    }
  }
  return arrayVazio;
}
console.log(filtrando);