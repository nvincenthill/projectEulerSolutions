// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const longestCollatzChain = max => {
  let largestChain = 0;
  let collatz;
  for (let i = 1; i <= max; i += 1) {
    let current = i;
    let currentChain = 0;
    while (current !== 1) {
      if (current % 2 === 0) {
        current = current / 2;
      } else {
        current = current * 3 + 1;
      }
      currentChain += 1;
    }
    if (currentChain > largestChain) {
      largestChain = currentChain;
      collatz = i;
    }
  }
  return collatz;
};

// tests
// console.log(longestCollatzChain(1000000)); // 837799
