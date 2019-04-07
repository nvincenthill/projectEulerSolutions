const getSumOfLargePower = n => {
  const number = [1];

  for (let i = 0; i < n; i += 1) {
    let overflow = 0;
    let count = number.length + 1;

    for (let j = 0; j < count; j += 1) {
      let digit = number[j] || 0;
      digit = 2 * digit + overflow;

      if (digit > 9) {
        digit -= 10;
        overflow = 1;
      } else {
        overflow = 0;
      }

      number[j] = digit;
    }
  }

  return number.reduce((acc, el) => acc + el);
};

// tests
console.log(getSumOfLargePower(2, 1000)); // 1366
