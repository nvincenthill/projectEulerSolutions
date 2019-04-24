// The prime 41, can be written as the sum of six consecutive primes:
// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.
// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
// Which prime, below one-million, can be written as the sum of the most consecutive primes?

const longestSumOfConsecutivePrimes = ceiling => {
  let maxChain = 0;
  let maxSum = 0;
  let primes = {};
  for (let i = 2; i <= ceiling; i += 1) {
    if (isPrime(i)) {
      primes[i] = true;
    }
  }
  let primesArr = Object.keys(primes);
  let primeSum = [0];

  // loop through prime number array and calculate sum of subarrays (starting index 0 to n)
  for (let i = 0; i < primesArr.length; i++) {
    primeSum[i + 1] = Number(primeSum[i]) + Number(primesArr[i]);
  }
  for (let i = 0; i < primesArr.length; i += 1) {
    // need to look for longer chain, so j starts from i - currentChain - 1 to 0
    for (let j = i - maxChain - 1; j >= 0; j -= 1) {
      // if sum of this subarray is bigger than ceiling, no need to proceed, break out
      if (primeSum[i] - primeSum[j] > ceiling) break;
      // if sum of this subarray is a prime, make it currentChain and save result
      if (primes[primeSum[i] - primeSum[j]]) {
        maxChain = i - j;
        maxSum = primeSum[i] - primeSum[j];
      }
    }
  }
  return maxSum;
};

const isPrime = n => {
  if (isNaN(n) || !isFinite(n) || n < 2) return false;
  var m = Math.sqrt(n);
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
};

// tests
//console.log(longestSumOfConsecutivePrimes(100));
//console.log(longestSumOfConsecutivePrimes(1000));
console.log(longestSumOfConsecutivePrimes(1000000));
