// Contar a quantidade de ocorrências de cada elemento em um array

const elementos = [1, 2, 3, 4, 5];
const resultado = qtdOcorrencias(elementos);

function qtdOcorrencias(elementos) {
    const ocorrencias = {};
  
    for (let qtd = 0; qtd < elementos.length; qtd++) {
      const elemento = elementos[qtd];
  
      if (ocorrencias[elemento]) {
        ocorrencias[elemento]++;
      } else {
        ocorrencias[elemento] = 1;
      }
    }
    return ocorrencias;
  }
  console.log(resultado);
  