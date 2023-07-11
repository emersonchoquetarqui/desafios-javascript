// Crie uma função que receba dois números como 
// parâmetros e retorne o maior deles.

function retornarMaior(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    } else {
        return numero2;
    }
}
console.log(retornarMaior(5,10));
console.log(retornarMaior(10,15));
console.log(retornarMaior(15,25));
