let num = +prompt("Enter a number");
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

getIntegerList(num);

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