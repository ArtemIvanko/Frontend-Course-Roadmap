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