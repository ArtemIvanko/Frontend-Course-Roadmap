const getSum = (a) => {
  let result = a;

  return function (b) {
    result += b;

    return result;
  };
};

const sum = getSum(0);

console.log(sum(2)); // 2
console.log(sum(3)); // 5
console.log(sum(4)); // 9
console.log(sum(5)); // 14

const getMultiples = (a) => {
  return (b) => {
    return a * b;
  };
};

getMultiples(1)(2);

const runLoop = () => {
  for (let i = 0; i < 10; i++) {
    const value = +prompt("Enter a number");

    if (typeof value !== "number" || isNaN(value)) {
      console.log("Invalid value");
      continue;
    }

    if (value >= 100) {
      console.log(value);
      break;
    }
  }

  console.log("End of the cycle");
};

runLoop();
