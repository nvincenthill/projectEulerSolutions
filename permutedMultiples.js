// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

const smallestPermutedInt = () => {
  let counter = 1;
  while (true) {
    if (isPermutedMultiple(counter)) {
      return counter;
    }
    counter += 1;
  }
};

const isPermutedMultiple = num => {
  for (let i = 2; i < 7; i += 1) {
    if (!containsSameDigits(num, num * i)) {
      return false;
    }
  }
  return true;
};

// check if string is permutation of another string
const containsSameDigits = (num1, num2) => {
  let a = num1.toString();
  let b = num2.toString();

  if (a.length !== b.length) {
    return false;
  }

  var letters = {},
    length = a.length;

  for (var x = 0; x < length; x += 1) {
    var l = a.charAt(x);
    letters[l] = isNaN(letters[l]) ? 1 : letters[l] + 1;
  }

  for (var y = 0; y < length; y += 1) {
    var m = b.charAt(y);
    letters[m]--;
  }

  for (var z in letters) {
    if (letters[z] !== 0) {
      return false;
    }
  }

  return true;
};

// test
// console.log(smallestPermutedInt()); // 142857
