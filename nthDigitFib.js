// The Fibonacci sequence is defined by the recurrence relation:

// F(n) = F(n−1) + F(n−2), where F(1) = 1 and F(2) = 1.
// Hence the first 12 terms will be:

// F(1) = 1
// F(2) = 1
// F(3) = 2
// F(4) = 3
// F(5) = 5
// F(6) = 8
// F(7) = 13
// F(8) = 21
// F(9) = 34
// F(10) = 55
// F(11) = 89
// F(12) = 144

// The 12th term, F(12), is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

const addArray = (arr1, arr2) => {
  let maxLength = Math.max(arr1.length, arr2.length);
  let result = [];
  let carry = 0;
  for (let i = 0; i < maxLength; i += 1) {
    arr1[i] = arr1[i] || 0;
    arr2[i] = arr2[i] || 0;
    let sum = arr1[i] + arr2[i] + carry;
    if (sum > 9) {
      carry = 1;
      result.push(sum - 10);
    } else {
      result.push(sum);
      carry = 0;
    }
  }

  if (carry === 1) {
    result.push(1);
  }
  return result;
};

const nthDigitFib = digits => {
  let lastFib = [1];
  let currentFib = [1];
  let counter = 2;
  while (true) {
    let nextFib = addArray(lastFib, currentFib);
    if (currentFib.length >= digits) {
      return counter;
    }
    counter += 1;
    lastFib = currentFib;
    currentFib = nextFib;
  }
};

// tests
// console.log(nthDigitFib(1000)); // 4782
// console.log(addArray([3], [9])); // 12
