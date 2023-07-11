// Desafio da categoria de filme: Crie um programa que peça ao usuário 
// para digitar a duração de um filme em minutos. Com base na duração fornecida, 
// exiba uma mensagem indicando se o filme 
// é considerado "curto" (até 90 minutos), "médio" (entre 90 e 120 minutos) 
// ou "longo" (mais de 120 minutos).

const duracaoDoFilme = 110;

if (duracaoDoFilme <= 90){
    console.log("o filme pela duração é curto");
} else if (duracaoDoFilme > 90 && duracaoDoFilme <= 120) {
    console.log("o filme pela duração tá na media");
} else {
    console.log("O filme pela duração é longo");
}