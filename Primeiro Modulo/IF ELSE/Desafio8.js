// Desafio do login: Crie um programa que solicite ao usuário 
// um nome de usuário e uma senha. Verifique se o nome de usuário 
// e a senha correspondem aos valores pré-definidos. 
// Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

const usuarioPredefinido = "emerson";
const senhaPredefinida = "senha123";

const nomeUsuario = "emerson";
const senha = "senha123";

if (nomeUsuario === usuarioPredefinido && senha === senhaPredefinida) {
    console.log("Login bem-sucedido!");
  } else {
    console.log("Nome de usuário ou senha incorretos. Login falhou.");
  }