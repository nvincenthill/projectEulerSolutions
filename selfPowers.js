// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

const findDigitsInPowerSeries = (limit, digits) => {
  let result = 0;
  let modulo = digits * 1000000000;

  for (let i = 1; i <= limit; i++) {
    let temp = i;
    for (let j = 1; j < i; j++) {
      temp *= i;
      if (temp >= Number.MAX_SAFE_INTEGER / limit) {
        temp %= modulo;
      }
    }

    result += temp;
    result %= modulo;
  }

  return result;
};

// tests
console.log(findDigitsInPowerSeries(1000, 10)); // 9110846700
