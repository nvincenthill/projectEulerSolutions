// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1)
    if (num % i === 0) return false;
  return num > 1;
};

const summationOfPrimes = n => {
  let sum = 0;
  for (let i = 2; i < n; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

// tests
// console.log(summationOfPrimes(2000000)); // tests
