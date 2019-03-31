// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquareDifference = n => {
  let squareOfTheSums = 0,
    sumOfTheSquares = 0;

  for (let i = 1; i <= n; i += 1) {
    sumOfTheSquares += Math.pow(i, 2);
  }

  for (let i = 1; i <= n; i += 1) {
    squareOfTheSums += i;
  }

  squareOfTheSums = Math.pow(squareOfTheSums, 2);

  return squareOfTheSums - sumOfTheSquares;
};

// tests
console.log(sumSquareDifference(100)); // 4613732
