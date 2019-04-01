// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const nthPrime = n => {
  let counter = 1;
  let lastPrime = 2;
  while (counter < n) {
    lastPrime += 1;
    if (isPrime(lastPrime)) {
      counter += 1;
    }
  }

  return lastPrime;
};

const isPrime = num => {
  let n = Math.ceil(Math.sqrt(num));
  while (n > 1) {
    if (num % n === 0) {
      return false;
    }
    n -= 1;
  }
  return true;
};

// tests
// console.log(nthPrime(10001)); // 104743
