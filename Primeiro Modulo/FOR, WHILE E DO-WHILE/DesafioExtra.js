for (let extra1 = 50; extra1 <=200; extra1+=2) {
    console.log(extra1)
}

let extra2 = 50;
while(extra2 <=200){
    extra2+=2
    console.log(extra2)
}

let extra3 = 50;
do{
    console.log(extra3)
    extra3+=2
} while(extra3 <=200);


let texto = "desafio";
let letra = 0;
do{
    console.log(texto[letra]);
    letra++;
} while (letra < texto.length);


let texto2 = "desafio";
let letra2 = 0;
while(letra2 < texto2.length){
    console.log(texto2[letra2]);
    letra2++;
}


var texto3 = "desafio";
for (var letra3 = 0; letra3 < texto3.length; letra3++) {
  console.log(texto3[letra3]);
}
