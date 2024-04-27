const removeSymbols = (str, symbols) => {
  let result = str;

  symbols.forEach(symbol => {
    result = result.split(symbol).join("");
  });

  return result;
};

removeSymbols(" hello world", ["h", "e", "o"]);