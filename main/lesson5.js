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

let num = +prompt("Enter number");

for (let i = 1; i <= 100; i++) {
  if (!num || num <= 0) {
    console.log("Invalid input data");
    break;
  }

  if (i * i <= num) {
    console.log(i);
  }
}

let userNum = +prompt("Enter a number");
let integerList = "";

const getIntegerList = (num) => {
  if (!num || num < 0) {
    return "Please enter a positive number";
  }

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      integerList += i + " ";
    }
  }

  return integerList;
};

getIntegerList(userNum);

//Возможно я с верхней частью немного не так сделал, поэтому вот второй варик, который скорее всего и есть правильный

let n = +prompt("Enter number");
let isPrime = true;

const showPrimes = (n) => {
  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;

        break;
      }
    }

    if (isPrime) {
      console.log("Number is prime");
    } else {
      console.log("Number is not prime");
    }
  }

  return isPrime;
};

showPrimes(n);
