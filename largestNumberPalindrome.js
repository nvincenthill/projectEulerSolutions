// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const largestNumberPalindrome = () => {
  let largestPalindrome = 0;
  for (let i = 100; i < 999; i++) {
    for (let j = 100; j < 999; j++) {
      if (isPalindrome(i * j) && largestPalindrome < i * j) {
        largestPalindrome = i * j;
      }
    }
  }
  return largestPalindrome;
};

const isPalindrome = n => {
  let string = n + '';
  return (
    string
      .split('')
      .reverse()
      .join('') === string
  );
};

console.log(largestNumberPalindrome()); // 906609
