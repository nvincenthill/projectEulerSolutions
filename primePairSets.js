// The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

// Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

const findPrimeSetSum = () => {};

const getPrimes = max => {
  let primes = [];

  for (let i = 0; i < max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

const isPrime = n => {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  var m = Math.sqrt(n);
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
};

// tests
// console.log(findPrimeSetSum());
