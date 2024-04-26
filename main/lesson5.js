let stepNumbers = "";

for (let i = 20; i <= 30; i += 0.5) {
  console.log(i); //Each step in the loop will be printed to the console
  stepNumbers += i + " ";
}

console.log(stepNumbers); //Or in one line separated by a space

let dollar = 26;
let sum = 0;

for (let i = 10; i <= 100; i += 10) {
  sum = i * dollar;

  console.log(`${i} USD = ${sum} UAH`);
}