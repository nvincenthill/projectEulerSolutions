const createPascalTriangle = n => {
  let triangle = [];

  if (n < 1) {
    return undefined;
  }

  if (n >= 1) {
    triangle.push([1]);
  }

  if (n >= 2) {
    triangle.push([1, 1]);
  }

  if (n > 2) {
    let rowsLeft = n - 2;

    while (rowsLeft) {
      const nextRow = [1];

      for (let i = 0; i < triangle[triangle.length - 1].length - 1; i += 1) {
        nextRow.push(
          triangle[triangle.length - 1][i] +
            triangle[triangle.length - 1][i + 1]
        );
      }
      nextRow.push(1);

      triangle.push(nextRow);
      rowsLeft -= 1;
    }
  }

  return triangle;
};

// console.log(createPascalTriangle(10));
