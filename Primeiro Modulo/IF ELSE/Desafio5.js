// Desafio da palavra secreta: Crie um programa que solicite ao usuário 
// uma palavra. Em seguida, verifique se a palavra fornecida 
// é igual a uma palavra secreta pré-definida. 
// Se for igual, exiba uma mensagem de parabéns; 
// caso contrário, exiba uma mensagem de tentativa incorreta.

var palavaraSecreta = "emerson";

var palavraDigito = "choque";

if (palavraDigito === palavaraSecreta) {
    console.log("parabens acertou o nome do cara")
} else {
    console.log("errou man")
}