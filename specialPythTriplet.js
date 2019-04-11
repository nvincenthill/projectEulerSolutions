// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pythagoreanTriplet = n => {
  for (let i = 1; i < n; i += 1) {
    for (let j = 1; j < n; j += 1) {
      let k = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
      if (
        Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2) &&
        i + k + j === n
      ) {
        return i * k * j;
      }
    }
  }
};

// tests
// console.log(pythagoreanTriplet(1000));
