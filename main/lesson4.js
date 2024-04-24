const userName = prompt("Enter your name");

alert(`Hello, ${userName}! How are you?`);

const number = prompt("Enter a three-digit number");
const splitNumber = number.split("");
let isAllEqual = true;
let isSomeEqual = false;

for (let i = 0; i < splitNumber.length; i++) {
  for (let j = i + 1; j < splitNumber.length; j++) {
    if (splitNumber[i] !== splitNumber[j]) {
      isAllEqual = false;
    } else {
      isSomeEqual = true;
    }
  }
}

if (isAllEqual) {
  alert("All digits are the same");
} else if (isSomeEqual) {
  alert("There are identical digits");
} else {
  alert("There are no identical digits");
}

// Это условие, которое можно захардкодить так как в скоупе задачи нужно проверить только на 3-значные числа, но решил зайти наперед и сделать универсальное условие
// const isAllEqual = splitNumber[0] === splitNumber[1] && splitNumber[1] === splitNumber[2];
// let isSomeEqual = splitNumber[0] === splitNumber[1] || splitNumber[1] === splitNumber[2] || splitNumber[0] === splitNumber[2];
