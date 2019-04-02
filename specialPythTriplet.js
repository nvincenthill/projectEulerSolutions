// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pythagoreanTriplet = n => {
  let dictionary = {};
  for (let i = 1; i < Math.sqrt(n); i += 1) {
    for (let j = 1; j < Math.sqrt(n); j += 1) {
      dictionary[i * j] = Math.pow(i, 2) + Math.pow(j, 2);
    }
  }

  console.log(dictionary);

  for (let tuple in dictionary) {
    for (let k = 1; k < Math.sqrt(n); k += 1) {
      if (dictionary[tuple] - Math.pow(k, 2) === n) {
        return Number(tuple) * k;
      }
    }
  }
};

// tests
console.log(pythagoreanTriplet(1000)); // 1440
