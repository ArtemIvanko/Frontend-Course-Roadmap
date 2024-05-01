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