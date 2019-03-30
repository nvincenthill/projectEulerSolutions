// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

const largestPrimeFactor = n => {
  let prime = 2;

  while (prime < n) {
    if (n % prime === 0) {
      n = n / prime;
    }
    prime += 1;
  }

  return n;
};

console.log(largestPrimeFactor(600851475143)); // 6857
