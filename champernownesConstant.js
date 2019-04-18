// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If d(n) represents the nth digit of the fractional part, find the value of the following expression.

// d(1) × d(10) × d(100) × d(1000) × d(10000) × d(100000) × d(1000000)

const findChamp = max => {
  let champernowneConstant = '';
  let nextInt = 0;
  while (champernowneConstant.length <= max) {
    champernowneConstant += nextInt;
    nextInt += 1;
  }

  let product = 1;
  for (let i = 1; i <= max; i *= 10) {
    product *= Number(champernowneConstant[i]);
  }
  return product;
};

console.log(findChamp(1000000)); // 210
