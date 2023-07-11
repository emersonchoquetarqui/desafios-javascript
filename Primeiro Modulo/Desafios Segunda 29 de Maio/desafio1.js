//soma de elementos em um array

let valores = [5, 10, 15];
let resultado = somar(valores);

function somar(valores) {
  let soma = 0;
  for (let somando = 0; somando < valores.length; somando++) {
    soma += valores[somando];
  }
  return soma;
}

console.log(resultado);
  