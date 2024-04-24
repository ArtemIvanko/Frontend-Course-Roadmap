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

const userBirthYear = prompt("What year were you born?");
const userCurrentPlace = prompt("Where do you live now?").toLowerCase();
const userFavSport = prompt("What is your favorite sport?");

const countries = {
  ukraine : {
    capital : "kyiv",
    country : "Ukraine",
  },
  usa : {
    capital : "washington",
    country : "USA",
  },
  uk : {
    capital : "london",
    country : "UK",
  },
};

const sports = {
  football : "football",
  basketball : "basketball",
  tennis : "tennis",
  volleyball : "volleyball",
  hockey : "hockey",
};

const showUserDetails = () => {
  if (!userBirthYear || !userCurrentPlace || !userFavSport) {
    alert("Please provide all the information.");
    return;
  }

  if (userCurrentPlace === countries.ukraine.capital) {
    alert(
      `You were born in ${userBirthYear}, you currently live in ${userCurrentPlace}, capital of ${countries.ukraine.country}, and your favorite sport is ${userFavSport}.`);
  } else if (userCurrentPlace === countries.usa.capital) {
    alert(
      `You were born in ${userBirthYear}, you currently live in ${userCurrentPlace}, capital of ${countries.usa.country}, and your favorite sport is ${userFavSport}.`);
  } else if (userCurrentPlace === countries.uk.capital) {
    alert(
      `You were born in ${userBirthYear}, you currently live in ${userCurrentPlace}, capital of ${countries.uk.country}, and your favorite sport is ${userFavSport}.`);
  } else {
    alert(
      `You were born in ${userBirthYear}, you currently live in ${userCurrentPlace}, and your favorite sport is ${userFavSport}.`);
  }

  if (userFavSport === sports.football) {
    alert("Football is a great sport!");
  } else if (userFavSport === sports.basketball) {
    alert("Basketball is a great sport!");
  } else if (userFavSport === sports.tennis) {
    alert("Tennis is a great sport!");
  } else if (userFavSport === sports.volleyball) {
    alert("Volleyball is a great sport!");
  } else if (userFavSport === sports.hockey) {
    alert("Hockey is a great sport!");
  } else {
    alert("Great choice!");
  }
};

showUserDetails();

//TODO: Refactor the code to use switch statement instead of if-else
//TODO: Remove duplicated code
//TODO: Use loop instead of hardcoding the code