let num = +prompt("Enter number number");

for (let i = 1; i <= 100; i++) {
  if (i * i <= num) {
    console.log(i);
  }
}