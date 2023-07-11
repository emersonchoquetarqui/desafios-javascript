// Agrupar objetos em um array com base em uma propriedade comum.

const pessoas = [
    {nome: "emerson", idade: 22},
    {nome: "sandro", idade: 22},
    {nome: "ana", idade: 55},
    {nome: "andre", idade: 55},
    {nome: "fulanO", idade: 18},
    {nome: "fulanA", idade: 28}
  ];

const pessoasAgrupadasIdade = agrupando(pessoas, 'idade');

function agrupando(dados, propriedade){
    const pessoa = {};

    dados.forEach(objeto => {
        const valorPropriedade =  objeto[propriedade];
        if (!pessoa[valorPropriedade]){
            pessoa[valorPropriedade] = [];
        }
        pessoa[valorPropriedade].push(objeto);
    });
    return Object.values(pessoa);
}
console.log(pessoasAgrupadasIdade);

// Primeiro, temos um array chamado pessoas que contém uma lista de objetos. 
// Cada objeto representa uma pessoa e possui duas propriedades: nome e idade. 
// Esses objetos são usados como dados para agrupamento posterior.

// Em seguida, temos a declaração de uma função chamada agrupando, 
// que recebe dois parâmetros: dados (o array de objetos) e
// propriedade (a propriedade pela qual os objetos serão agrupados).

// Dentro da função agrupando, é criado um objeto chamado pessoa vazio. 
// Esse objeto será usado para armazenar os grupos de objetos com base na propriedade fornecida.

// Em seguida, é utilizado um loop forEach para iterar sobre cada objeto do array dados.

// Dentro do loop, é obtido o valor da propriedade específica (idade, no exemplo) 
// para o objeto atualmente sendo iterado. Isso é feito utilizando a sintaxe objeto[propriedade], 
// onde propriedade é uma variável que contém o nome da propriedade a ser acessada.

// Em seguida, é verificado se a propriedade já existe como uma 
// chave no objeto pessoa usando a condição !pessoa[valorPropriedade].
// Caso não exista, é criado um novo array vazio como valor para essa chave usando pessoa[valorPropriedade] = [].

// Por fim, o objeto atual é adicionado ao array correspondente à chave
// da propriedade dentro do objeto pessoa usando pessoa[valorPropriedade].push(objeto).

// Após o loop, a função retorna os valores do objeto pessoa usando Object.values(pessoa). 
// Isso retorna um array contendo todos os grupos de objetos.

// Fora da função agrupando, é chamada a função console.log 
// para exibir o resultado do agrupamento no console.

// O resultado será um array contendo grupos de objetos, onde cada grupo é composto 
// por objetos com a mesma idade. Os grupos são ordenados com base nas idades, 
// e cada objeto é mantido em sua posição original no array pessoas.