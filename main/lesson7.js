const getMultiples = (a) => {
  return (b) => {
    return a * b;
  };
};

getMultiples(1)(2);
