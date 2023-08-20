const randomNumber = (max = 10, min = 0) =>
  Math.ceil(Math.random() * (max - min)) - min;

const randomId = (numberOfDigit = 5) =>
  randomNumber(Math.pow(10, numberOfDigit + 1));

const randomImageUrl = (width = 75, height = 50) =>
  `https://picsum.photos/id/${Math.round(
    Math.random() * 1000
  )}/${width}/${height}`;

export { randomNumber, randomId, randomImageUrl };
