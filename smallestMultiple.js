// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// brute force solution
const smallestMultiple = n => {
  let result = 20;

  while (!isDivisible(result, n)) {
    result += 1;
  }

  return result;
};

const isDivisible = (num, n) => {
  for (let i = 1; i <= n; i += 1) {
    if (num % i !== 0) {
      return false;
    }
  }

  return true;
};

// tests
console.log(smallestMultiple(20)); // 232792560
