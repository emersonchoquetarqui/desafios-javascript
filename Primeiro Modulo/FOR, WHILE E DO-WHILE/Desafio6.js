// Desafio do "do while" com validação de senha: Escreva um loop "do while" 
// que solicite ao usuário que digite uma senha. 
// O loop deve continuar até que o usuário insira a senha correta.

let senhaCorreta = "senha123";
let senhaInserida;

do {
  senhaInserida = prompt("Digite a senha:");
} while (senhaInserida !== senhaCorreta);

console.log("Senha correta! Acesso concedido.");