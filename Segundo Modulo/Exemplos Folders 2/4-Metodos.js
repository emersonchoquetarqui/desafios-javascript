// exemplo 1
let texto1 = "olá, mundo!";
let textoMaiusculo = texto1.toUpperCase();
console.log(textoMaiusculo);

// exemplo 2
let texto2 = "OLÁ, MUNDO!";
let textoMinusculo = texto2.toLowerCase();
console.log(textoMinusculo);

// exemplo 3
let numero3 = 3.14159;
let numeroFormatado = numero3.toFixed(2);
console.log(numeroFormatado);

// exemplo 4
let numeroTexto4 = "42";
let numero4 = parseInt(numeroTexto4);
console.log(numero4);

// exemplo 5
let numeroTexto5 = "3.14";
let numero = parseFloat(numeroTexto5);
console.log(numero);

// exemplo 6
let texto6 = "123456789101112";
let parteDoTexto = texto6.substring(4, 9);
console.log(parteDoTexto);

// exemplo 7
let frase7 = "Eu gosto de sorvete";
let palavras7 = frase7.split(" ");
console.log(palavras7);

// exemplo 8
let palavras8 = ["Eu", "gosto", "de", "sorvete"];
let frase8 = palavras8.join(" ");
console.log(frase8);