// Verificar se todos os elementos de um array satisfazem uma condição.

const elementos = [2, 4, 6, 12, 24];
let saoPares = true;

for (let par = 0; par < elementos.length; par++){
    if(elementos[par] % 2 != 0) { saoPares = false;}
}
if (saoPares){
    console.log("todos são numeros pares")
} else {
    console.log("algum numero digitado não é par")
}