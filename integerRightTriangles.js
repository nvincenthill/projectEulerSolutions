// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximized?

const findMaxedRightTriangle = maxPerimeter => {
  let maxSolutions = 0;
  let result;
  for (let i = 1; i <= maxPerimeter; i += 1) {
    let numSolutions = findSolutions(i);
    if (numSolutions > maxSolutions) {
      maxSolutions = numSolutions;
      result = i;
    }
  }

  return result;
};

const findSolutions = perimeter => {
  let solutionsCount = 0;
  for (let i = 0; i < perimeter; i++) {
    for (let j = i; j < perimeter; j++) {
      const potentialPerimeter =
        i + j + Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
      if (potentialPerimeter === perimeter) {
        solutionsCount += 1;
      }
    }
  }
  return solutionsCount;
};

// tests
// console.log(findMaxedRightTriangle(1000)); // 840
