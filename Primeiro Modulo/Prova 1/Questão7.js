// Manipulação de Arquivos Escreva um programa que leia o conteúdo de um arquivo de texto chamado "dados.txt" 
// e conte quantas vezes cada palavra aparece no texto. 
// Em seguida, exiba as palavras e suas respectivas contagens em ordem alfabética.

console.log("Example to read line by line text");
const f = require('fs');
const readline = require('readline');
var user_file = '/Primeiro Modulo/questao7.txt';
var r = readline.createInterface({
    input : f.createReadStream(user_file)
});
r.on('line', function (text) {
console.log(text);
});

// const fs = require('fs');

// const user_file = './questao7.txt';

// fs.readFile(user_file, 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const lines = data.split('\n');
//   for (let i = 0; i < lines.length; i++) {
//     console.log(lines[i]);
//   }
// });

// const fs = require('fs');
// const readline = require('readline');

// const user_file = '/Primeiro Modulo/questao7.txt;';

// const rl = readline.createInterface({
//   input: fs.createReadStream(user_file),
//   crlfDelay: Infinity // Para suportar diferentes terminações de linha
// });

// rl.on('line', (line) => {
//   console.log(line);
// });
