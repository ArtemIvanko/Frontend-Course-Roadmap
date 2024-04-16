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