const getUserValue = () => {
  const value1 = prompt("Enter value 1");
  const value2 = prompt("Enter value 2");
  const value3 = prompt("Enter value 3");

  const values = [value1, value2, value3];

  return console.log(values);
};

getUserValue();