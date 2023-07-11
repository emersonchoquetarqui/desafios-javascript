// Condicionais Escreva um programa que peça ao usuário para digitar um número inteiro e verifique se ele é par ou ímpar. 
// Utilize os seguintes critérios:
// Se o número for par, exiba a mensagem "O número é par."
// Se o número for ímpar, exiba a mensagem "O número é ímpar."
// Utilize condicionais do tipo ternário, switch e if-else para implementar a solução.

// usando ternario
let numero = 3;
let mensagem = numero %2 === 0? "o numero é par" : "o numero é impar";
console.log(mensagem);

// usando switch
numero =  3;
switch (numero % 2){
    case 0:
        console.log("O numero é par");
        break;
    case 1:
        console.log("O numero é impar");
        break;
    default:
        console.log("valor informado invalido");        
}

// usando if-else
numero = 7;
if(numero % 2 === 0){
    console.log("o numero é par")
} else {
    console.log("o numero é impar")
}