// Laços de repetição Escreva um programa que exiba todos os números pares de 1 a 20. 
// Utilize laços de repetição do tipo while, do-while e for para implementar a solução. 
// O programa deve imprimir os números separados por vírgula.

// usando while
let numero1 = 1;
let pares1 = "";
while (numero1 <= 20){
    if(numero1 % 2 === 0){
        pares1 += numero1 + ",";
    }
    numero1++;
}
console.log(" numeros pares " + pares1);

// usando do-while
let numero2 = 1;
let pares2 = "";
do {
    if (numero2 % 2 === 0){
        pares2 += numero2 + ",";
    }
    numero2++ 
} while(numero2 <= 20);
console.log(" numero pares " + pares2 )

// usando for
let pares3 = "";
for(let numero3 = 1; numero3 <= 20; numero3++){
    if(numero3 % 2 === 0){
        pares3 += numero3 + ",";
    }
}
console.log(" numeros pares " + pares3)
