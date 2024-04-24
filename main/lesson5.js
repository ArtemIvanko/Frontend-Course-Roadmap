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
