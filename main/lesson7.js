const getMultiples = (a) => {
  let result = a;

  return (b) => {
    result *= b;
    return result;
  };
};

getMultiples(1)(2);
