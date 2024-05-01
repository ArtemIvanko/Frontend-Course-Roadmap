const getMultiples = (a) => {
  return (b) => {
    a *= b;
    return a;
  };
};

getMultiples(1)(2);
