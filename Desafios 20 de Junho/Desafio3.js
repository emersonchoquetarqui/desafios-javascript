// Crie um decorator chamado readonly, que torne as propriedades de uma classe imutáveis, 
// impedindo a modificação de seus valores. Implemente o decorator e aplique-o a uma classe com algumas propriedades.

function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class MinhaClasse {
  constructor() {
    this.prop1 = 10;
    this.prop2 = 'Olá';
    this.prop3 = true;
  }
}

const instancia = new MinhaClasse();

console.log(instancia.prop1);
console.log(instancia.prop2);
console.log(instancia.prop3);

instancia.prop1 = 20;
instancia.prop2 = 'Mundo';

console.log(instancia.prop1);
console.log(instancia.prop2);

instancia.prop3 = false; 

console.log(instancia.prop3);

// O código define uma função chamada readonly, que é um decorator para propriedades de classe. Esse decorator é usado para tornar as propriedades 
//de uma classe somente leitura, impedindo sua modificação após a criação de uma instância da classe.
// Em seguida, é definida uma classe chamada MinhaClasse com três propriedades: prop1, prop2 e prop3. A classe não possui
// nenhum método além do construtor, que inicializa os valores das propriedades.
// Uma instância da classe MinhaClasse é criada e atribuída à variável instancia. Em seguida, o código imprime os
// valores das propriedades prop1, prop2 e prop3 usando console.log().
// Depois disso, as propriedades prop1 e prop2 são modificadas atribuindo-se novos valores a elas. No entanto, como essas 
//propriedades foram marcadas como somente leitura pelo decorator readonly, as modificações não têm efeito.
// Por fim, o código tenta modificar a propriedade prop3, mas também não surte efeito, pois ela também foi marcada como somente leitura pelo decorator.
// Portanto, resumidamente, o código define um decorator readonly que torna as propriedades de uma classe somente leitura, 
//impedindo sua modificação após a criação de uma instância.
