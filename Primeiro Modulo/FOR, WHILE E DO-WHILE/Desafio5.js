// Desafio do "while" com entrada do usuário: Crie um loop "while" que solicite
// ao usuário que adivinhe um número secreto.
// O loop deve continuar até que o usuário acerte o número.

const numeroSecreto = Math.floor(Math.randon() * 10) + 1;

let adivinhar =parseInt(prompt("adivinhe o numero secreto entre 1 e 10):"));

while (adivinhar != numeroSecreto) {
    adivinhar = parseInt(prompt("errado, tente novamente:"));
}

console.log("Parabens você adivinhou o numero secreto")