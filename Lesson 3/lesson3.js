const getTypeFromValue = (value) => {
  if (typeof value === "string") {
    return console.log("string");
  }
  if (typeof value === "number") {
    return console.log("number");
  }
  if (typeof value === "boolean") {
    return console.log("boolean");
  }
  if (typeof value === "object") {
    return console.log("object");
  }
  if (typeof value === "undefined") {
    return console.log("undefined");
  }
  if (typeof value === "function") {
    return console.log("function");
  }
  if (typeof value === "symbol") {
    return console.log("symbol");
  }
  if (typeof value === "bigint") {
    return console.log("bigint");
  }
};

getTypeFromValue("hello"); // string
getTypeFromValue(123); // number
getTypeFromValue(true); // boolean

const getUserValue = () => {
  const value1 = prompt("Enter value 1");
  const value2 = prompt("Enter value 2");
  const value3 = prompt("Enter value 3");

  const message = `You have entered: ${value1}, ${value2}, ${value3}`;

  return console.log(message);
};

getUserValue();

const setSpace = (value) => {
  if (!value) {
    return console.log("Uh oh! Please enter a number to be spaced out.");
  }

  const splitNumber = value.toString().split("");

  if (splitNumber.length <= 1) {
    console.log("Uh oh! Please enter a number greater than 1 to be spaced out.");
  }

  const spacedNumber = splitNumber.join(" ");

  console.log(spacedNumber);
};

setSpace(10369);

//TODO: Refactor the code. Create separate functions for each task.
