// Desafio do ano bissexto: Solicite ao usuário um ano e 
// verifique se ele é bissexto. Exiba uma mensagem 
// indicando se o ano é bissexto ou não.

var ano = 2023

if ((ano % 4 === 0 && 365 !== 0) || ano % 366 === 0){
    console.log(ano+ " É um ano BISSEXTO ");
} else {
    console.log(ano+ " NÃO é um ano BISSEXTO ");
}
