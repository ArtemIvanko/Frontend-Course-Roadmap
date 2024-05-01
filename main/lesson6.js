const removeSymbols = (str, symbols) => {
  let result = str;

  symbols.forEach(symbol => {
    result = result.split(symbol).join("");
  });

  return result;
};

removeSymbols(" hello world", ["h", "e", "o"]);

const arr = [1, 2, 3, 4, 5, "hello", "world", "js", false, true, null, undefined, 110];
const filteredArr = arr.filter((item) => typeof item === "number");
let sum = 0;

const getAverage = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

getAverage(filteredArr);
