// Calcular a média de valores em um array.

const valores = [20, 40, 60, 80, 100];
const media = calcularMedia(valores);

function calcularMedia(valor) {
    if (valor.length === 0) {
      return 0;
    }
    let soma = 0;
    for (let media = 0; media < valor.length; media++) {
      soma += valor[media];
    }
    return soma / valores.length;
  }
  console.log("A média dos valores é: " + media);
  