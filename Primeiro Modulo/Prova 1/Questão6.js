// Estruturas de Dados Implemente uma função chamada "contarOcorrencias" que recebe uma string e 
// retorna um dicionário contendo a contagem de ocorrências de cada caractere na string. 
// A chave do dicionário deve ser o caractere e o valor deve ser o número de ocorrências.

let resultado = contarOcorrencias("booom diaaaaaaaaaaaaaaa");
function contarOcorrencias(string){
    let ocorrencias = {};
    for (let questao6 = 0; questao6 < string.length; questao6++) {
        let caractere = string[questao6];
        if(ocorrencias[caractere]) {
            ocorrencias[caractere]++;
        } else {
            ocorrencias[caractere] = 1;
        }
    }
    return ocorrencias;
}
console.log(resultado);

// É declarada uma função chamada contarOcorrencias que recebe um parâmetro chamado string.
// É criado um objeto vazio chamado ocorrencias para armazenar as contagens.
// O código entra em um loop for que itera por cada caractere na string. 
// A variável de controle do loop é chamada de questao6 (provavelmente um nome inadequado) e é inicializada com zero.
// Em cada iteração do loop, o caractere atual é atribuído à variável caractere usando
// a notação de colchetes string[questao6]. Isso permite acessar o caractere na posição questao6 da string.
// O código verifica se o caractere caractere já existe como uma chave no objeto ocorrencias. 
// Isso é feito usando a notação de colchetes ocorrencias[caractere]. 
// Se o caractere já existe, isso significa que já houve uma ocorrência anterior, 
// então o código incrementa o valor associado à chave caractere em 1 usando o operador de incremento ++.
// Se o caractere não existe como uma chave no objeto ocorrencias, 
// isso significa que é a primeira ocorrência desse caractere na string. 
// Nesse caso, o código inicializa o valor associado à chave caractere como 1.
// Após o loop percorrer todos os caracteres da string, o objeto ocorrencias contém as contagens de cada caractere.
// A função retorna o objeto ocorrencias.
// Fora da função, o código chama a função contarOcorrencias com a string "booom diaaaaaaaaaaaaaaa" 
// e atribui o resultado retornado a uma variável chamada resultado.
// O código então imprime o valor da variável resultado no console usando console.log(resultado).