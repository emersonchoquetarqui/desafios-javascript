const numeros = [1, 2, 3, 4, 5];
const sum = numeros.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

const numbers = [10, 5, 8, 20, 3];
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log(max);

const fruits = ["maçã", "banana", "laranja", "maçã", "uva", "maçã"];
const count = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
console.log(count);

