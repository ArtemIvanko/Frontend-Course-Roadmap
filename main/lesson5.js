let num = +prompt("Enter number");

for (let i = 1; i <= 100; i++) {
  if (!num || num <= 0) {
    console.log("Invalid input data");
    break;
  }

  if (i * i <= num) {
    console.log(i);
  }
}